import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

import "../styles/navbar.css";
import logo from "../assets/logo.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/team", label: "Team" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo-box" onClick={closeMenu}>
        <img src={logo} alt="ENOS Agency" className="logo-img" />
        <span className="logo-text">agency</span>
      </Link>

      <ul className={`menu ${isOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <div className="socials">
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        <Link to="/contact" className="nav-btn">
          Get Started →
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}
