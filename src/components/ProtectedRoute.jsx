import { Navigate } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const ProtectedRoute = ({  children }) => {
  const { user } = useAuthStore((state) => state);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
