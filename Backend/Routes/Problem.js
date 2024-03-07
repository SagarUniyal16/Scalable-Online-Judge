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

problemRouter.get("/",async(req,res)=>{
    try{
        const allProblems=await Problem.find({});
        res.send(allProblems);
    }
    catch(error)
    {
        console.log(error);
        res.send("Something wrong with the database");
    }
    
    
})

problemRouter.get("/:id",async(req,res)=>{
    const probId=req.params.id;
    
    try{
    const problem=await Problem.findOne({_id:probId});
   
    res.status(200).json({
        msg:"success",problemDetails:problem
    })
    }
    catch(error)
    {
        console.log(error);
        res.status(200).json({
            msg:"Failed",error:error
        })
    }

  
  })
  
export default problemRouter;