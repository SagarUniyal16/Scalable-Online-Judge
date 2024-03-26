import express from "express";

import cors from "cors";

import dotenv from "dotenv";

import loginRouter from "./Routes/login.js"

import signupRouter from "./Routes/Signup.js";
import runProblemRouter from "./Routes/runProblem.js"
import problemRouter from "./Routes/Problem.js";
import submissionRouter from "./Routes/Submission.js";

import { urlencoded } from "express";

const app = express();

const PORT = process.env.PORT;

dotenv.config();

app.use(cors());
 
app.use(express.json());
app.use(urlencoded({extended:true}));


app.use("/login",loginRouter);

app.use("/register",signupRouter);

app.use("/problem",problemRouter);

app.use("/problem/run",runProblemRouter);

app.use("/getsubmission", submissionRouter);

app.listen(PORT, () => {
  console.log("App is running ");
});
