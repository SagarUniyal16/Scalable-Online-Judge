import { Router } from "express";
import User from "../Models/user.model.js";
const signupRouter=Router();


signupRouter.post("/",async(req,res)=>{
    const {userName, email, password } = req.body.values;
    
      const user = new User({
        userName,
        email,
        password,
      });
      console.log(user);
      await user.save().then(() => {
        res.send("User registered successfully");
      });
    })
export default signupRouter;