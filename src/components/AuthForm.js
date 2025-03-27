import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // ✅ Error message state
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({ name: "", email: "", phone: "", address: "", password: "" });
    setErrorMessage(""); // ✅ Clear errors when switching form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if (!/^\d+$/.test(formData.phone)) {
        setErrorMessage("❌ Phone number must contain only numbers.");
        return;
      }
      if (formData.phone.length !== 10) {
        setErrorMessage("❌ Phone number must be exactly 10 digits.");
        return;
      }
    }

    setErrorMessage(""); // ✅ Clear error if input is valid

    if (isSignup) {
      console.log("Signing up:", formData);
      localStorage.setItem("user", JSON.stringify(formData.name));
    } else {
      console.log("Logging in:", formData);
      localStorage.setItem("user", JSON.stringify(formData.email));
    }

    navigate("/");
    window.location.reload();
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>{isSignup ? "Create an Account" : "Welcome Back"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errorMessage && (
                <p className="error-message">{errorMessage}</p> // ✅ Now always visible
              )}
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <p onClick={toggleForm} className="toggle-text">
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
