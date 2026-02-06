import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="app-footer-dark mt-auto pt-5 pb-3">
      <Container>
        <Row className="gy-4">
          {/* Brand & About */}
          <Col lg={6} md={6}>
            <h5 className="footer-brand text-white fw-bold mb-3 d-flex align-items-center gap-2">
              <FaHandHoldingDollar className="text-success" size={24} /> Finance Tracker
            </h5>
            <p className="footer-text text-white-50">
              Take control of your financial future. Track expenses, set budgets, and achieve your goals with our intuitive platform.
            </p>
            <div className="social-icons d-flex gap-3 mt-3">
              <a href="#" className="social-link"><FaFacebookF /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaLinkedinIn /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
            </div>
          </Col>

          

          

          {/* Contact */}
          <Col lg={6} md={6}>
            <h6 className="footer-heading text-white mb-3">Stay Connected</h6>
            <p className="footer-text text-white-50 mb-2">Subscribe to our newsletter for the latest financial tips.</p>
            <form className="d-flex gap-2">
              <input type="email" className="form-control form-control-sm" placeholder="Enter your email" required />
              <button type="button" className="btn btn-success btn-sm">Join</button>
            </form>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <Row>
          <Col className="text-center text-white-50 small">
            &copy; {new Date().getFullYear()} Finance Tracker. All rights reserved. | Made with ❤️ in Nepal
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
