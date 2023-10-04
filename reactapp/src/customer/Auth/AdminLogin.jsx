// AdminLogin.js

import React, { useState } from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const adminData = {
      email: formData.email,
    };
    localStorage.setItem("admin", JSON.stringify(adminData));

    navigate("/admin");
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <h2 className="admin-login-heading">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="admin-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="admin-input"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="admin-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="admin-input"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="admin-login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
