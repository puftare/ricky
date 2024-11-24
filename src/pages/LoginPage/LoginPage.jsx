import { useState } from "react";
import { useAuth } from "../../utils/AuthProvider";
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

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="input-container">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Show error message */}
      <Button className="login-btn" onClick={handleLogin}>
        Log In
      </Button>
    </div>
  );
};

export default LoginPage;
