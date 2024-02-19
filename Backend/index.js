import cors from 'cors';
import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";

import loginRouter from "./Routes/login.js"
import signupRouter from "./Routes/Signup.js";


dotenv.config();
const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not set in the environment


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL);

app.use("/login",loginRouter);

app.use("/signup",signupRouter);


app.listen(port, () => {
    console.log("Server listining on Port ");

});