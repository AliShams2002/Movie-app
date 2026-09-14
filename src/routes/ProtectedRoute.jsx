import React from "react";
import useAuthStore from "../store/authStore";
import Spinner from "../components/common/Spinner";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, loading } = useAuthStore();

  if (!loading) return <Spinner />;
  if (!user) <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
