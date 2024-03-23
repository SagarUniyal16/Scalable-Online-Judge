import path from "path";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDirPath = path.join(__dirname, "outputs");
 const cleanup = () => {
  return new Promise((resolve, reject) => {
    exec(`rmdir /s /q "${outputDirPath}"`, (error, stderr, stdout) => {
      if (error) {
        reject(error);
      } else if (stderr) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};

export default cleanup;