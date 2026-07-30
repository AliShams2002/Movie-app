// import { AiFillPlaySquare } from "react-icons/ai";
// import { BiStar } from "react-icons/bi";
// import { BsClock } from "react-icons/bs";
// import { FaPlus } from "react-icons/fa";
// import { FiHeart } from "react-icons/fi";
// import { GiShare } from "react-icons/gi";
// import { MdDateRange } from "react-icons/md";
// import useAuthStore from "../store/authStore";
// import { addToFavorite, addToWatchList } from "../services/userService";
// import { Link, useParams } from "react-router-dom";
// import { useEffect } from "react";
// import MovieCard from "../components/MovieCard";
// import { MovieSilder } from "../components/Swiper";
// import { SwiperSlide } from "swiper/react";

// export default function MovieDetail() {
//   const { user } = useAuthStore();
//   const params = useParams();

//   const movies = [
//     {
//       id: 1,
//       poster_path: "/images/hero.jpg",
//       title: "movie1",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 2,
//       poster_path: "/images/hero.jpg",
//       title: "movie3",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 3,
//       poster_path: "/images/hero.jpg",
//       title: "movie4",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 4,
//       poster_path: "/images/hero.jpg",
//       title: "movie5",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 5,
//       poster_path: "/images/hero.jpg",
//       title: "movie6",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 6,
//       poster_path: "/images/hero.jpg",
//       title: "movie7",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 7,
//       poster_path: "/images/hero.jpg",
//       title: "movie7",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 8,
//       poster_path: "/images/hero.jpg",
//       title: "movie8",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//   ];

//   const handelFetchAllData = async () => {
//     const id = params.id;
//     console.log(id);
//   };

//   const handelAddToFavorite = async (movieId) => {
//     await addToFavorite(user.uid, movieId);
//   };
//   const handelAddToWatchList = async (movieId) => {
//     await addToWatchList(user.uid, movieId);
//   };

//   useEffect(() => {
//     handelFetchAllData();
//   }, []);

//   return (
//     <div className="bg-[#141414] text-white min-h-screen">
//       <div className="h-screen w-full">
//         <img
//           src="/images/hero.jpg"
//           alt="Hero Background"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="max-w-7xl mx-auto px-3 md:px-6 py-20 grid grid-cols-1 lg:grid-cols-12 lg: gap-8">
//         {/* ================= Main Content ================= */}
//         <main className="lg:col-span-9 space-y-10">
//           {/* Title */}
//           <div>
//             <div className="flex items-center gap-3 mb-2">
//               <span className="bg-red-950 px-3 py-1 rounded-lg text-sm flex items-center gap-1 font-iranSans-bold">
//                 ⭐ 8.9
//               </span>
//               <span className="text-gray-400 text-sm font-iranSans-edit">
//                 2024
//               </span>
//               <span className="text-gray-400 text-sm font-iranSans-edit">
//                 {" "}
//                 135 دقیقه
//               </span>
//             </div>

//             <h1 className="text-4xl font-extrabold mb-3 font-iranSans-bold">
//               سفر به ناشناخته
//             </h1>

//             <p className="text-gray-400 max-w-3xl leading-7 font-iranSans-edit">
//               ماجراجویی هیجان‌انگیز یک کاوشگر فضایی در سرزمینی مرموز و ناشناخته
//               که آینده بشر را تغییر می‌دهد.
//             </p>

//             {/* Actions */}
//             <div className="flex flex-wrap gap-3 mt-6">
//               <button
//                 className="bg-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition flex items-center gap-1 font-iranSans-bold"
//                 onClick={() => handelAddToFavorite("58871")}
//               >
//                 <FaPlus />
//                 <span>افزودن به لیست</span>
//               </button>
//               <button
//                 onClick={() => handelAddToWatchList("34524")}
//                 className="bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition flex items-center gap-1 font-iranSans-bold"
//               >
//                 <FiHeart />
//                 <span>علاقه‌مندی</span>
//               </button>
//               <button className="bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition flex items-center gap-1 font-iranSans-bold">
//                 <GiShare />
//                 <span>اشتراک‌گذاری</span>
//               </button>
//             </div>
//           </div>

//           {/* About */}
//           <section className="bg-[#1f1f1f] rounded-2xl p-6">
//             <h2 className="font-iranSans-bold text-lg mb-4">درباره فیلم</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
//               <div>
//                 <p className="text-gray-400">کارگردان</p>
//                 <p className="font-iranSans-bold">احمد رضایی</p>
//               </div>
//               <div>
//                 <p className="text-gray-400">نویسنده</p>
//                 <p className="font-iranSans-bold">محمد حسینی</p>
//               </div>
//               <div>
//                 <p className="text-gray-400">بازیگران</p>
//                 <p className="font-iranSans-bold">علی محمدی، سارا احمدی</p>
//               </div>
//               <div>
//                 <p className="text-gray-400">کشور سازنده</p>
//                 <p className="font-iranSans-bold">ایران</p>
//               </div>
//             </div>
//           </section>

//           {/* Reviews */}
//           <section className="bg-[#1f1f1f] rounded-2xl p-6 space-y-6">
//             <h2 className="font-iranSans-bold text-lg">نظرات کاربران</h2>
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="rounded-xl text-sm space-y-3 py-3 border-b border-gray-800"
//               >
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex gap-2 items-center">
//                     {/* <span className="w-12 h-12 bg-red-600"></span> */}
//                     <img
//                       src="/images/hero.jpg"
//                       alt=""
//                       className="w-8 h-8 rounded-full bg-cover"
//                     />
//                     <div className="flex flex-col">
//                       <span className="font-iranSans-bold">کاربر {i}</span>
//                       <span className="font-iranSans-edit text-gray-400 text-xs">
//                         2روز پیش
//                       </span>
//                     </div>
//                   </div>
//                   <span className="text-yellow-400 bg-red-950 py-1 px-2 rounded-lg">
//                     ⭐ {8 + i / 2}
//                   </span>
//                 </div>
//                 <p className="text-gray-400 font-iranSans-bold">
//                   فیلم فوق‌العاده‌ای بود، داستان جذاب و بازی‌ها عالی!
//                 </p>
//               </div>
//             ))}

//             <button className="w-full bg-gray-700 hover:bg-gray-800 transition-all p-2 rounded-lg font-iranSans-bold">
//               نوشتن نظر
//             </button>
//           </section>
//         </main>
//         {/* ================= Sticky Movie Info ================= */}
//         <aside className="lg:col-span-3">
//           <div className="sticky top-24 bg-[#1f1f1f] rounded-2xl p-5 text-sm">
//             <h3 className="font-bold mb-4 text-lg font-iranSans-bold">
//               اطلاعات فیلم
//             </h3>

//             <ul className="space-y-3 text-gray-300">
//               <li className="flex items-center gap-2">
//                 <MdDateRange size={18} color="red" />
//                 <div className="flex flex-col">
//                   <span>سال تولید</span>
//                   <span className="text-white font-iranSans-bold">2024</span>
//                 </div>
//               </li>
//               <li className="flex items-center gap-2">
//                 <BsClock size={18} color="red" />
//                 <div className="flex flex-col">
//                   <span>مدت زمان</span>
//                   <span className="text-white font-iranSans-bold">
//                     135 دقیقه
//                   </span>
//                 </div>
//               </li>
//               <li className="flex items-center gap-2">
//                 <AiFillPlaySquare size={18} color="red" />
//                 <div className="flex flex-col">
//                   <span>ژانر</span>
//                   <span className="text-white font-iranSans-bold">
//                     علمی‌تخیلی، ماجراجویی
//                   </span>
//                 </div>
//               </li>
//               <li className="flex items-center gap-2">
//                 <BiStar size={18} color="red" />
//                 <div className="flex flex-col">
//                   <span>امتیاز</span>
//                   <span className="flex items-center gap-1 text-white font-iranSans-bold">
//                     8.9 از 10
//                   </span>
//                 </div>
//               </li>
//             </ul>

//             {/* Quality */}
//             <div className="mt-4 py-2 border-t border-gray-800">
//               <p className="mb-2 text-white font-iranSans-bold">کیفیت موجود</p>
//               <div className="flex flex-wrap gap-2">
//                 {["SD", "HD", "Full HD", "4K"].map((q) => (
//                   <span
//                     key={q}
//                     className="px-3 py-1 rounded-lg bg-[#363636] text-xs font-iranSans-bold"
//                   >
//                     {q}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Languages */}
//             <div className="mt-4 py-2 border-t border-gray-800">
//               <p className="mb-2 text-white font-iranSans-bold">زیرنویس</p>
//               <div className="flex flex-wrap gap-2">
//                 {["فارسی", "انگلیسی", "عربی"].map((l) => (
//                   <span
//                     key={l}
//                     className="px-3 py-1 rounded-lg bg-[#363636] text-xs font-iranSans-bold"
//                   >
//                     {l}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>
//       <div className="w-full pb-20">
//         <div className="w-full px-4 md:px-12">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-10">
//             <h2 className="text-2xl font-iranSans-bold">فیلم‌های مشابه</h2>
//           </div>

//           {/* Similar Movies */}
//           <MovieSilder slidesPerViewPc={6}>
//             {movies.map((movie) => (
//               <SwiperSlide
//                 key={movie.id}
//                 className="group bg-[#1f1f1f] rounded-2xl overflow-hidden transition duration-300 hover:scale-[1.03]"
//               >
//                 <Link to={`/movie/${movie.id}`}>
//                   <MovieCard data={movie} type="movie" />
//                 </Link>
//               </SwiperSlide>
//             ))}
//           </MovieSilder>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  FaPlus, 
  FaHeart, 
  FaShareAlt, 
  FaStar, 
  FaClock, 
  FaFilm, 
  FaCalendarAlt, 
  FaPlay 
} from 'react-icons/fa';
import { BiTime, BiMoviePlay } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { GiShare } from 'react-icons/gi';
// فرض بر این است که این ایمپورت‌ها در پروژه شما وجود دارند
import useAuthStore from "../../store/authStore";
import { addToFavorite, addToWatchList } from "../../services/userService";

// --- داده‌های نمونه برای فیلم (با عکس‌های متفاوت) ---
const movies = [
  { id: 1, title: 'Dune: Part Two', year: 2024, vote_average: 8.9, img: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&q=80' },
  { id: 2, title: 'Oppenheimer', year: 2023, vote_average: 8.6, img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&q=80' },
  { id: 3, title: 'Interstellar', year: 2014, vote_average: 8.7, img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80' },
  { id: 4, title: 'The Dark Knight', year: 2008, vote_average: 9.0, img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e63?w=500&q=80' },
  { id: 5, title: 'Inception', year: 2010, vote_average: 8.8, img: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=500&q=80' },
  { id: 6, title: 'Pulp Fiction', year: 1994, vote_average: 8.9, img: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&q=80' },
];

const MovieDetail = () => {
  const { user } = useAuthStore();
  const params = useParams();
  const [loading, setLoading] = useState(false);

  // --- دیتای فیلم جاری (شبیه‌سازی شده) ---
  // در پروژه واقعی این داده از API می‌آید
  const movieData = {
    id: params.id || 1,
    title: "سفر به ناشناخته (Interstellar)",
    original_title: "Interstellar",
    overview: "ماجراجویی هیجان‌انگیز یک کاوشگر فضایی در سرزمینی مرموز و ناشناخته که آینده بشر را تغییر می‌دهد. این فیلم به بررسی مفاهیم پیچیده زمان، فضا و عشق می‌پردازد.",
    release_date: "2014-11-07",
    runtime: 169,
    vote_average: 8.7,
    genres: ["علمی‌تخیلی", "ماجراجویی", "درام"],
    director: "کریستوفر نولان",
    writers: "کریستوفر نولان، جاناتان نولان",
    cast: "متیو مک‌کانهی، ان هتوی، جسیکا چستین",
    country: "آمریکا / بریتانیا",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80",
    quality: ["SD", "HD", "Full HD", "4K"],
    subtitles: ["فارسی", "انگلیسی", "عربی"]
  };

  // توابع دکمه‌ها
  const handelAddToFavorite = async (movieId) => {
    if(user) await addToFavorite(user.uid, movieId);
  };
  const handelAddToWatchList = async (movieId) => {
    if(user) await addToWatchList(user.uid, movieId);
  };

  useEffect(() => {
    // اینجا متد fetch دیتا بر اساس params.id قرار می‌گیرد
    console.log("Fetching data for ID:", params.id);
  }, [params.id]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative pb-24" dir="rtl">
      
      {/* --- 1. Hero Section (تصویر پس‌زمینه بزرگ) --- */}
      <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        <img 
          src={movieData.backdrop} 
          alt={movieData.title} 
          className="w-full h-full object-cover"
        />
        {/* گرادینت‌های تاریک حرفه‌ای */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* --- 2. Main Content (Grid Layout) --- */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 -mt-32 md:-mt-40 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ================= Information Panel (Right/Sticky) ================= */}
        {/* برای دسکتاپ ستون سمت راست، برای موبایل بالای لیست */}
        <aside className="lg:col-span-4 xl:col-span-3 order-2 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-24 bg-[#141414]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl"
          >
            {/* پوستر فیلم */}
            <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-lg mb-6 border border-white/10">
              <img 
                src={movieData.poster} 
                alt={movieData.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-yellow-400 border border-yellow-400/20">
                <FaStar /> {movieData.vote_average}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4 text-center">اطلاعات فیلم</h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                <MdDateRange className="text-red-500 w-5 h-5" />
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px]">سال تولید</span>
                  <span className="font-bold text-white">{movieData.release_date.substring(0, 4)}</span>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                <FaClock className="text-red-500 w-5 h-5" />
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px]">مدت زمان</span>
                  <span className="font-bold text-white">{movieData.runtime} دقیقه</span>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                <BiMoviePlay className="text-red-500 w-5 h-5" />
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px]">ژانر</span>
                  <span className="font-bold text-white">{movieData.genres.join('، ')}</span>
                </div>
              </li>
            </ul>

            {/* کیفیت ها */}
            <div className="mt-6 pt-4 border-t border-white/5">
              <p className="text-xs text-gray-400 mb-3">کیفیت موجود</p>
              <div className="flex flex-wrap gap-2">
                {movieData.quality.map((q) => (
                  <span key={q} className="px-3 py-1 rounded-lg bg-gray-800/80 border border-white/5 text-[10px] font-bold text-gray-300 hover:border-red-500/50 transition-colors">
                    {q}
                  </span>
                ))}
              </div>
            </div>

            {/* زیرنویس ها */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-xs text-gray-400 mb-3">زیرنویس</p>
              <div className="flex flex-wrap gap-2">
                {movieData.subtitles.map((l) => (
                  <span key={l} className="px-3 py-1 rounded-lg bg-gray-800/80 border border-white/5 text-[10px] font-bold text-gray-300">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </aside>

        {/* ================= Main Content (Left) ================= */}
        <main className="lg:col-span-8 xl:col-span-9 space-y-8 order-1 lg:order-1">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4 text-xs">
              <span className="bg-red-600/90 text-white px-3 py-1 rounded-full font-bold">⭐ {movieData.vote_average}</span>
              <span className="text-gray-400">{movieData.release_date}</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">{movieData.country}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
              {movieData.title}
            </h1>
            <p className="text-gray-400 text-sm italic mb-2">{movieData.original_title}</p>

            <p className="text-gray-300 max-w-4xl leading-7 text-md mb-6">
              {movieData.overview}
            </p>

            {/* دکمه‌های اکشن */}
            <div className="flex flex-wrap gap-3">
              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-red-600/20 hover:shadow-red-600/40">
                <FaPlay className="w-3 h-3" /> پخش فیلم
              </button>
              <button 
                onClick={() => handelAddToFavorite(movieData.id)}
                className="bg-gray-800/50 hover:bg-gray-700/80 border border-white/10 px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2"
              >
                <FaPlus className="w-3 h-3" /> افزودن به لیست
              </button>
              <button 
                onClick={() => handelAddToWatchList(movieData.id)}
                className="bg-gray-800/50 hover:bg-gray-700/80 border border-white/10 px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2"
              >
                <FiHeart className="w-4 h-4" /> علاقه‌مندی
              </button>
              <button className="bg-gray-800/50 hover:bg-gray-700/80 border border-white/10 px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2">
                <GiShare className="w-4 h-4" /> اشتراک‌گذاری
              </button>
            </div>
          </motion.div>

          {/* --- درباره فیلم (دیتیل) --- */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#141414]/50 border border-white/5 rounded-3xl p-6 md:p-8"
          >
            <h2 className="font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-red-500 rounded-full"></span> درباره فیلم
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-1">
                <p className="text-gray-500 text-xs font-medium tracking-wider">کارگردان</p>
                <p className="font-bold text-white">{movieData.director}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs font-medium tracking-wider">نویسنده</p>
                <p className="font-bold text-white">{movieData.writers}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs font-medium tracking-wider">بازیگران</p>
                <p className="font-bold text-white line-clamp-1">{movieData.cast}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs font-medium tracking-wider">کشور سازنده</p>
                <p className="font-bold text-white">{movieData.country}</p>
              </div>
            </div>
          </motion.section>

          {/* --- نظرات کاربران --- */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#141414]/50 border border-white/5 rounded-3xl p-6 md:p-8"
          >
            <h2 className="font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-red-500 rounded-full"></span> نظرات کاربران (12)
            </h2>
            
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-sm font-bold text-gray-300 border border-white/10">
                        {`کاربر ${i}`.substring(0, 2)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">کاربر {i}</span>
                        <span className="text-gray-500 text-[10px]">۲ روز پیش</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-lg text-yellow-400 text-xs font-bold border border-yellow-500/10">
                      <FaStar className="w-3 h-3" /> {8 + i / 2}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    فیلم فوق‌العاده‌ای بود، داستان جذاب و بازی‌ها عالی! واقعاً ارزش دیدن دارد.
                  </p>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-white/5 hover:bg-white/10 border border-white/10 transition-all py-3 rounded-xl font-bold text-sm text-white">
              نوشتن نظر جدید
            </button>
          </motion.section>
        </main>
      </div>

      {/* --- 3. Similar Movies (Slider) --- */}
      <div className="w-full border-t border-white/5 pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              فیلم‌های مشابه
            </h2>
            <Link to="/search" className="text-sm text-gray-400 hover:text-red-400 flex items-center gap-1 transition-colors">
              مشاهده همه <span className="text-[10px]">→</span>
            </Link>
          </div>

          {/* با استفاده از Framer Motion یک اسلایدر ساده و نرم ساخته شده */}
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {movies.map((movie) => (
              <motion.div
                key={movie.id}
                variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="min-w-[160px] md:min-w-[200px] snap-start relative cursor-pointer rounded-xl overflow-hidden aspect-[2/3] group"
              >
                <Link to={`/movie/${movie.id}`}>
                  <img src={movie.img} alt={movie.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="font-bold text-sm truncate text-white">{movie.title}</h3>
                    <span className="text-[10px] text-gray-300">{movie.year}</span>
                  </div>
                  <div className="absolute bottom-2 left-2 z-10">
                     <span className="bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-yellow-400 border border-yellow-400/20 flex items-center gap-1">
                       <FaStar className="w-2.5 h-2.5" /> {movie.vote_average}
                     </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default MovieDetail;