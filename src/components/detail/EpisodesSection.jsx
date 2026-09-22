import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaChevronDown, FaListUl, FaPlay } from "react-icons/fa";

const EpisodesSection = ({ detail }) => {
  const [isSeasonDropdownOpen, setIsSeasonDropdownOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(1);

  const seasons = useMemo(
    () => Array.from({ length: detail?.number_of_seasons }, (_, i) => i + 1),
    [detail?.number_of_seasons],
  );

  const episodes = useMemo(() => {
    if (!detail || !selectedSeason) return [];

    const seasonData = detail.seasons?.find(
      (s) => s.season_number === selectedSeason,
    );
    if (!seasonData) return [];

    return Array.from({ length: seasonData.episode_count }, (_, i) => i + 1);
  }, [detail, selectedSeason]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-[#141414]/50 border border-white/5 rounded-3xl p-6 md:p-8"
    >
      {/* هدر با سلکتور فصل */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="font-bold text-xl flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full"></span>
          Parts and Seasens
        </h2>

        {/* سلکتور فصل (Dropdown) */}
        <div className="relative">
          <button
            onClick={() => setIsSeasonDropdownOpen(!isSeasonDropdownOpen)}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm font-bold transition-colors min-w-[160px] justify-between"
          >
            <span>Seasen {selectedSeason}</span>
            <FaChevronDown
              className={`w-3 h-3 transition-transform ${isSeasonDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {isSeasonDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full right-0 mt-2 w-full bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden z-30 shadow-2xl max-h-60 overflow-y-auto"
              >
                {seasons.map((s, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedSeason(s);
                      setIsSeasonDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-medium text-right transition-colors ${
                      selectedSeason === s
                        ? "bg-red-600 text-white"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    <span>Seasen {s}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* گرید قسمت‌ها */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {episodes.length > 0 ? (
          episodes.map((ep, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="group bg-[#0f0f0f] border border-white/5 hover:border-red-500/30 rounded-2xl overflow-hidden flex flex-col sm:flex-row gap-4 p-3 transition-colors cursor-pointer"
            >
              {/* تامبنیل */}
              <div className="relative w-full sm:w-32 aspect-video rounded-xl overflow-hidden shrink-0">
                <img
                  src={`https://image.tmdb.org/t/p/original/${detail.data?.poster_path}`}
                  alt={ep.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <FaPlay className="w-3 h-3 text-white fill-current mr-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">
                  45 m
                </span>
              </div>

              {/* اطلاعات قسمت */}
              <div className="flex-1 py-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-500/10 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded border border-red-500/20">
                    Part {ep}
                  </span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            <FaListUl className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">اطلاعاتی برای این فصل موجود نیست</p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default EpisodesSection;
