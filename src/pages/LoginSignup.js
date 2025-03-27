import React from "react";
import AuthForm from "../components/AuthForm";
import "./LoginSignup.css";

const LoginSignup = ({ handleLogin }) => {
  return (
    <div className="auth-page">
      <AuthForm handleLogin={handleLogin} />
    </div>
  );
};

export default LoginSignup;
