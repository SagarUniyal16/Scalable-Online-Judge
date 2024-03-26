import {Router}from "express";
import User from "../Models/user.model.js";
import Submission from "../Models/submission.model.js";
const router=Router();

router.post("/",async(req,res)=>{
    
    const {username,problemId}=req.body;
    const user=await User.findOne({userName:username});
    if(user){
    const userId=user._id;
   
    
    const submission=await Submission.findOne({userId:userId,problemId:problemId});
    
    if(submission)
    {
        const code=submission.submittedCode;
        res.status(200).json({submission:code});

    }
    else{
        res.status(200).json({submission:"No submission till now for this problem"});
    }
}
else{
    res.status(400).json({message:"Unauthorized access"});
}
})
export default router;