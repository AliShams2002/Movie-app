import { Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useWatchlist } from "../../hooks/user/useWatchlist";
import { useFavorites } from "../../hooks/user/useFavorite";

const MovieCard = ({ item, activeTab }) => {
  const { toggle: toggleWatchlist } = useWatchlist(item?.id);

  const { toggle: toggleFavorites } = useFavorites(item?.id);

  const handleItemRemove = () => {
    if (activeTab === "watchlist") {
      toggleWatchlist(item);
    } else {
      toggleFavorites(item);
    }
  };

  return (
    <div className="group relative cursor-pointer rounded-xl overflow-hidden aspect-[2/3] bg-gray-800 border border-gray-700/30 hover:border-red-500/50 transition-colors">
      <img
        src={`${item.posterPath ? `https://image.tmdb.org/t/p/original/${item.posterPath}` : "/images/Auth_Wallpaper.jpg"}`}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "/images/Auth_Wallpaper.jpg";
        }}
      />

      {/* Overlay برای نمایش در هاور */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="absolute top-2 right-4">
          <X
            onClick={handleItemRemove}
            className="hover:text-gray-400 duration-150"
          />
        </div>
        <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold mb-1">
          <span className="bg-black/60 px-1.5 py-0.5 rounded text-[10px] text-white border border-yellow-500/20">
            {item.mediaType}
          </span>
          <span>⭐ {item.voteAverage.toFixed(1)}</span>
        </div>
        <h3 className="font-bold text-sm truncate text-white">{item.title}</h3>
        <p className="text-[10px] text-gray-400">{item.releaseDate}</p>
        <Link
          to={`/${item.mediaType}/${item.id}`}
          className="mt-3 w-full bg-red-600/90 hover:bg-red-600 py-2 rounded-lg text-[11px] font-bold transition-colors flex items-center justify-center gap-1"
        >
          <Play className="w-3 h-3 fill-current" />
          PLAY
        </Link>
      </div>

      {/* اطلاعات دائمی (زمانی که هاور نیست) */}
      <div className="absolute bottom-3 left-3 right-3 z-10 flex justify-between items-end group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-bold text-xs truncate max-w-[70%] drop-shadow-md text-white">
          {item.title}
        </h3>
        <span className="bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-gray-300 border border-white/10">
          {item.releaseDate.substring(0, 4)}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
