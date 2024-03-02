import express from "express";

import cors from "cors";

import dotenv from "dotenv";

import loginRouter from "./Routes/Login.js"

import signupRouter from "./Routes/Signup.js";

import { urlencoded } from "express";

const app = express();

const PORT = process.env.PORT;

dotenv.config();

app.use(cors());

app.use(express.json());
app.use(urlencoded({extended:true}));


app.use("/login",loginRouter);

app.use("/register",signupRouter);



app.listen(PORT, () => {
  console.log("App is running ");
});
