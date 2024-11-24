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
    <div>
      <h1>Login Page</h1>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          placeholder="Enter password"
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Show error message */}
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginPage;
