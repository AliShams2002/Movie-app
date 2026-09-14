import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GenreList = ({ genres, containerVariants, itemVariants }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Popular Categories</h2>
        <p className="text-gray-400 text-sm">
          Find your favorite movies and series by genre.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-4 md:gap-6"
      >
        {genres.map(
          (genre) =>
            genre.isPapular && (
              <Link to={`/search?genre=${genre.value}`} key={genre.value}>
                <motion.button
                  key={genre.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center gap-2 p-6 rounded-2xl w-24 md:w-28 transition-all shadow-lg border ${genre.color} backdrop-blur-sm hover:bg-white/5`}
                >
                  <span className="text-3xl">{genre.icon}</span>
                  <span className="text-xs font-bold">{genre.label}</span>
                </motion.button>
              </Link>
            ),
        )}
      </motion.div>
    </div>
  );
};

export default GenreList;
