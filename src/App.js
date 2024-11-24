import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SingleCharacterPage from "./pages/SingleCharacterPage/SingleCharacterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProtectedPage from "./pages/ProtectedPage/ProtectedPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { useAuth } from "./hooks/useAuth";
import "./App.css";

const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:id" element={<SingleCharacterPage />} />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />}
      />
      <Route
        path="/dashboard"
        element={<ProtectedPage element={<DashboardPage />} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
