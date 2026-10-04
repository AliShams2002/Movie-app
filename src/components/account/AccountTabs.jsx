import { motion } from "framer-motion";
import { Bookmark, Heart } from "lucide-react";

const AccountTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center border-b border-white/5">
      <button
        onClick={() => setActiveTab("watchlist")}
        className={`flex items-center gap-2 pb-4 px-6 text-sm font-bold transition-all relative ${
          activeTab === "watchlist"
            ? "text-red-500"
            : "text-gray-400 hover:text-white"
        }`}
      >
        <Bookmark className="w-4 h-4" /> Watchlist
        {activeTab === "watchlist" && (
          <motion.div
            layoutId="tab-indicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"
          />
        )}
      </button>
      <button
        onClick={() => setActiveTab("favorites")}
        className={`flex items-center gap-2 pb-4 px-6 text-sm font-bold transition-all relative ${
          activeTab === "favorites"
            ? "text-red-500"
            : "text-gray-400 hover:text-white"
        }`}
      >
        <Heart className="w-4 h-4" /> Favorites
        {activeTab === "favorites" && (
          <motion.div
            layoutId="tab-indicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"
          />
        )}
      </button>
    </div>
  );
};

export default AccountTabs;
