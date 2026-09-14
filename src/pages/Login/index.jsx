// import { useFormik } from "formik";
// import Spinner from "../../components/common/Spinner";
// import { registerSchema } from "../../utils/authValidation";
// import { registerUser } from "../../services/authService";

// const Login = () => {
//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       email: "",
//       password: "",
//     },
//     validationSchema: registerSchema,
//     onSubmit: async (values, submitProps) => {
//       await registerUser(values.email, values.password, values.username);
//       submitProps.setSubmitting(false);
//     },
//   });

//   return (
//     <div className="w-screen h-screen bg-[#1c1c2b] overflow-hidden shadow-xl">
//       <div className="w-full p-24 flex gap-8 text-white">
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold mb-2">ایجاد حساب کاربری</h2>
//           <p className="text-gray-400 mb-8 text-sm">برای شروع ثبت نام کنید</p>
//           <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
//             <div className="w-full space-y-1">
//               <label
//                 htmlFor="username"
//                 className="text-sm text-gray-200 mb-1 block"
//               >
//                 نام کاربری
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 id="username"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.username}
//                 placeholder="Ali#352"
//                 className="w-full bg-transparent border border-white/20 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
//               />

//               {formik.touched.username && formik.errors.username && (
//                 <div className="error text-xs text-red-400">
//                   {formik.errors.username}
//                 </div>
//               )}
//             </div>
//             <div className="w-full space-y-1">
//               <label
//                 htmlFor="email"
//                 className="text-sm text-gray-200 mb-1 block"
//               >
//                 ایمیل
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.email}
//                 placeholder="example@gmail.com"
//                 className="w-full bg-transparent border border-white/20 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
//               />

//               {formik.touched.email && formik.errors.email && (
//                 <div className="error text-xs text-red-400">
//                   {formik.errors.email}
//                 </div>
//               )}
//             </div>
//             <div className="w-full space-y-1">
//               <label
//                 htmlFor="password"
//                 className="text-sm text-gray-200 mb-1 block"
//               >
//                 رمز عبور
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.password}
//                 placeholder="رمز عبور خود را وارد نمایید"
//                 className="w-full bg-transparent border border-white/20 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
//               />
//               {formik.touched.password && formik.errors.password && (
//                 <div className="error text-xs text-red-400">
//                   {formik.errors.password}
//                 </div>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-red-600 hover:bg-red-700 transition py-2 rounded-lg font-semibold"
//             >
//               {formik.isSubmitting ? <Spinner /> : "ثبت نام"}
//             </button>
//           </form>
//         </div>
//         <div className=" flex-1">
//           <img
//             src="/images/Auth_Wallpaper.jpg"
//             alt="Movie Poster"
//             className="h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  Clapperboard,
  AlertCircle 
} from 'lucide-react';
// آیکون‌های گوگل و گیت‌هاب را می‌توانید از react-icons استفاده کنید
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // سوییچ بین ورود و ثبت‌نام
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // هندل کردن تغییر Inputها
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // هندل کردن سابمیت (فعلاً استاتیک)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('فرم ارسال شد:', formData);
  };

  // انیمیشن‌های Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4 relative overflow-hidden font-sans" dir="rtl">
      
      {/* --- پس‌زمینه تار (Blur) از پوستر فیلم‌ها --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/Auth_Wallpaper.jpg" 
          alt="Background" 
          className="w-full h-full object-cover blur-sm opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-[#0a0a0a]/30"></div>
      </div>

      {/* --- دکمه بازگشت به خانه (بالا راست) --- */}
      <Link 
        to="/" 
        className="absolute top-6 right-6 z-20 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10"
      >
        <ArrowLeft className="w-4 h-4" />
        بازگشت به خانه
      </Link>

      {/* --- کارت اصلی لاگین --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-red-600/10"
      >
        {/* لوگو */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-2 text-3xl font-bold text-red-500 tracking-wider">
            <Clapperboard className="w-8 h-8" />
            CINEMA
          </Link>
        </div>

        {/* تیتر */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {isLogin ? 'ورود به حساب کاربری' : 'ساخت حساب کاربری جدید'}
          </h1>
          <p className="text-gray-400 text-sm">
            {isLogin ? 'برای ادامه، وارد حساب خود شوید' : 'برای شروع، اطلاعات خود را وارد کنید'}
          </p>
        </div>

        {/* --- دکمه‌های ورود اجتماعی (Provider) --- */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button 
            type="button"
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 transition-colors duration-200 text-sm font-medium"
          >
            <FcGoogle className="w-5 h-5" />
            <span>Google</span>
          </button>
          <button 
            type="button"
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 transition-colors duration-200 text-sm font-medium"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </button>
        </div>

        {/* جداکننده */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-white/10 flex-1"></div>
          <span className="text-xs text-gray-500">یا</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/* --- فرم --- */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* فیلد نام (فقط در حالت ثبت‌نام) */}
          {!isLogin && (
            <motion.div variants={itemVariants} className="relative">
              <label className="block text-xs text-gray-400 mb-1.5 mr-1">نام و نام خانوادگی</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="مثلاً علی رضایی"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pr-10 pl-4 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all text-right placeholder:text-gray-600"
                />
                <Clapperboard className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </motion.div>
          )}

          {/* فیلد ایمیل */}
          <motion.div variants={itemVariants} className="relative">
            <label className="block text-xs text-gray-400 mb-1.5 mr-1">ایمیل</label>
            <div className="relative">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pr-10 pl-4 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all text-left placeholder:text-gray-600 font-sans"
                dir="ltr"
              />
              <Mail className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </motion.div>

          {/* فیلد رمز عبور */}
          <motion.div variants={itemVariants} className="relative">
            <label className="block text-xs text-gray-400 mb-1.5 mr-1">رمز عبور</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pr-10 pl-10 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all text-left placeholder:text-gray-600 font-sans"
                dir="ltr"
              />
              <Lock className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* فراموشی رمز عبور */}
          {isLogin && (
            <div className="flex justify-end">
              <a href="#" className="text-xs text-red-400 hover:text-red-300 transition-colors">
                رمز عبور خود را فراموش کرده‌اید؟
              </a>
            </div>
          )}

          {/* دکمه ارسال */}
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 mt-2"
          >
            {isLogin ? 'ورود به حساب' : 'ثبت‌نام'}
          </motion.button>
        </form>

        {/* --- سوییچ بین ورود و ثبت‌نام --- */}
        <div className="mt-6 text-center text-sm text-gray-400">
          {isLogin ? 'حساب کاربری ندارید؟' : 'قبلاً ثبت‌نام کرده‌اید؟'}
          <button 
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({ name: '', email: '', password: '' }); // ریست فرم
            }}
            className="text-red-500 font-bold mr-1 hover:text-red-400 transition-colors"
          >
            {isLogin ? 'ثبت‌نام کنید' : 'وارد شوید'}
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default Login;

