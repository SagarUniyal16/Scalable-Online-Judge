import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { exec, spawn } from "child_process";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const executeCpp = async (filePath, inputs) => {
  const outputDirPath = path.join(__dirname, "outputs");

  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }
  const cppOutputs = path.join(outputDirPath, "cpp");
  if (!fs.existsSync(cppOutputs)) {
    fs.mkdirSync(cppOutputs, { recursive: true });
  }
  const fileName = path.basename(filePath).split(".")[0];
  const execFile = `${fileName}.exe`;
  const outputPath = path.join(cppOutputs, execFile);
  return await new Promise((resolve, reject) => {
    exec(
      `g++ "${filePath}" -o "${outputPath}" && cd "${cppOutputs}"`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
        }
        if (stderr) {
          reject(stderr);
        }
        const child = spawn(outputPath);
        if (inputs != null) {
          child.stdin.write(inputs);
          child.stdin.end();
        }
        let result = "";
        child.stdout.on("data", (data) => {
          result += data.toString(); // Convert buffer to string
        });
        child.stdout.on("end", () => {
          resolve(result.trim()); // Resolve with trimmed string
        });
      }
    );
  });
};

