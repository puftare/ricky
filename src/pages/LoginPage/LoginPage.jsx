import React, { useState } from "react";
import { useAuth } from "../../utils/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [password, setPassword] = useState(""); // State to store the inputted password
  const [error, setError] = useState(""); // State to store error message

  const handleLogin = () => {
    const storedPassword = process.env.REACT_APP_PASSWORD; // Fetch the password from environment variables

    if (password === storedPassword) {
      login(); // Authenticate the user
      navigate("/dashboard"); // Redirect to the dashboard
    } else {
      setError("Incorrect password!"); // Display error message if password is wrong
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="input-container">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          placeholder="Enter password"
        />
      </div>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Show error message */}
      <button className="login-btn" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};

export default LoginPage;
