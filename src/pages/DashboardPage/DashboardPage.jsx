import { useAuth } from "../../hooks/useAuth";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";
import Button from "../../components/Button/Button";

const DashboardPage = () => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="dashboard-page">
        <p>You are not logged in.</p>
      </div>
    );
  }

  return (
    <>
      <ToggleTheme />
      <div className="dashboard-page">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
        <Button onClick={logout} className="logout">
          Log Out
        </Button>
      </div>
    </>
  );
};

export default DashboardPage;
