import { motion } from "framer-motion";
import { Bookmark, Heart } from "lucide-react";

const StateCards = ({ watchlist, favorites, itemVariants }) => {
  const formatObjToArr = (watchlist) => {
    const items = Object.values(watchlist);
    return items;
  };

  return (
    <div className="container mx-auto max-w-6xl px-6 mt-8">
      <div className="grid grid-cols-2 gap-4 max-w-md">
        <motion.div
          variants={itemVariants}
          className="bg-[#141414]/60 border border-white/5 rounded-2xl p-4 flex items-center gap-3 backdrop-blur-sm"
        >
          <div className="p-3 bg-red-500/10 rounded-xl text-red-400">
            <Bookmark className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-bold">
              {watchlist ? formatObjToArr(watchlist).length : 0}
            </p>
            <p className="text-xs text-gray-400">Watchlist</p>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="bg-[#141414]/60 border border-white/5 rounded-2xl p-4 flex items-center gap-3 backdrop-blur-sm"
        >
          <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-bold">
              {favorites ? formatObjToArr(favorites).length : 0}
            </p>
            <p className="text-xs text-gray-400">Favorites</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StateCards;
