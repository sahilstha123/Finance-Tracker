import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUpForm from '../components/signup/SignUpForm';
import FinancialTips from '../components/signup/FinancialTips';
const SignUp = () => {
  return (

    <Container className="p-1 p-md-4">
      <Row className="SignupBg mx-auto g-0 ">
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center p-3"
        >
          <FinancialTips />
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center p-0"
        >
          <SignUpForm />
        </Col>
      </Row>
    </Container>


  )
}

export default SignUp