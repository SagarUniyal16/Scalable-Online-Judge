import { Router } from "express";
const router = Router();
import generateFile from "../utils/generateFile.js";
import executePy from "../utils/executePy.js";
import cleanup from "../utils/cleanup.js";
import executeCpp from "../utils/executeCpp.js";
import executeJava from "../utils/executeJava.js";

router.post("/", async (req, res) => {
  const { language = "cpp", code,inputs=null } = req.body;
//   console.log(language)
//   console.log(code)
  
  if (code === undefined || code === "")
   {
    res
      .status(404)
      .json({
        success: "failed",
        message: "please write code before running in the compiler",
      });
  }

  const filePath = await generateFile(language, code);
  
  let output = undefined;
  

  if (language == "cpp") {
    output = await executeCpp(filePath,inputs);
    await cleanup();
   
  } else if(language=="py") {
    output = await executePy(filePath,inputs);
  }
  else{
    output=await executeJava(filePath,inputs);
    await cleanup();
  }

  
  res.status(200).json({ output });
});

export default router;

