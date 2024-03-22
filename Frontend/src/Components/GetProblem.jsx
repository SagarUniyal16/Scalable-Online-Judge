import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Playground from './Playground';

function GetProblem() {
  const [problemName, setProblemName] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [problemDifficulty, setProblemDifficulty] = useState('');

  const { problemId } = useParams();

  useEffect(() => {
    fetchProblem();
  }, []);

  const fetchProblem = async () => {
    const response = await axios.get(`http://localhost:3002/problem/${problemId}`);
    const { Difficulty, Name, Statement } = response.data.problemDetails;

    setProblemName(Name);
    setProblemDifficulty(Difficulty);
    setProblemStatement(Statement);
  };

  const difficulty =problemDifficulty.toUpperCase();
    let textColor = "";
    if (difficulty == "EASY") {
      textColor = "text-green-700";
    } else if(difficulty=="HARD"){
      textColor = "text-red-700";
    }
    else{
      textColor="text-yellow-700"
    }
    console.log(textColor);

  return (
    <div className="container mx-auto flex justify-center items-start">
      <div className="w-full md:w-9/12 p-4 md:p-8 border border-gray-300 rounded-lg shadow-lg my-8" style={{ minHeight: '500px' }}> {/* Adjust the minHeight */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">{problemName}</h2>
          <div className={`border-2 rounded-md p-2 ${textColor}`}>{difficulty.toUpperCase()}</div>
        </div>
        <p className="text-lg mt-4">{problemStatement}</p>
      </div>
      <div className="w-full md:w-9/12">
        <Playground />
      </div>
    </div>
  );
}

export default GetProblem;
