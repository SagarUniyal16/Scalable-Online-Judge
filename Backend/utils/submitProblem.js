import User from "../Models/user.model.js";
import Submission from "../Models/submission.model.js"
const submitProblem=async(problemId,username,code)=>{
const user=await User.findOne({
    userName:username,
})

if(user)
{
const problemsSolvedArr=user.problemsSolved;
const ifAlreadySolved=problemsSolvedArr.filter((probId)=>{
    return probId==problemId;
})
const isProblemAlreadySubmitted=await Submission.findOne({
    userId:user._id,problemId:problemId
});
if(isProblemAlreadySubmitted)
{
    await Submission.updateOne({
        userId:user._id,
        problemId:problemId,
    },{
        submittedCode:code,
    }
    )
   
}
else{
   await Submission.create({
    userId:user._id,
    problemId:problemId,
    submittedCode:code,
   })
  
}

if(ifAlreadySolved.length!=0)
{
    console.log("Problem already submitted");
    return ;
}
else
{
user.problemsSolved.push(problemId);
user.save().then(()=>{
    console.log("Problem submitted successfully")
})


}
}

}
export default submitProblem;