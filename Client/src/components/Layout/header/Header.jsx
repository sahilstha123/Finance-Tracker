import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
import { NavLink, Link, useNavigate } from "react-router-dom";
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
  const [scrolled, setScrolled] = useState(false);
  const { userData, setUserData } = useUserContext()
  const navigate = useNavigate();

  // Handle scroll for glassmorphism shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`app-header ${scrolled ? 'scrolled' : ''}`}
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-success fw-bold d-flex align-items-center gap-2">
          Finance Tracker <FaHandHoldingDollar size={28} className="brand-icon" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="border-0 shadow-none p-2"
        >
          {expanded ? <FaTimes size={24} className="text-success" /> : <FaBars size={24} className="text-success" />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/signup"
                  className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
                  onClick={() => setExpanded(false)}
                >
                  SignUp
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) => `link d-flex align-items-center gap-2 ${isActive ? 'active' : ''}`}
                  onClick={() => setExpanded(false)}
                >
                  Login <CiLogin size={18} />
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => `link d-flex align-items-center gap-2 ${isActive ? 'active' : ''}`}
                  onClick={() => setExpanded(false)}
                >
                  <AiFillDashboard size={18} /> Dashboard
                </NavLink>
                <NavLink
                  to="/transaction"
                  className={({ isActive }) => `link d-flex align-items-center gap-2 ${isActive ? 'active' : ''}`}
                  onClick={() => setExpanded(false)}
                >
                  <AiOutlineTransaction size={18} />  Transaction
                </NavLink>
                <Nav.Link
                  as="div"
                  className="link d-flex align-items-center gap-2 cursor-pointer text-danger-hover"
                  onClick={handleOnLogout}
                >
                  <CgLogOut size={18} />  Logout
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
