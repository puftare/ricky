import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { AuthProvider } from "./utils/AuthProvider";
import SingleCharacterPage from "./pages/SingleCharacterPage/SingleCharacterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProtectedPage from "./pages/ProtectedPage/ProtectedPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<SingleCharacterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/dashboard"
            element={<ProtectedPage element={<DashboardPage />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
