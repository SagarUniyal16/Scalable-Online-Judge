import { Router } from "express";
const router = Router();
import generateFile from "../utils/generateFile.js";
import executePy from "../utils/executePy.js";
// import { cleanup } from "../utils/cleanup.js";
import executeCpp from "../utils/executeCpp.js";
import executeJava from "../utils/executeJava.js";
import testcases from "../Models/testcase.model.js";
import submitProblem from "../utils/submitProblem.js";

router.post("/", async (req, res) => {
  const {
    username = null,
    probId = null,
    language = "cpp",
    code,
    inputs = null,
    submit,
  } = req.body;

  if (code === undefined || code === "") {
    res.status(404).json({
      success: "failed",
      message: "please write code before running in the compiler",
    });
  }

  let testcasesArr;
  let outputArr;
  if (submit) {
    const testcase = await testcases.findOne({
      problemId: probId,
    });
    testcasesArr = testcase.input;
    outputArr = testcase.output;
  }
  const filePath = await generateFile(language, code);

  if (language == "cpp") {
    if (submit) {
      //if submit button is clicked
      for (let i = 0; i < testcasesArr.length; i++) {
        const inputs = testcasesArr[i];
        const expectedOutput = outputArr[i];
        console.log(inputs)
        console.log(expectedOutput)

        let output;

        try {
          output = await executeCpp(filePath, inputs);
        } catch (err) {
          // await cleanup();
          return res.status(200).json({ output: err.message });
        }

        if (output.trim() !== expectedOutput.trim()) {
          // await cleanup();
          return res.status(200).json({
            verdict: "failed",
            output: `Failed at testcase no. ${
              i + 1
            } => Testcase input is ${inputs} .
       Your output  is ${output}. 
         Expected output is ${expectedOutput}.`,
          });
        }
      }
      // await cleanup();
      submitProblem(probId, username, code);
      return res
        .status(200)
        .json({ verdict: "success", output: "Verdict : Success \nAll the testcases passed" });
    } else {
      //if run button is clicked
      let output;
      try {
        output = await executeCpp(filePath, inputs);
      } catch (err) {
        // await cleanup();
        return res.status(200).json({ output: err.message });
      }

      // await cleanup();
      res.status(200).json({ output });
    }
  } else if (language == "py") {
    if (submit) {
      for (let i = 0; i < testcasesArr.length; i++) {
        const inputs = testcasesArr[i];
        const expectedOutput = outputArr[i];
        let output;
        try {
          output = await executePy(filePath, inputs);
        } catch (err) {
          return res
            .status(200)
            .json({ output: "Syntax error.Please check your program" });
        }

        if (output.trim() !== expectedOutput.trim()) {
          return res.status(200).json({
            verdict: "failed",
            output: `Failed at testcase no. ${
              i + 1
            } => Testcase input is ${inputs} .
       Your output  is ${output}. 
         Expected output is ${expectedOutput}.`,
          });
        }
      }
      submitProblem(probId, username, code);
      return res
        .status(200)
        .json({ verdict: "success", output: "Success, All the testcases passed" });
    } else {
      let output;
      try {
        output = await executePy(filePath, inputs);
      } catch (err) {
        return res
          .status(200)
          .json({ output: "Syntax error.Please check your program" });
      }
      res.status(200).json({ output });
    }
  } else {
    if (submit) {
      for (let i = 0; i < testcasesArr.length; i++) {
        const inputs = testcasesArr[i];
        const expectedOutput = outputArr[i];

        const output = await executeJava(filePath, inputs);
        if (output.startsWith("Error")) {
          const error = output.split("error:")[1];
          // await cleanup();
          return res.status(200).json({ output: error });
        }

        if (output.trim() !== expectedOutput.trim()) {
          // await cleanup();
          return res.status(200).json({
            verdict: "failed",
            output: `Failed at testcase no. ${
              i + 1
            } => Testcase input is ${inputs} .
       Your output  is ${output}. 
         Expected output is ${expectedOutput}.`,
          });
        }
      }
      // await cleanup();
      submitProblem(probId, username, code);
      return res
        .status(200)
        .json({ verdict: "success", output: "All the testcases passed" });
    } else {
      const output = await executeJava(filePath, inputs);
      if (output.startsWith("Error")) {
        const error = output.split("error:")[1];
        // await cleanup();

        return res.status(200).json({ output: error });
      }
      // await cleanup();
      res.status(200).json({ output });
    }
  }
});

export default router;