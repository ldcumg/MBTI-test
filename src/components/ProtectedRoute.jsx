import { Navigate } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore((state) => state);

  // user정보가 없으면 로그인페이지로 보내기
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
