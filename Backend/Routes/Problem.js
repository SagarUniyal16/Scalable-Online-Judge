import {Router} from "express";
import Problem from "../Models/problem.model.js";

const problemRouter=Router();

problemRouter.post("/",async(req,res)=>{
    const  {problemName,problemStatement,difficultyLevel,solutionCode}=req.body;
    const problemToAdd=new Problem({
        Name:problemName,
        Statement:problemStatement,
        Difficulty:difficultyLevel,
        Code:solutionCode,
    })
    
    const response=await problemToAdd.save();
   
    if(response.length!=0)
        res.status(200).json({"msg":"problem added successfully"})
    else{
        res.status(400).json({"msg":"Failed to add the problem"})
    }
    
})


export default problemRouter;