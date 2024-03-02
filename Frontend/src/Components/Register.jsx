import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { SignupSchema } from "./validation/signupSchema.jsx";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = () => {
    const navigate=useNavigate();
    const initialUserData = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
      useFormik({
        initialValues: initialUserData,
        validationSchema: SignupSchema,
        onSubmit: async (values, action) => {
          try {
            const response = await axios.post("http://localhost:3001/register", {
              values,
            });
            console.log(response);
            navigate("/login");
          } catch (e) {
            console.log(e);
          }
        },
      });
  
    return (
        <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
//        <div className="bg-white p-3 rounded" style={{width : '40%'}}>
      <Container>
      <h2 className='mb-3 text-primary mb-4'>Signup</h2>
        <Row className="justify-content-center my-6">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="userName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                  isInvalid={errors.userName && touched.userName}
                />
                <Form.Control.Feedback type="invalid">{errors.userName}</Form.Control.Feedback>
              </Form.Group>
  
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  isInvalid={errors.email && touched.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
  
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  isInvalid={errors.password && touched.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </Form.Group>
  
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  isInvalid={errors.confirmPassword && touched.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
              </Form.Group>
  
              <Button variant="primary" type="submit" className="w-100 my-4">
                Sign up
              </Button>
  
              <p>
                Have an account? <Link to="/login">Sign in</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
      </div>
      </div>
    );
  };
  

export default Register