import { Navigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthProvider";

const ProtectedPage = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedPage;
