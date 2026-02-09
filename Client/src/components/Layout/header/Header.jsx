import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { CgLogOut } from "react-icons/cg";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineTransaction } from "react-icons/ai";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="app-header"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home" className="text-success fw-bold d-flex align-items-center gap-2">
          Finance Tracker <FaHandHoldingDollar size={24} />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
          className="border-0 shadow-none"
        >
          {expanded ? <FaTimes size={24} color="#198754" /> : <FaBars size={24} color="#198754" />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/signup"
              className="link"
              onClick={() => setExpanded(false)}
            >
              SignUp
            </Link>
            <Link
              to="/"
              className="link d-flex align-items-center gap-1"
              onClick={() => setExpanded(false)}
            >
              Login <CiLogin size={20} />
            </Link>
            <Link
              to="/dashboard"
              className="link d-flex align-items-center gap-1"
              onClick={() => setExpanded(false)}
            >
             <AiFillDashboard size={20}/> Dashboard 
            </Link>
            <Link
              to="/transaction"
              className="link d-flex align-items-center gap-1"
              onClick={() => setExpanded(false)}
            >
            <AiOutlineTransaction size={20}/>  Transaction 
            </Link>
            <Link
              to="/"
              className="link d-flex align-items-center gap-1"
              onClick={() => setExpanded(false)}
            >
            <CgLogOut size={20}/>  Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
