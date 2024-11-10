// pages/login.js
"use client"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OtpModal from "../components/OtpModal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOtpModalOpen, setOtpModalOpen] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/login", { email, password });
      setOtpModalOpen(true); // Open OTP modal after login
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>

      <OtpModal
        isOpen={isOtpModalOpen}
        onRequestClose={() => setOtpModalOpen(false)}
        email={email}
      />
    </div>
  );
};

export default Login;
