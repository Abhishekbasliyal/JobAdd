import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.webp";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="header-logo" />
        <nav className="header-nav">
          <Link to="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/">Find Jobs</Link>
          <Link to="/">Find Talents</Link>
          <Link to="/">About us</Link>
          <Link to="/">Testimonials</Link>
        </nav>
        <Link to="/create-job" className="header-create-btn">Create Jobs</Link>
      </div>
    </header>
  );
}

export default Header;
