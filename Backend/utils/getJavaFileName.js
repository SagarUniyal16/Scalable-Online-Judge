
import fs from "fs"
const getJavaFileName=async(outputFilesPath)=>{
   
return  await new Promise(async(resolve, reject) => {
    await fs.readdir(outputFilesPath, (err, files) => {
        if (err) {
            reject(err);
        } else {
            resolve(files.filter(file => file.endsWith('.class')));
        }
    });
});}
export default getJavaFileName;