import { motion } from "framer-motion";
import { BiMoviePlay } from "react-icons/bi";
import { FaClock, FaStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import ErrorState from "../common/ErrorState";
import EmptyState from "../common/EmptyState";
import InfoSkeleton from "./skeleton/InfoSkeleton";

const PanelInfo = ({ type, detail }) => {
  const { data, status, error } = detail;

  if (status === "loading") return <InfoSkeleton />;
  if (error) return <ErrorState />;
  if (!data) return <EmptyState />;

  return (
    <aside className="lg:col-span-4 xl:col-span-3 order-2 lg:order-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-24 bg-[#141414]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl"
      >
        {/* پوستر فیلم */}
        <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-lg mb-6 border border-white/10">
          <img
            src={
              data?.poster_path
                ? `https://image.tmdb.org/t/p/original/${data?.poster_path}`
                : "/images/placeholder.jpg"
            }
            alt={data?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-yellow-400 border border-yellow-400/20">
            <FaStar /> {data?.vote_average.toFixed(1)}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4 text-center">
          Mvoie Detail
        </h3>

        <ul className="space-y-4 text-sm">
          <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
            <MdDateRange className="text-red-500 w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px]">Year</span>
              <span className="font-bold text-white">
                {type === "movie"
                  ? data?.release_date.substring(0, 4)
                  : data.first_air_date.substring(0, 4)}
              </span>
            </div>
          </li>
          <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
            <FaClock className="text-red-500 w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px]">Duration</span>
              <span className="font-bold text-white">
                {data?.runtime ? data.runtime : "45"} m
              </span>
            </div>
          </li>
          <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
            <BiMoviePlay className="text-red-500 w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px]">Genre</span>
              <div className="flex items-start gap-2">
                {data?.genres.map((genre, index) => (
                  <span key={genre.id} className="font-bold text-white">
                    {genre.name}
                    {index < data.genres.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
          </li>
        </ul>

        {/* کیفیت ها */}
        <div className="mt-6 pt-4 border-t border-white/5">
          <p className="text-xs text-gray-400 mb-3">Quality</p>
          <div className="flex flex-wrap gap-2">
            {["SD", "HD", "Full HD", "4K"].map((q) => (
              <span
                key={q}
                className="px-3 py-1 rounded-lg bg-gray-800/80 border border-white/5 text-[10px] font-bold text-gray-300 hover:border-red-500/50 transition-colors"
              >
                {q}
              </span>
            ))}
          </div>
        </div>

        {/* زیرنویس ها */}
        <div className="mt-4 pt-4 border-t border-white/5">
          <p className="text-xs text-gray-400 mb-3">Subtitle</p>
          <div className="flex flex-wrap gap-2">
            {["EN", "AR", "CH"].map((l) => (
              <span
                key={l}
                className="px-3 py-1 rounded-lg bg-gray-800/80 border border-white/5 text-[10px] font-bold text-gray-300"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </aside>
  );
};

export default PanelInfo;
