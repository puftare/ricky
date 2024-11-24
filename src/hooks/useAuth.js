import { createContext, useContext, useState, useEffect } from "react";
import { AUTH_TIMESTAMP_DURATION } from "../constants/constants";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")
  );

  const hasSessionExpired = () => {
    const lastAuthTime = localStorage.getItem("authTimestamp");
    if (!lastAuthTime) return true;

    const elapsed = Date.now() - parseInt(lastAuthTime, 10);
    return elapsed > AUTH_TIMESTAMP_DURATION;
  };

  useEffect(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated");
    const sessionExpired = hasSessionExpired();

    if (storedAuthState === "true" && !sessionExpired) {
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("authTimestamp");
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("authTimestamp", Date.now().toString());
    } else {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("authTimestamp");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      const timer = setTimeout(() => {
        if (hasSessionExpired()) {
          setIsAuthenticated(false);
        }
      }, AUTH_TIMESTAMP_DURATION);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("authTimestamp");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
