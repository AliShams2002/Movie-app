import { motion, AnimatePresence } from "framer-motion";
import { Search, Tv, ChevronRight, Sparkles, Clapperboard } from "lucide-react";
import { Link } from "react-router-dom";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getAnimations,
} from "../../services/movieService";
import { getSeries } from "../../services/seriesService";
import { movieGenre } from "../../utils/genresUtils";
import { useMovieList } from "../../hooks/data/useMovieList";
import MovieRow from "../../components/movie/MovieRow";
import GenreList from "../../components/ui/GenreList";
import HeroSection from "../../components/ui/HeroSection";
import SearchBanner from "../../components/ui/SearchBanner";

// --- ۱. انیمیشن‌های مشترک Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // هر کارت با 0.1 ثانیه تاخیر
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// --- ۳. کامپوننت اصلی صفحه ---
const Home = () => {
  const nowPlaying = useMovieList({
    fetcher: getNowPlayingMovies,
  });

  const popular = useMovieList({
    fetcher: getPopularMovies,
  });

  const topSeries = useMovieList({
    fetcher: getSeries,
  });

  const animation = useMovieList({
    fetcher: getAnimations,
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative overflow-x-hidden pb-24">
      {/* --- 1. Header (Hero Section) --- */}
      <HeroSection data={nowPlaying.data.slice(0, 3)} />

      {/* --- 3. Genres Section --- */}
      <GenreList
        genres={movieGenre}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* --- 4. Popular Movies Section (با انیمیشن) --- */}
      <MovieRow
        title="Popular movies"
        subtitle="Cinema Audience Choice"
        icon={<Clapperboard className="w-6 h-6" />}
        data={popular}
        type="movie"
        linkTo="/search"
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* --- 5. Popular Series Section (با انیمیشن) --- */}
      <MovieRow
        title="Top TV Series"
        subtitle="The latest episodes of the week"
        icon={<Tv className="w-6 h-6" />}
        data={topSeries}
        type="series"
        linkTo="/search"
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* --- 6. Call to Action for Advanced Search --- */}
      <SearchBanner />

      {/* --- 7. Animation Section (با انیمیشن) --- */}
      <MovieRow
        title="The Best Animations"
        subtitle="The latest animation and anime works"
        icon={<Sparkles className="w-6 h-6 text-cyan-400" />}
        data={animation}
        type="movie"
        linkTo="/search"
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* --- Bottom Mobile Navigation --- */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 flex justify-around py-3 md:hidden z-50">
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
      </div> */}
    </div>
  );
};

export default Home;
