import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const PostProblems = () => {
  const [problemName, setProblemName] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("easy");
  const [solutionCode, setSolutionCode] = useState("");

  const clickHandler = async () => {
    try {
      const response = await axios.post("http://localhost:3001/problem", {
        problemName,
        problemStatement,
        difficultyLevel,
        solutionCode,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="post-problems-container bg-light p-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group controlId="problemName">
                <Form.Label>Problem Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter problem name"
                  value={problemName}
                  onChange={(e) => setProblemName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="problemStatement">
                <Form.Label>Problem Statement:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Enter problem statement"
                  value={problemStatement}
                  onChange={(e) => setProblemStatement(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="difficultyLevel">
                <Form.Label>Problem Difficulty Level:</Form.Label>
                <Form.Control
                  as="select"
                  value={difficultyLevel}
                  onChange={(e) => setDifficultyLevel(e.target.value)}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="solutionCode">
                <Form.Label>Code:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  placeholder="Enter solution code"
                  value={solutionCode}
                  onChange={(e) => setSolutionCode(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={clickHandler}>
                Add Problem
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostProblems;
