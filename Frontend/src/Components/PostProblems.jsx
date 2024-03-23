
import {useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const PostProblems=()=>{


const [problemName,setProblemName]=useState(" ");
const [problemStatement,setProblemStatement]=useState(" ");
const [difficultyLevel,setDifficultyLevel]=useState(" ");
const [expectedInput,setExpectedInput]=useState(null);
const [expectedOutput,setExpectedOutput]=useState(null);
 const user=useSelector((store)=>store.user.userData);
const clickHandler=async()=>{

  // console.log(`${problemName} # ${problemStatement} # ${difficultyLevel} # ${expectedInput} # ${expectedOutput}`)
 
  try{
  const response=await axios.post("http://localhost:3002/problem",{
    problemName,
    problemStatement,
    difficultyLevel,
    expectedInput,
    expectedOutput,
  })
  console.log(response);
  }
  catch(e)
  {
    console.log(e);
  }
}
    
return (
        <div className="flex justify-center w-full">
        <div className="my-16 md:w-1/2 bg-gray-200 p-8 rounded-md w-full">
        <div className="w-full my-4 ">
        <label className="w-full">
            <h5 className="md:text-xl font-bold text-center">Problem Name:</h5>
            <input className=" mt-4 w-full rounded-md h-12 shadow-md p-4 md:text-md text-sm"type="text" placeholder="Enter name of the problem" onChange={(e)=>{
                setProblemName(e.target.value);
            }}/>
        </label>
        </div>
        <div className="w-full my-4">
        <label className="">
          <h5 className="md:text-xl font-bold text-center">Problem Statement:</h5>
          <textarea 
    type="text" 
    className="mt-4 w-full rounded-md h-72 shadow-md p-4 md:text-md text-sm resize-none" 
    placeholder="Describe your problem" 
    onChange={(e) => {
        setProblemStatement(e.target.value);
    }}
/>
        </label>
        </div>
        <div className="w-full my-4 text-center">
        <label>
          <h5 className="md:text-xl font-bold text-center">Problem Difficulty Level:</h5>
            {/* <input type="text" className="difficulty-inputbox" placeholder="Easy/Med/Hard" onChange={(e)=>{
                 setDifficultyLevel(e.target.value);   }}/>*/}
           <select className="my-4 w-1/3 text-center bg-[#202020] text-white p-2 font-bold rounded-md md:text-md text-sm"onChange={(e)=>{
            setDifficultyLevel(e.target.value);
           }}>
            <option value="easy" className="font-bold">Easy</option>
            <option value="medium" className="font-bold">Medium</option>
            <option value="hard" className="font-bold">Hard</option>
           </select>
        </label>
        </div>
        <div className="w-full my-4 text-center">
        <label>
          <h5 className="md:text-xl font-bold text-center">Expected input</h5>
            <textarea type="text" className="mt-4 w-full rounded-md h-40 shadow-md p-4 md:text-md text-sm resize-none "   placeholder="Inputs" onChange={(e)=>{
                setExpectedInput(e.target.value);
            }}/>
        </label>
        </div>
        <div className="w-full my-4 text-center">
        <label>
          <h5 className="md:text-xl font-bold text-center">Expected Output</h5>
            <textarea type="text" className="mt-4 w-full rounded-md h-40 shadow-md p-4 md:text-md text-sm resize-none "   placeholder="Outputs" onChange={(e)=>{
                setExpectedOutput(e.target.value);
            }}/>
        </label>
        </div>
        <div className="w-full my-4 text-center">
          <button className="bg-[#202020] text-white font-bold rounded-md shadow-lg md:w-1/3 md:text-lg h-14 text-sm p-2"onClick={clickHandler}>Add problem</button>
        </div>
        </div>
        </div>
    )
    }
          


export default PostProblems;