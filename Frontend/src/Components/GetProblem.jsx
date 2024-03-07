import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function GetProblem() {
  const [problemName, setProblemName] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [problemDifficulty, setProblemDifficulty] = useState('');

  const { problemId } = useParams();

  useEffect(() => {
    fetchProblem();
  }, []);

  const fetchProblem = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/problem/${problemId}`);
      const { Difficulty, Name, Statement } = response.data.problemDetails;

      setProblemName(Name);
      setProblemDifficulty(Difficulty);
      setProblemStatement(Statement);
    } catch (error) {
      console.error('Error fetching problem:', error);
    }
  };

  const difficulty = problemDifficulty.toUpperCase();

  return (
    <Container className="p-4">
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="font-weight-bold" style={{ fontSize: '24px' }}>{problemName}</Card.Title>
              <Card.Text className="text-muted mb-3">{`Difficulty: ${difficulty}`}</Card.Text>
              <Card.Text className="problem-statement">{problemStatement}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Sample Input</Card.Title>
              {/* Add input component here */}
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Sample Output</Card.Title>
              {/* Add output component here */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Submit Solution</Card.Title>
              <Form>
                <Form.Group controlId="solutionCode">
                  <Form.Label>Write your solution code here:</Form.Label>
                  <Form.Control as="textarea" rows={20} placeholder="Enter your solution code" />
                </Form.Group>
                <div className="d-flex justify-content-between">
                <Button variant="primary">Run</Button>
                <Button variant="primary">Submit</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GetProblem;
