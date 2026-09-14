import { ChevronRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SearchBanner = () => {
  return (
    <div className="container mx-auto px-6 py-8">
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
              <h3 className="text-2xl font-bold text-white">Advanced Search</h3>
              <p className="text-gray-400 text-sm">
                Find the movies, series, and animations you are looking for
                using precise filters.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-red-400 font-bold bg-red-500/10 px-6 py-3 rounded-xl group-hover:bg-red-500/20 transition-all">
            Go to the filters page
            <ChevronRight className="w-5 h-5" />
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default SearchBanner;
