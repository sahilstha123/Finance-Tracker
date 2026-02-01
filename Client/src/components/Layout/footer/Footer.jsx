import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="app-footer mt-3">
      <Container>
        <Row className="py-4">
         

          {/* Links */}
          <Col md={6} className="mb-3">
            <h6 className="footer-subtitle">Quick Links</h6>
            <Nav className="flex-column footer-links">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Col>

          {/* Contact */}
          <Col md={6}>
            <h6 className="footer-subtitle">Contact</h6>
            <p className="footer-text mb-1">📧 sahil@example.com</p>
            <p className="footer-text mb-0">📍 Nepal</p>
          </Col>
        </Row>

        <Row>
          <Col className="text-center footer-bottom py-3">
            © {new Date().getFullYear()} Sahil. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
