import { Navigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthProvider"; // import useAuth from the context

const ProtectedPage = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If authenticated, return the element
  return element;
};

export default ProtectedPage;
