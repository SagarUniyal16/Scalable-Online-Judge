// executeCpp.js

import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { dirname } from "node:path";
import { spawn } from "child_process";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)
const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

export const executeCpp = (filepath) => {
    const jobId = path.basename(filepath).split(".")[0];
    const outPath = path.join(outputPath, `${jobId}.exe`);
    console.log(outPath)
    console.log(filepath)

    return new Promise((resolve, reject) => {
        exec(
        `g++ "${filepath}" -o "${outPath}" && cd "${outputPath}" && .\\${jobId}.exe`,
            (error, stdout, stderr) => {
                if (error) {
                    reject({ error, stderr });
                }
                if (stderr) {
                    reject(stderr);
                }
                resolve(stdout);
            }
        );
      
    });
};
