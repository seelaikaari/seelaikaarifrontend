import React, { useState } from "react";
import "./SignUp.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters and include a number";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Sign-Up Successful!");
    }
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create an Account</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
