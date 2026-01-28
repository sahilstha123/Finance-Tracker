import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FinancialTips from '../components/FinancialTips';
import SignUpForm from '../components/SignUpForm';
const SignUp = () => {
  return (
    
      <Container className='p-5'>
        <Row className = "SignupBg p-3 rounded-3 mx-auto">
          <Col xs={12} md={6}className='d-flex align-items-center justify-content-center mb-3 mb-md-0'><FinancialTips /></Col>
          <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'><SignUpForm /></Col>
        </Row>
      </Container>
    
  )
}

export default SignUp