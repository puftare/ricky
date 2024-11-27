import { Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SingleCharacterPage from "./pages/SingleCharacterPage/SingleCharacterPage";
import ProtectedPage from "./pages/ProtectedPage/ProtectedPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { useAuth } from "./hooks/useAuth";
import "./App.css";

const App = () => {
  const { isAuthenticated } = useAuth();
  const [searchParams] = useSearchParams();
  searchParams.set("name", "");
  searchParams.set("page", 1);

  const name = searchParams.get("name");

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`/character?page=1&name=${name}`} />}
      />
      <Route path="/character" element={<HomePage />} />
      <Route path="/character/:id" element={<SingleCharacterPage />} />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />}
      />
      <Route
        path="/dashboard"
        element={<ProtectedPage element={<DashboardPage />} />}
      />
      <Route
        path="*"
        element={<Navigate to={`/character?page=1&name=${name}`} />}
      />
    </Routes>
  );
};

export default App;
