import { useEffect, useState } from "react";

import AuthForm from "../../components/auth/AuthForm";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import Spinner from "../../components/common/Spinner";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isLoading } = useAuthStore();

  // Preserve the originally requested route, fall back to /account
  const from = location.state?.from || "/account";

  // Redirect authenticated users back to their intended destination
  useEffect(() => {
    if (!isLoading && user) {
      navigate(from, { replace: true });
    }
  }, [user, isLoading, navigate, from]);

  // Show spinner while auth state is still being resolved
  if (isLoading) return <Spinner />;

  return (
    <AuthForm isLogin={isLogin} onToggleMode={() => setIsLogin(!isLogin)} />
  );
};

export default Login;
