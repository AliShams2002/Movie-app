import { AnimatePresence, motion } from "framer-motion";
import { Bookmark, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import ErrorState from "../common/ErrorState";
import MovieCard from "./MovieCard";
import Button from "../common/Button";

const MediaGrid = ({
  activeTab,
  containerVariants,
  currentList,
  isLoading,
  error,
}) => {
  console.log(currentList)
  if (isLoading)
    return <Spinner className="w-full mt-8 flex items-center justify-center" />;
  if (error) return <ErrorState errorMessage="Error loading data!" />;

  return (
    <div className="mt-8 min-h-[400px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 20 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {/* Items */}
          {currentList.length > 0 ? (
            currentList.map((item) => (
              <MovieCard key={item.id} item={item} activeTab={activeTab} />
            ))
          ) : (
            // Empty seaction
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
              <div className="p-6 bg-white/5 rounded-full mb-4">
                {activeTab === "watchlist" ? (
                  <Bookmark className="w-12 h-12" />
                ) : (
                  <Heart className="w-12 h-12" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">
                {activeTab === "watchlist"
                  ? "Your watchlist is empty"
                  : "Your wishlist is empty"}
              </h3>
              <p className="text-sm mb-6">
                To add items, visit the movies page
              </p>
              <Button
                type="link"
                action="/"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors"
              >
                Watch Movies
              </Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MediaGrid;
