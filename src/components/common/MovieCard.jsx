// import { movieFormatGenres, seriesFormatGenres } from "../utils/genresUtils";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const MovieCard = ({ item, type = "movie", itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative cursor-pointer rounded-xl overflow-hidden aspect-[2/3] bg-gray-800 border border-gray-700/30 hover:border-red-500/50 transition-colors"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group group-hover:scale-110"
        loading="lazy"
      />

      {/* Overlay برای نمایش در هاور */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold mb-1">
          <span className="bg-black/60 px-1.5 py-0.5 rounded text-[10px] text-white border border-yellow-500/20">
            {type === "movie"
              ? "فیلم"
              : type === "series"
                ? "سریال"
                : "انیمیشن"}
          </span>
          <span>⭐ {item.vote_average.toFixed(1)}</span>
        </div>
        <h3 className="font-bold text-sm truncate text-white">
          {type === "movie" ? item.title : item.name}
        </h3>
        <p className="text-[10px] text-gray-400">
          {type === "movie"
            ? item.release_date?.substring(0, 4)
            : item.first_air_date?.substring(0, 4)}
        </p>
        <button className="mt-3 w-full bg-red-600/90 hover:bg-red-600 py-2 rounded-lg text-[11px] font-bold transition-colors flex items-center justify-center gap-1">
          <Play className="w-3 h-3 fill-current" /> تماشا کنید
        </button>
      </div>

      {/* اطلاعات دائمی (زمانی که هاور نیست) */}
      <div className="absolute bottom-3 left-3 right-3 z-10 flex justify-between items-end group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-bold text-xs truncate max-w-[70%] drop-shadow-md text-white">
          {type === "movie" ? item.title : item.name}
        </h3>
        <span className="bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-gray-300 border border-white/10">
          {type === "movie"
            ? item.release_date?.substring(0, 4)
            : item.first_air_date?.substring(0, 4)}
        </span>
      </div>
    </motion.div>
  );
};

export default MovieCard;
