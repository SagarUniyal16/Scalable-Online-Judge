import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { exec, execSync, spawn } from "child_process";
import getJavaFileName from "./getJavaFileName.js";
import { stdout } from "process";
const __dirname = dirname(fileURLToPath(import.meta.url));

const executeJava = async (filePath, inputs) => {
  const outputDirPath = path.join(__dirname, "outputs");

  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }
  const javaOutputs = path.join(outputDirPath, "java");
  if (!fs.existsSync(javaOutputs)) {
    fs.mkdirSync(javaOutputs, { recursive: true });
  }

  
  
  return await new Promise(async(resolve, reject) => {
    try{
      execSync(`javac "${filePath}" -d "${javaOutputs}"`);
      
        const fileName=await getJavaFileName(javaOutputs);
      
        const fileClassName=fileName[0].split(".")[0];
       
       
        resolve( new Promise(async(resolve,reject)=>{
           exec(`cd "${javaOutputs}"`,async()=>{
           
              
              const child = await spawn("java",[fileClassName],{cwd:javaOutputs});
              if (inputs != null) {
                child.stdin.write(inputs);
                child.stdin.end();
              }
              let result = "";
              await child.stdout.on("data", (data) => {
                result += data.toString();
              
              });
            
              child.stdout.on("end", () => {
                resolve(result.trim()); // Resolve with trimmed string
              });
            }
           )
        }))}
        catch(err)
        {
          resolve("Error is "+err);
        }
      
       
      
    
      }
    );
  

};

export default executeJava;