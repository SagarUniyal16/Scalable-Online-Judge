import { Router } from "express";
const router = Router();
import {generateFile} from "../utils/generateFile.js";
import { executeCpp } from '../utils/executeCpp.js';


router.post("/", async (req, res) => {
    // const language = req.body.language;
    // const code = req.body.code;

    const { language = 'cpp', code } = req.body;
    console.log(language)
    console.log(code)
    if (code === undefined) {
        return res.status(404).json({ success: false, error: "Empty code!" });
    }
    try {
        const filePath = await generateFile(language, code);
        const output = await executeCpp(filePath);
        res.json({ filePath, output });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

export default router;