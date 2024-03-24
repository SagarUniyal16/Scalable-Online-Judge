import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const PostProblems = () => {
  const [problemName, setProblemName] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [expectedInput, setExpectedInput] = useState(null);
  const [expectedOutput, setExpectedOutput] = useState(null);
  const user = useSelector((store) => store.user.userData);

  const clickHandler = async () => {
    try {
      const response = await axios.post("http://localhost:3002/problem", {
        problemName,
        problemStatement,
        difficultyLevel,
        expectedInput,
        expectedOutput,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Post a Problem</h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full border rounded-md px-4 py-2"
            placeholder="Problem Name"
            value={problemName}
            onChange={(e) => setProblemName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full h-40 border rounded-md px-4 py-2 resize-none"
            placeholder="Problem Statement"
            value={problemStatement}
            onChange={(e) => setProblemStatement(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <select
            className="w-full border rounded-md px-4 py-2"
            value={difficultyLevel}
            onChange={(e) => setDifficultyLevel(e.target.value)}
          >
            <option value="">Select Difficulty Level</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="mb-4">
          <textarea
            className="w-full h-40 border rounded-md px-4 py-2 resize-none"
            placeholder="Expected Input"
            value={expectedInput}
            onChange={(e) => setExpectedInput(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <textarea
            className="w-full h-40 border rounded-md px-4 py-2 resize-none"
            placeholder="Expected Output"
            value={expectedOutput}
            onChange={(e) => setExpectedOutput(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md py-2 px-4"
            onClick={clickHandler}
          >
            Add Problem
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostProblems;
