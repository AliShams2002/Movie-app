import React, { useState } from "react";
import Login from "../components/auth/Login";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Register from "../components/auth/Register";
import {
  loginWithGithubProvider,
  loginWithGoogleProvider,
} from "../services/authService";

const AuthLayout = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="w-full max-w-4xl bg-[#1c1c2b] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-xl">
      {/* ================= Form ================= */}
      <div className="p-10 flex flex-col justify-center text-white">
        {mode === "login" ? <Login /> : <Register />}

        <p className="text-sm text-gray-400 mt-3 text-center">
          {mode === "login"
            ? "حساب کاربری ندارید؟"
            : "قبلاً حساب کاربری دارید؟"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-red-500 hover:underline"
          >
            {mode === "login" ? "ثبت نام" : "ورود"}
          </button>
        </p>

        <div className="w-full">
          <button
            className="w-full text-white font-semibold py-2 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer mt-2 flex items-center justify-center gap-1 transition-all"
            onClick={loginWithGoogleProvider}
          >
            <BsGoogle />
            <span>ورود با گوگل</span>
          </button>
          <button
            className="w-full text-white font-semibold py-2 px-6 bg-black/35 hover:bg-black/25 rounded-lg cursor-pointer mt-2 flex items-center justify-center gap-1 transition-all"
            onClick={loginWithGithubProvider}
          >
            <BsGithub />
            <span>ورود با گیت هاب</span>
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src="/images/Auth_Wallpaper.jpg"
          alt="Movie Poster"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
