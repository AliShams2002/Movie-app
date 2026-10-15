import { Tv, Sparkles, Clapperboard } from "lucide-react";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getAnimations,
} from "../../services/movieService";
import { getSeries } from "../../services/tv";
import { useMovieList } from "../../hooks/data/useMovieList";
import MovieRow from "../../components/movie/MovieRow";
import GenreList from "../../components/ui/GenreList";
import HeroSection from "../../components/ui/HeroSection";
import SearchBanner from "../../components/ui/SearchBanner";
import { MOVIE_GENRES } from "../../utils/constants";

// --- 1. Shared Framer Motion animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each card with a 0.1-second delay
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Home = () => {
  // Fetch required data
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
      {/* --- Header (Hero Section) --- */}
      <HeroSection data={nowPlaying.data.slice(0, 3)} />

      {/* --- Genres Section --- */}
      <GenreList
        genres={MOVIE_GENRES}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* --- Popular Movies Section --- */}
      <MovieRow
        title="Popular movies"
        subtitle="Cinema Audience Choice"
        icon={<Clapperboard className="w-6 h-6" />}
        data={popular}
        type="movie"
        linkTo="/search?list=popular&type=movie"
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* --- Popular Series Section --- */}
      <MovieRow
        title="Top TV Series"
        subtitle="The latest episodes of the week"
        icon={<Tv className="w-6 h-6" />}
        data={topSeries}
        type="tv"
        linkTo="/search?list=top_rated&type=tv"
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* --- Call to Action for Advanced Search --- */}
      <SearchBanner />

      {/* --- Animation Section --- */}
      <MovieRow
        title="The Best Animations"
        subtitle="The latest animation and anime works"
        icon={<Sparkles className="w-6 h-6 text-cyan-400" />}
        data={animation}
        type="movie"
        linkTo="/search?genre=16&type=movie&sort=popularity.desc"
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
    </div>
  );
};

export default Home;
