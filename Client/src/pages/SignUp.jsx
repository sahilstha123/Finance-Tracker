import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUpForm from '../components/signup/SignUpForm';
import FinancialTips from '../components/signup/FinancialTips';
const SignUp = () => {
  return (

    <Container fluid className="d-flex justify-content-center">
      <Row className="SignupBg g-0">
        <Col
          xs={12}
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center p-3"
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