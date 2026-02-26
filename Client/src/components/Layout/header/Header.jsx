import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
import { Link, useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { CgLogOut } from "react-icons/cg";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineTransaction } from "react-icons/ai";
import { toast } from "react-toastify";
import { useUserContext } from "../../../context/userContext";


const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { userData, setUserData } = useUserContext()
  const navigate = useNavigate();

  const handleOnLogout = () => {
    localStorage.removeItem("JwtToken")
    setUserData({})
    toast.success("Logout Successfully")
    navigate("/")
    setExpanded(false)
  }

  const isLoggedIn = !!userData?._id;

  return (
    <Navbar
      expand="lg"
      className="app-header"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to={isLoggedIn ? "/dashboard" : "/"} className="text-success fw-bold d-flex align-items-center gap-2">
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
            {!isLoggedIn ? (
              <>
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
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="link d-flex align-items-center gap-1"
                  onClick={() => setExpanded(false)}
                >
                  <AiFillDashboard size={20} /> Dashboard
                </Link>
                <Link
                  to="/transaction"
                  className="link d-flex align-items-center gap-1"
                  onClick={() => setExpanded(false)}
                >
                  <AiOutlineTransaction size={20} />  Transaction
                </Link>
                <Nav.Link
                  as="span"
                  className="link d-flex align-items-center gap-1 cursor-pointer"
                  onClick={handleOnLogout}
                  style={{ cursor: 'pointer' }}
                >
                  <CgLogOut size={20} />  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
