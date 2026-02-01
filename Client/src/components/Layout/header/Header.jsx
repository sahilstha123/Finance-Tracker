import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className=" app-header" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="text-success fw-bold">Finance Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/signup" className="link">SignUp</Link>
            <Link to="/" className="link">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
