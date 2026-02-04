import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUpForm from '../components/signup/SignUpForm';
import FinancialTips from '../components/signup/FinancialTips';
const SignUp = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 wrapper-bg mb-5 pb-5 px-4 px-md-0">
      <Row className="g-0 w-100 justify-content-center">
        <Col
          xs={12}
          lg={10}
          xl={8}
          className="d-flex bg-white rounded-4 shadow-lg overflow-hidden p-0"
          style={{ minHeight: '600px' }}
        >
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center p-0 order-1 order-md-2 bg-white position-relative"
          >
            <div className="w-100 h-100">
              <SignUpForm />
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-none d-md-flex align-items-center justify-content-center p-5 order-2 order-md-1 text-white position-relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--dark-green), var(--primary-color))' }}
          >
            {/* Reusing FinancialTips or creating a similar marketing side */}
            <div className="w-100 position-relative z-1">
              <h2 className="display-6 fw-bold mb-4">Smart Financial Decisions Start Here</h2>
              <FinancialTips />
            </div>
            {/* Decorative background elements */}
            <div className="position-absolute bottom-0 start-0 p-5 opacity-10">
              <div style={{ width: '150px', height: '150px', border: '10px solid white', borderRadius: '50%' }}></div>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp