import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Button onClick={() => navigate(0)} className="btn">
        Go to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
