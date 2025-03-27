import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo and Name */}
        <div className="footer-logo">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Mellow Caps Logo" />
          <h2>Mellow Caps</h2>
        </div>

        {/* Middle Section - Navigation Links */}
        <ul className="footer-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>Cart</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
          </li>
        </ul>

        {/* Right Section - Social Media Links */}
        <div className="footer-social">
          <a href="https://www.facebook.com/share/14yLkaTTBp/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/facebook.png`} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/_ig_azim?igsh=MXcxbGNjZ2sxY3N1Nw==" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/instagram.png`} alt="Instagram" />
          </a>
          <a href="https://x.com/Pirategamming24?t=qP-TM5I-jemGrTkPbyH3Vg&s=09" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/twitter.png`} alt="Twitter" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 Mellow Caps. All rights reserved. Unauthorized reproduction or distribution is strictly prohibited.</p>
      </div>
    </footer>
  );
};

export default Footer;
