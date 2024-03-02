
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { loginSchema } from "./validation/loginSchema.jsx";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {useDispatch} from "react-redux";
import { login } from "../../utils/Store/userSlice.js";
import { useFormik } from "formik";

export default function Login() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const initialUserData = {
      userName: "",
      password: "",
    };
  
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
      useFormik({
        initialValues: initialUserData,
        validationSchema: loginSchema,
        onSubmit: async (values, action) => {
          try {
            const response = await axios.post("http://localhost:3001/login", {
              values,
            });
            console.log(response);
            dispatch(login(response.data.userName));
            navigate("/");
          } catch (error) {
            console.log(error);
          }
        },
      });

      return (

    <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
          <div className="bg-white p-3 rounded" style={{width : '40%'}}>
        <Container>
          <Row className="justify-content-center">
          <h2 className='mb-3 text-primary mb-4'>Login</h2>
            <Col xs={12} md={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username or Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    placeholder="Enter username or email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                    isInvalid={errors.userName && touched.userName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.userName}
                  </Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className='mt-2'>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={errors.password && touched.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
    
                <Button variant="primary" type="submit" className="my-2">
                  Sign in
                </Button>
              </Form>
    
              <p className="mt-3">
                New here? <Link to="/register">Signup</Link>
              </p>
            </Col>
          </Row>
        </Container>
        </div>
        </div>
      );
}

