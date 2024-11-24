import React from "react";
import { useAuth } from "../../utils/AuthProvider"; // Importing useAuth hook to get the authentication state

const DashboardPage = () => {
  const { isAuthenticated, logout } = useAuth(); // Accessing authentication status

  if (!isAuthenticated) {
    return (
      <div className="dashboard-page">
        <p>You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <button onClick={logout} className="logout">
        Log Out
      </button>
    </div>
  );
};

export default DashboardPage;
