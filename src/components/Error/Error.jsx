import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const Error = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-message">
        <h2>Oops! Something went wrong.</h2>
        <p>{message}</p>
        <Button onClick={() => navigate(-1)} className="btn">
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default Error;
