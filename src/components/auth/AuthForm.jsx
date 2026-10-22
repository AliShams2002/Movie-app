import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Clapperboard,
  UserRound,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useFormik } from "formik";
import { loginSchema, registerSchema } from "../../schemas/authSchemas";
import useAuthStore from "../../store/useAuthStore";
import Spinner from "../common/Spinner";
import Button from "../common/Button";
import Input from "./Input";

const AuthForm = ({ isLogin, onToggleMode }) => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: isLogin ? loginSchema : registerSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      try {
        if (isLogin) {
          await useAuthStore.getState().login(values.email, values.password);
        } else {
          await useAuthStore
            .getState()
            .register(values.name, values.email, values.password);
        }
      } catch (error) {
        setFieldError("email", getFirebaseErrorMessage(error.code));
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    formik.resetForm();
  }, [isLogin]);

  // Animations Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* --- Blurred background from movie posters --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Auth_Wallpaper.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-[#0a0a0a]/30"></div>
      </div>

      {/* --- Return to Home button --- */}
      <Button
        type="link"
        action="/"
        className="absolute top-6 right-6 z-20 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Button>

      {/* --- Main Login Card --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-red-600/10"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Button
            type="link"
            action="/"
            className="flex items-center gap-2 text-3xl font-bold text-red-500 tracking-wider"
          >
            <Clapperboard className="w-8 h-8" />
            CINEMA
          </Button>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {isLogin ? "Log in to your account" : "Create a new account"}
          </h1>
          <p className="text-gray-400 text-sm">
            {isLogin
              ? "To continue, log in to your account."
              : "To get started, enter your information."}
          </p>
        </div>

        {/* --- Social login buttons (Provider) --- */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button
            type="button"
            action={() => useAuthStore.getState().loginWithGoogle()}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 transition-colors duration-200 text-sm font-medium"
            icon={<FcGoogle className="w-5 h-5" />}
            title="Google"
          />
          <Button
            type="button"
            action={() => useAuthStore.getState().loginWithGithub()}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 transition-colors duration-200 text-sm font-medium"
            icon={<FaGithub className="w-5 h-5" />}
            title="GitHub"
          />
        </div>

        {/* Separator */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-white/10 flex-1"></div>
          <span className="text-xs text-gray-500">or</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/* --- Form --- */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Name field (registration mode only)*/}
          {!isLogin && (
            <Input
              lable="UserName"
              type="text"
              id="name"
              value={formik.values.name}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pr-10 pl-4 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-gray-600"
              placeholder="Example Michel..."
              formik={formik}
              itemVariants={itemVariants}
              touched={formik.touched.name}
              errors={formik.errors.name}
            >
              <UserRound className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </Input>
          )}

          {/* Email field */}
          <Input
            lable="Email"
            type="email"
            id="email"
            value={formik.values.email}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pr-10 pl-4 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all text-left placeholder:text-gray-600 font-sans"
            placeholder="example@email.com"
            formik={formik}
            itemVariants={itemVariants}
            touched={formik.touched.email}
            errors={formik.errors.email}
          >
            <Mail className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </Input>

          {/* Password field*/}

          <Input
            lable="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            value={formik.values.password}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pr-10 pl-10 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all text-left placeholder:text-gray-600 font-sans"
            placeholder="••••••••"
            formik={formik}
            itemVariants={itemVariants}
            touched={formik.touched.password}
            errors={formik.errors.password}
          >
            <Lock className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <Button
              type="button"
              action={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              icon={
                showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )
              }
            />
          </Input>

          <Button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 mt-2"
            title={
              formik.isSubmitting ? (
                <Spinner
                  className="w-full flex items-center justify-center text-gray-200"
                  width="6"
                  height="6"
                />
              ) : isLogin ? (
                "Login"
              ) : (
                "Register"
              )
            }
          />
        </form>

        {/* --- Switch beetween login & register form --- */}
        <div className="mt-6 text-center text-sm text-gray-400">
          {isLogin ? "Don't have an account?" : "Have you already registered?"}
          <Button
            type="button"
            action={() => {
              onToggleMode(!isLogin);
            }}
            className="text-red-500 font-bold mr-1 hover:text-red-400 transition-colors"
            title={isLogin ? "Register" : "Login"}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AuthForm;
