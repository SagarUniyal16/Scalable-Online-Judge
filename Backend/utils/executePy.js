import { spawn } from "child_process";

const executePy = async (filePath, inputs) => {
  const inputsArr=inputs.split(" ");
  let inputString="";
  inputsArr.map((ip)=>{
    inputString+=ip;
    inputString+="\n";
  })
  
  try {
    const result = await new Promise((resolve, reject) => {
      const pythonProcess = spawn("python", [filePath]);

      if (inputs) {
        pythonProcess.stdin.write(inputString);
        pythonProcess.stdin.end();
      }

      let result = "";

      pythonProcess.stdout.on("data", (data) => {
        result += data.toString();
      });

      pythonProcess.stderr.on("data", (data) => {
        reject(`Error from Python: ${data.toString()}`);
      });

      pythonProcess.on("exit", (code) => {
        if (code !== 0) {
          reject(`Python process exited with code ${code}`);
        } else {
          resolve(result.trim());
        }
      });
    });

    return result;
  } catch (error) {
    console.error("Error executing Python script:", error);
    throw error; // Re-throw the error to propagate it further if needed
  }
};

export default executePy;
