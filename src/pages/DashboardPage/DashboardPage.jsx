import React from "react";
import { useAuth } from "../../utils/AuthProvider"; // Importing useAuth hook to get the authentication state

const DashboardPage = () => {
  const { isAuthenticated, logout } = useAuth(); // Accessing authentication status

  if (!isAuthenticated) {
    return <div>You are not logged in.</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <button onClick={logout}>Log Out</button>{" "}
    </div>
  );
};

export default DashboardPage;
