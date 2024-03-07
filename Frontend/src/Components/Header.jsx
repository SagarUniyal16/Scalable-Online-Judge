/* eslint-disable react/jsx-no-undef */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../utils/Store/userSlice";
import "../../public/Header.css"
import { Dropdown, Nav, Navbar, Container } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const user = useSelector((store) => store.user.userData);
  const logoutHandler = () => {
    dispatch(logout(null));
    navigate("/login")
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" className="py-3">
    <Container>
      <Navbar.Brand className="mr-auto">
        <Link to="/" className="no-underline font-bold text-3xl text-white text-decoration-none">
          Online Judge
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={NavLink} to="/" className="mx-3 text-white text-decoration-none" activeclassname="active">
          Dashboard
        </Nav.Link>
        <Nav.Link as={NavLink} to="/problems" className="mx-3 text-white text-decoration-none" activeclassname="active">
          Problems
        </Nav.Link>
        {user ? (
          <Dropdown show={isDropdownOpen} onClick={toggleDropdown}>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <img
                src="https://secure.gravatar.com/avatar/d91bcf9a7b821a11a0692fba6b5660ea?s=100&d=mm&r=g"
                alt="User Avatar"
                className="rounded-circle"
                style={{ width: '30px', height: '30px' }}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>{user}</Dropdown.Item>
              <Dropdown.Item onClick={logoutHandler}>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Nav.Link as={NavLink} to="/login" className="text-white text-decoration-none" activeclassname="active">
            Login
          </Nav.Link>
        )}
      </Nav>
    </Container>
  </Navbar>
  );
}; 