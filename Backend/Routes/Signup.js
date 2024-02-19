import { Router } from "express";
import User from "../Models/user.model.js";
const signupRouter=Router();

signupRouter.post('/', (req, res)=>{
    // To post / insert data into database

    const {email, password} = req.body;
    User.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            User.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

export default signupRouter;