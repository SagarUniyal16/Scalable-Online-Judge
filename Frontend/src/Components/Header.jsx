/* eslint-disable react/jsx-no-undef */

import React, { useState } from "react";

import "../../public/Header.css"
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        OnlineJudge
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/problems">Problems</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>  
      </ul>
    </nav>
  );
};