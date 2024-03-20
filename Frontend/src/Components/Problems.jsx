import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Container, Card, Button } from 'react-bootstrap';

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const user = useSelector((store) => store.user.userData);

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const response = await axios.get("http://localhost:3002/problem");
      setProblems(response.data);
    } catch (error) {
      console.error("Error fetching problems:", error);
    }
  };

  return user ? (
    <Container className="my-5">
      <h2 className="mb-4">All Problems</h2>
      {problems.map((prob, index) => (
        <Card className="my-3" key={prob._id}>
          <Card.Body>
            <Card.Title>{`${index + 1}. ${prob.Name}`}</Card.Title>
            <Card.Text className="text-muted mb-3">
              Difficulty: {prob.Difficulty.toUpperCase()}
            </Card.Text>
            <Link to={`/problem/${prob._id}`}>
              <Button variant="primary">View Problem</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Container>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="font-bold text-3xl p-6">
            Please log in to access the problem list.
        </div>
        {/* You can add additional content or login button here */}
    </div>
</div>
  );
};

export default Problems;
