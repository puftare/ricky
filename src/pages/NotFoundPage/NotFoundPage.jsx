import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
