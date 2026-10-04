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

  const from = location.state?.from || "/account";

  useEffect(() => {}, [user, isLoading, navigate, from]);

  if (isLoading) return <Spinner />;

  return (
    <AuthForm isLogin={isLogin} onToggleMode={() => setIsLogin(!isLogin)} />
  );
};

export default Login;
