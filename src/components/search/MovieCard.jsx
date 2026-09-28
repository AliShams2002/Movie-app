import { Calendar, Play, Star } from "lucide-react";
import { handelMovieGenre, handelTvGenre } from "../../utils/genreHelper";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, type }) => {
  return (
    <div
      className="group bg-gray-900/40 border border-gray-800/50
                            hover:border-gray-700 rounded-2xl overflow-hidden shadow-lg
                            hover:shadow-red-500/10 transition-all duration-300 flex
                            flex-col md:flex-row gap-2 p-3"
    >
      <div className="relative w-full flex-1 aspect-[3/4] md:aspect-[3/4] rounded-xl overflow-hidden shrink-0">
        {/* image */}
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Rating */}
        <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold text-yellow-400">
          <Star className="w-3 h-3 fill-current" />{" "}
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div>
          {/* Title */}
          <h3 className="font-bold text-lg text-white leading-tight mb-1 group-hover:text-red-400 transition-colors line-clamp-1">
            {movie.title || movie.original_name}
          </h3>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            {/* Release date */}
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />{" "}
              {movie.release_date?.substring(0, 4)}
            </span>
            <span className="text-gray-600">|</span>
            {/* Genres */}
            <span className="line-clamp-1">
              {type === "movie"
                ? handelMovieGenre(movie.genre_ids)
                : handelTvGenre(movie.genre_ids)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-1 mt-3">
          <div className="flex gap-2">
            {/* Qualiti */}
            <span className="bg-gray-800 text-[10px] px-2 py-0.5 rounded border border-gray-700 text-gray-300">
              HD
            </span>
          </div>
          {/* Play btn */}
          <Link
            to={`/${type}/${movie.id}`}
            className="bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
          >
            <Play className="w-3 h-3 fill-current" /> PLAY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
