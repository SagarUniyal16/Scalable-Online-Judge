import fs from "fs";

import path from "path";

import { v4 as uuidv4 } from "uuid";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

    const __dirname = dirname(fileURLToPath(import.meta.url));

const codesDir = path.join(__dirname, "codes");
if (!fs.existsSync(codesDir)) {
  fs.mkdirSync(codesDir, { recursive: true });
}

 const generateFile = async (language, code) => {
  const languageDir = path.join(codesDir, language);
  if (!fs.existsSync(languageDir)) {
    fs.mkdirSync(languageDir, { recursive: true });
  }
  const uniqueString = uuidv4();
  const fileName = `${uniqueString}.${language}`;
  const filePath = path.join(languageDir, fileName);

  await fs.writeFileSync(filePath, code);
  return filePath;
};

export default generateFile;