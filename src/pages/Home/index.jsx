// import { useEffect, useState } from "react";
// import { BiMovie } from "react-icons/bi";
// import { MovieSlider2, MovieSlider3 } from "../components/Swiper";
// import {
//   getNowPlayingMovies,
//   getPopularMovies,
// } from "../services/movieService";
// import { movieFormatGenres, seriesGenres } from "../utils/genresUtils";
// import { SwiperSlide } from "swiper/react";
// import { ImInfo } from "react-icons/im";
// import { getSeries, getSeriesWithFillter } from "../services/seriesService";
// import SpinnerLoading from "../components/SpinnerLoading";
// import MovieCard from "../components/MovieCard";
// import { Link } from "react-router-dom";

// export default function HomePage() {
//   const [heroMovies, setHeroMovies] = useState([]);
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
//   const [series, setSeries] = useState([]);
//   const [activeGenre, setActiveGenre] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

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
//       poster_path: "images/hero.jpg",
//       title: "movie3",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 3,
//       poster_path: "images/hero.jpg",
//       title: "movie4",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 4,
//       poster_path: "images/hero.jpg",
//       title: "movie5",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 5,
//       poster_path: "images/hero.jpg",
//       title: "movie6",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 6,
//       poster_path: "images/hero.jpg",
//       title: "movie7",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 7,
//       poster_path: "images/hero.jpg",
//       title: "movie7",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//     {
//       id: 8,
//       poster_path: "images/hero.jpg",
//       title: "movie8",
//       vote_average: 8.5,
//       release_date: "2026-12-10",
//       first_air_date: "2026-12-10",
//       genre_ids: [28, 12, 16],
//     },
//   ];

//   const handelFetchAllData = async () => {
//     try {
//       setLoading(true);
//       const [nowPlaying, popular, series] = await Promise.allSettled([
//         getNowPlayingMovies(),
//         getPopularMovies(),
//         getSeries(),
//       ]);
//       setHeroMovies(nowPlaying.value.slice(0, 3));
//       setNowPlayingMovies(nowPlaying.value.slice(0, 6));
//       setPopularMovies(popular.value.slice(0, 6));
//       setSeries(series.value);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handelFetchWithFilter = async (value) => {
//     setActiveGenre(value);
//     setSeries([]);
//     const dataFiltered = await getSeriesWithFillter(value.id);
//     setSeries(dataFiltered);
//   };

//   useEffect(() => {
//     handelFetchAllData();
//   }, []);

//   // if (loading)
//   //   return (
//   //     <div className="h-screen bg-[#141414] flex items-center justify-center">
//   //       <SpinnerLoading width={12} height={12} />
//   //     </div>
//   //   );

//   // if (error)
//   //   return (
//   //     <div className="h-screen bg-[#141414] text-gray-300 flex flex-col gap-2 items-center justify-center">
//   //       <h2>بارگذاری با مشکل مواجه شد لطفا مجددا تلاش کنید!</h2>
//   //       <button
//   //         onClick={handelFetchAllData}
//   //         className="font-iranSans-bold py-2 px-6 bg-red-500 hover:bg-red-600 transition-all rounded-md"
//   //       >
//   //         تلاش مجدد
//   //       </button>
//   //     </div>
//   //   );

//   return (
//     <div>
//       <div
//         id="home"
//         className="relative w-full h-screen overflow-hidden text-white"
//       >
//         <MovieSlider3>
//           {heroMovies.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full h-full">
//                 {/* Background Image */}
//                 <img
//                   src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
//                   alt={item.title}
//                   className="absolute inset-0 w-full h-full bg-cover"
//                 />

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/60 to-black/30" />

//                 {/* Content */}
//                 <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col gap-4 justify-center px-6">
//                   <div className="flex items-center gap-4 text-sm text-gray-300">
//                     <span>⭐ {item.vote_average.toFixed(1)}</span>
//                     <span>{item.release_date?.substring(0, 4)}</span>
//                   </div>
//                   <h1 className="text-4xl md:text-6xl font-bold text-white">
//                     {item.title}
//                   </h1>

//                   <p className="text-gray-300 max-w-xl leading-relaxed line-clamp-2">
//                     {item.overview}
//                   </p>
//                   <p className="flex items-center gap-1 font-iranSans-edit">
//                     <BiMovie />
//                     <span> {movieFormatGenres(item.genre_ids)}</span>
//                   </p>
//                   <div className="flex gap-4 font-iranSans-bold">
//                     <Link to={`/movie/${item.id}`}>
//                       <button className="bg-red-700 hover:bg-red-800 transition px-8 py-4 rounded-lg">
//                         ▶ تماشای فیلم
//                       </button>
//                     </Link>
//                     <button className="bg-gray-700 flex items-center gap-2 hover:bg-gray-600 transition px-8 py-4 rounded-lg">
//                       <ImInfo />
//                       <span>اطلاعات بیشتر</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </MovieSlider3>
//       </div>
//       <section className="w-full bg-[#1e1e1e] text-white py-20 relative font-iranSans-bold">
//         <div id="series" className="max-w-7xl mx-auto px-3 md:px-6">
//           {/* Top Title */}
//           <div className="text-center mb-14">
//             <h2 className="text-3xl font-extrabold mb-2">جستجو بر اساس ژانر</h2>
//             <p className="text-gray-400 text-sm">
//               سریال مورد علاقه خود را پیدا کنید
//             </p>
//           </div>

//           {/* Genres Item */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mb-12 font-iranSans-bold">
//             {seriesGenres.slice(0, 8).map((genre) => (
//               <div
//                 key={genre.id}
//                 onClick={() => handelFetchWithFilter(genre)}
//                 className={`rounded-xl py-6 flex flex-col items-center justify-center  hover:scale-105 transition cursor-pointer group
//                   ${activeGenre?.name === genre.name ? `bg-red-600 text-white scale-105 shadow-lg shadow-red-600/30` : `bg-[#2a2a2a] hover:bg-[#363636]`}`}
//               >
//                 <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center mb-3 transition">
//                   <span className="text-lg">{genre.icon}</span>
//                 </div>
//                 <span className="text-xs text-gray-200">{genre.name}</span>
//               </div>
//             ))}
//           </div>

//           {/* {series.length == 0 ? (
//             <div className="w-full text-center">
//               <SpinnerLoading width="12" height="12" />
//             </div>
//           ) : (
//             <MovieSlider2>
//               {movies.map((item) => (
//                 <SwiperSlide
//                   key={item.id}
//                   className="group bg-[#141414] rounded-2xl overflow-hidden transition duration-300 hover:scale-[1.03]"
//                 >
//                   <MovieCard data={item} type="series" />
//                 </SwiperSlide>
//               ))}
//             </MovieSlider2>
//           )} */}
//           <MovieSlider2>
//             {movies.map((item) => (
//               <SwiperSlide
//                 key={item.id}
//                 className="group bg-[#141414] rounded-2xl overflow-hidden transition duration-300 hover:scale-[1.03]"
//               >
//                 <MovieCard data={item} type="series" />
//               </SwiperSlide>
//             ))}
//           </MovieSlider2>
//         </div>
//       </section>
//       <section className="w-full bg-[#141414] text-white py-20 px-3 md:px-12 flex flex-col items-center gap-20 font-iranSans-bold">
//         <div id="popular" className="w-full max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-10">
//             <h2 className="text-2xl md:text-3xl font-bold text-white font-iranSans-bold">
//               فیلم‌های محبوب
//             </h2>

//             <button className="text-red-500 text-sm hover:underline">
//               مشاهده همه ←
//             </button>
//           </div>

//           {/* Grid */}
//           <div
//             className="
//           grid
//           grid-cols-2
//           sm:grid-cols-2
//           md:grid-cols-3
//           lg:grid-cols-4
//           xl:grid-cols-6
//           gap-4
//           md:gap-6
//         "
//           >
//             {movies.map((movie) => (
//               <Link
//                 to={`/movie/${movie.id}`}
//                 key={movie.id}
//                 className="group bg-[#1f1f1f] rounded-2xl overflow-hidden transition duration-300 hover:scale-[1.03]"
//               >
//                 <MovieCard data={movie} type="movie" />
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div id="now" className="w-full max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-10">
//             <h2 className="text-2xl md:text-3xl font-bold text-white font-iranSans-bold">
//               فیلم‌های جدید
//             </h2>

//             <button className="text-red-500 text-sm hover:underline">
//               مشاهده همه ←
//             </button>
//           </div>

//           {/* Grid */}
//           <div
//             className="
//           grid
//           grid-cols-2
//           sm:grid-cols-2
//           md:grid-cols-3
//           lg:grid-cols-4
//           xl:grid-cols-6
//           gap-4
//           md:gap-6
//         "
//           >
//             {nowPlayingMovies.map((movie) => (
//               <Link
//                 to={`/movie/${movie.id}`}
//                 key={movie.id}
//                 className="group bg-[#1f1f1f] rounded-2xl overflow-hidden transition duration-300 hover:scale-[1.03]"
//               >
//                 <MovieCard data={movie} type="movie" />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Play,
  Info,
  Film,
  Tv,
  Heart,
  Clock,
  ChevronRight,
  Home,
  User,
  SlidersHorizontal,
  Sparkles,
  Zap,
  Drama,
  Rocket,
  Ghost,
  Cat,
  Bird,
  Camera,
  Clapperboard,
} from "lucide-react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/common/MovieCard";
import Navbar from "../../components/common/Header";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getAnimations,
} from "../../services/movieService";
import { getSeries } from "../../services/seriesService";
import { MovieSlider3 } from "../../components/common/Swiper";
import { SwiperSlide } from "swiper/react";
import { BiMovie } from "react-icons/bi";
import { popularGenres, movieFormatGenres } from "../../utils/genresUtils";
import SpinnerLoading from "../../components/common/SpinnerLoading";

// --- انیمیشن‌های Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// --- کامپوننت اصلی صفحه ---
const MainPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [animations, setAnimations] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

  const handelFetchAllData = async () => {
    setLoading(true);
    const [nowPlaying, popular, series, animationsMovies] = await Promise.all([
      getNowPlayingMovies(),
      getPopularMovies(),
      getSeries(),
      getAnimations(),
    ]);
    setNowPlayingMovies(nowPlaying);
    setPopularMovies(popular);
    setSeries(series);
    setAnimations(animationsMovies);
    setLoading(false);
  };

  useEffect(() => {
    handelFetchAllData();
  }, []);

  if (loading)
    return (
      <div className="h-screen bg-[#141414] flex items-center justify-center">
        <SpinnerLoading width={12} height={12} />
      </div>
    );

  if (error)
    return (
      <div className="h-screen bg-[#141414] text-gray-300 flex flex-col gap-2 items-center justify-center">
        <h2>بارگذاری با مشکل مواجه شد لطفا مجددا تلاش کنید!</h2>
        <button
          onClick={handelFetchAllData}
          className="font-iranSans-bold py-2 px-6 bg-red-500 hover:bg-red-600 transition-all rounded-md"
        >
          تلاش مجدد
        </button>
      </div>
    );

  return (
    <div>
      {/* --- 1. Header (Hero Section) --- */}
      <header className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden">
        <MovieSlider3>
          {nowPlayingMovies.slice(0, 3).map((item, index) => (
            <SwiperSlide key={item.id || index}>
              {(
                { isActive }, // استفاده از isActive برای اینکه فقط اسلاید فعال انیمیشن داشته باشد
              ) => (
                <div className="relative w-full h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* گرادینت‌های تاریک */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>

                  {/* محتوای متنی (با AnimatePresence) */}
                  <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-20 md:pb-28">
                    <AnimatePresence mode="wait">
                      {isActive && ( // فقط اگر اسلاید فعال بود، انیمیشن اجرا شود
                        <motion.div
                          key={item.id} // کلید اصلی‌ترین بخش برای اجرای مجدد انیمیشن
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }} // انیمیشن خروج (به سمت راست)
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="max-w-2xl"
                        >
                          <div className="flex items-center gap-3 text-sm text-gray-300 mb-4">
                            <span className="bg-red-600/90 px-3 py-1 rounded-full text-white text-[10px] font-bold tracking-wider uppercase">
                              جدیدترین فیلم
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />{" "}
                              {item.release_date?.substring(0, 4)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Film className="w-4 h-4" />{" "}
                              {movieFormatGenres(item.genre_ids)}
                            </span>
                          </div>

                          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-xl">
                            {item.title}
                          </h1>
                          <p className="text-md text-gray-300 mb-8 leading-relaxed line-clamp-3 max-w-xl drop-shadow-lg">
                            {item.overview}
                          </p>

                          <div className="flex flex-wrap gap-4">
                            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-all px-8 py-3 rounded-full font-bold text-md shadow-lg shadow-red-600/30 hover:shadow-red-600/50">
                              <Play className="w-4 h-4 fill-current" /> پخش فیلم
                            </button>
                            <button className="flex items-center gap-2 bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-md transition-all px-8 py-3 rounded-full font-bold text-md border border-white/10">
                              <Info className="w-4 h-4" /> اطلاعات بیشتر
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </MovieSlider3>
      </header>

      {/* --- 2. Header (Navigation) --- */}
      <Navbar />

      {/* --- 3. Genres Section (Quick Access) --- */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">دسته‌بندی‌های پرطرفدار</h2>
          <p className="text-gray-400 text-sm">
            فیلم و سریال مورد علاقه خود را بر اساس ژانر پیدا کنید
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {popularGenres.map((genre) => (
            <motion.button
              key={genre.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center gap-2 p-6 rounded-2xl w-24 md:w-28 transition-all shadow-lg border ${genre.color} backdrop-blur-sm hover:bg-white/5`}
            >
              <span className="text-3xl">{genre.icon}</span>
              <span className="text-xs font-bold">{genre.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* --- 4. Popular Movies Section --- */}
      <section className="container mx-auto px-6 py-12 border-t border-white/5">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Clapperboard className="w-6 h-6 text-purple-400" /> فیلم‌های
              محبوب
            </h2>
            <p className="text-xs text-gray-500 mt-1">انتخاب مخاطبان سینما</p>
          </div>
          <Link
            to="/search"
            className="text-sm text-gray-400 hover:text-red-400 flex items-center gap-1 transition-colors"
          >
            مشاهده همه <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {popularMovies.slice(0, 6).map((movie) => (
            <MovieCard
              key={movie.id}
              item={movie}
              type="movie"
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </section>

      {/* --- 5. Popular Series Section --- */}
      <section className="container mx-auto px-6 py-12 border-t border-white/5">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Tv className="w-6 h-6 text-purple-400" /> سریال‌های برتر
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              جدیدترین اپیزودهای هفته
            </p>
          </div>
          <Link
            to="/search"
            className="text-sm text-gray-400 hover:text-purple-400 flex items-center gap-1 transition-colors"
          >
            مشاهده همه <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {series.slice(0, 6).map((show) => (
            <MovieCard key={show.id} item={show} type="series" />
          ))}
        </motion.div>
      </section>

      {/* --- 6. Call to Action for Advanced Search --- */}
      <section className="container mx-auto px-6 py-8">
        <Link to="/search">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="w-full bg-gradient-to-r from-gray-900 to-[#1a1a1a] border border-gray-700/50 hover:border-red-500/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-red-500/10 rounded-2xl group-hover:bg-red-500/20 transition-colors">
                <Search className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  جستجوی پیشرفته
                </h3>
                <p className="text-gray-400 text-sm">
                  با استفاده از فیلترهای دقیق، فیلم، سریال و انیمیشن مورد نظر
                  خود را بیابید.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-red-400 font-bold bg-red-500/10 px-6 py-3 rounded-xl group-hover:bg-red-500/20 transition-all">
              ورود به صفحه فیلترها <ChevronRight className="w-5 h-5" />
            </div>
          </motion.div>
        </Link>
      </section>

      {/* --- 7. Animation Section --- */}
      <section className="container mx-auto px-6 py-12 border-t border-white/5">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-400" /> بهترین انیمیشن‌ها
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              جدیدترین آثار انیمیشن و انیمه
            </p>
          </div>
          <Link
            to="/search"
            className="text-sm text-gray-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
          >
            مشاهده همه <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {animations?.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} item={movie} type="movie" />
          ))}
        </motion.div>
      </section>

      {/* --- Bottom Mobile Navigation --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 flex justify-around py-3 md:hidden z-50">
        <Link to="/" className="flex flex-col items-center text-red-500">
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-1">خانه</span>
        </Link>
        <Link
          to="/search"
          className="flex flex-col items-center text-gray-500 hover:text-white transition-colors"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] mt-1">جستجو</span>
        </Link>
        <button className="flex flex-col items-center text-gray-500 hover:text-white transition-colors">
          <Heart className="w-5 h-5" />
          <span className="text-[10px] mt-1">علاقه‌مندی</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-white transition-colors">
          <User className="w-5 h-5" />
          <span className="text-[10px] mt-1">حساب</span>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
