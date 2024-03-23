import React, { useState, useRef } from "react";
import axios from "axios";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useDebouncedCallback } from 'use-debounce';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Playground() {
  const [language, setLanguage] = useState("cpp");
  const { problemId } = useParams();
  const username = useSelector((store) => store.user.userData);
  const inputRef = useRef();
  const editorRef = useRef();
  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const [output, setOutput] = useState(undefined);
  const [loadingRun, setLoadingRun] = useState(false); // State for loading indicator for Run
  const [loadingSubmit, setLoadingSubmit] = useState(false); // State for loading indicator for Submit

  const setTheOutputDiv = (data) => {
    setOutput(data);
    setLoadingRun(false); // Stop loading indicator for Run when request is complete
    setLoadingSubmit(false); // Stop loading indicator for Submit when request is complete
  };

  const debouncedCodeChange = useDebouncedCallback((newCode) => {
    setCode(newCode);
  }, 300);

  const runClickHandler = async () => {
    setLoadingRun(true); // Start loading indicator for Run
    const response = await axios.post("http://localhost:3002/problem/run", {
      language,
      code,
      submit: false,
      inputs: inputRef.current.value,
    });
    setTheOutputDiv(response.data.output);
  };

  const submitHandler = async () => {
    setLoadingSubmit(true); // Start loading indicator for Submit
    const response = await axios.post("http://localhost:3002/problem/run", {
      language,
      code,
      probId: problemId,
      submit: true,
      username,
    });
    setTheOutputDiv(response.data.output);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <select
            className="px-4 py-2 rounded bg-gray-200 text-gray-800"
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="py">Python</option>
          </select>
          <div>
            <button
              className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2 ${loadingRun && 'opacity-50 cursor-not-allowed'}`}
              onClick={runClickHandler}
              disabled={loadingRun || loadingSubmit} // Disable button during loading
            >
              {loadingRun ? 'Running...' : 'Run'}
            </button>
            <button
              className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ${loadingSubmit && 'opacity-50 cursor-not-allowed'}`}
              onClick={submitHandler}
              disabled={loadingSubmit || loadingRun} // Disable button during loading
            >
              {loadingSubmit ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6" style={{ height: "auto" }}>
              <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={(code) => highlight(code, languages.js)}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 12,
                  backgroundColor: "#f7fafc",
                  border: "1px solid #cbd5e0",
                  borderRadius: "4px",
                  width: "100%", // Set width of Editor
                  minHeight: "200px", // Set minimum height of Editor
                }}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <textarea
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              resize: 'none',
              height: '90px',
              marginTop: '10px', // Add margin top
            }}
            placeholder="Input"
            ref={inputRef}
            className="w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none focus:border-indigo-500"
          ></textarea>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Output</h2>
          <div
            className="text-sm font-mono"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {output}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playground;
