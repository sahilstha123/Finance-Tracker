import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/Login/LoginForm';
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
const Login = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Row className="SignupBg g-0 w-100">
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center p-0 order-2 order-md-1"
        >
          <LoginForm />
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center p-5 order-1 order-md-2"
        >
          <div className='d-flex  flex-column align-items-center fs-4 fw-bold'>
            <p className='text-warning text-decoration-line-through'><BsGraphDownArrow /> Reduce Your expenses</p>
            <p className='text-light'> <BsGraphUpArrow/> Increase Your expenses</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login