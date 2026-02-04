import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/Login/LoginForm';
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
const Login = () => {
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
            className="d-flex flex-column justify-content-center p-0 order-1 order-md-1 bg-white position-relative"
          >
            <div className="w-100 h-100">
              <LoginForm />
            </div>

            {/* Decorational Circle */}
            <div className="position-absolute top-0 start-0 translate-middle rounded-circle bg-primary opacity-10 blur-3xl" style={{ width: '300px', height: '300px', filter: 'blur(60px)' }}></div>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center p-5 order-2 order-md-2 text-white position-relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--dark-green))' }}
          >
            {/* Abstract Patterns/Shapes */}
            <div className="position-absolute top-0 end-0 p-5">
              <BsGraphUpArrow size={200} className="text-white opacity-10" style={{ transform: 'rotate(15deg)' }} />
            </div>

            <div className="d-flex flex-column align-items-center text-center z-1">
              <div className="mb-4 p-3 bg-white bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center shadow-sm" style={{ width: '80px', height: '80px' }}>
                <BsGraphUpArrow size={32} className="text-white" />
              </div>
              <h2 className="display-6 fw-bold mb-3">Grow Your Wealth</h2>
              <p className="lead fw-light mb-4 opacity-75">Track expenses, analyze trends, and achieve your financial goals with ease.</p>

              <div className="d-flex gap-3 text-start mt-2 p-3 bg-white bg-opacity-10 rounded-3 border border-white border-opacity-10">
                <div>
                  <BsGraphDownArrow className="text-warning fs-4" />
                </div>
                <div>
                  <small className="d-block text-white opacity-75 fw-bold text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Insight</small>
                  <span className="fw-medium">Reduce unnecessary expenses</span>
                </div>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Login