import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for logout modal

  useEffect(() => {
    // Check login status (Replace with actual authentication logic)
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      console.log("Searching for:", searchTerm);
    } else {
      console.log("Search field is empty.");
    }
  };

  const confirmLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    setIsLoggedIn(false);
    setShowLogoutModal(false);
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Mellow Caps Logo" />
          <h1>Mellow Caps</h1>
        </div>

        {/* Burger Menu for Small Screens */}
        <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className={location.pathname === "/shop" ? "active" : ""}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>
              Cart
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button className="logout-btn" onClick={() => setShowLogoutModal(true)}>Logout</button>
            ) : (
              <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>
                Login / Signup
              </Link>
            )}
          </li>
        </ul>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for caps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="logout-modal">
          <div className="modal-content">
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to logout?</p>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={confirmLogout}>Yes, Logout</button>
              <button className="cancel-btn" onClick={() => setShowLogoutModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
