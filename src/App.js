import { Routes, Route, Navigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons
import HomePage from "./pages/HomePage/HomePage";
import SingleCharacterPage from "./pages/SingleCharacterPage/SingleCharacterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProtectedPage from "./pages/ProtectedPage/ProtectedPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { useAuth } from "./hooks/useAuth";
import useTheme from "./hooks/useTheme";
import "./App.css";

const App = () => {
  const { isAuthenticated } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      {isDarkMode ? (
        <FaSun
          size={74}
          color="white"
          onClick={toggleTheme}
          className="icons"
        />
      ) : (
        <FaMoon
          size={74}
          color="black"
          onClick={toggleTheme}
          className="icons"
        />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<SingleCharacterPage />} />
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />
          }
        />
        <Route
          path="/dashboard"
          element={<ProtectedPage element={<DashboardPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
