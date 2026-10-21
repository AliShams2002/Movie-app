import useAuthStore from "../store/useAuthStore";
import Spinner from "../components/common/Spinner";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, isLoading } = useAuthStore();

  if (isLoading) return <Spinner />;
  if (!user) return <Navigate to="/login" replace />;

  // Outlet: account page
  return <Outlet />;
};

export default ProtectedRoute;
