import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const storedPassword = process.env.REACT_APP_PASSWORD;

    if (password === storedPassword) {
      login();
      navigate("/dashboard");
    } else {
      setError("Incorrect password!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="input-container">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          onKeyDown={handleKeyDown} // Listen for the Enter key press
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <Button className="login-btn" onClick={handleLogin}>
        Log In
      </Button>
    </div>
  );
};

export default LoginPage;
