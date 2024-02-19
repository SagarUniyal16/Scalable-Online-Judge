import { Router } from "express";
import User from "../Models/user.model.js";
const loginRouter = Router();

loginRouter.post('/', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    User.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})


export default loginRouter;