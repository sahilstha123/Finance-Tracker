import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FaGithub, FaLinkedin, FaUserTie } from "react-icons/fa";
import "./header.css"

const Header = () => {
  return (
    <Navbar expand="lg" fixed="top" className="app-header">
      <Container>
        {/* Brand */}
        <Navbar.Brand href="/" className="brand">
          <FaUserTie className="brand-icon" />
          Sahil
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          {/* Center links */}
          <Nav className="mx-auto nav-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          {/* Right side */}
          <div className="header-actions">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <FaLinkedin />
            </a>

            <Button variant="success" size="sm" className="hire-btn">
              Hire Me
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
