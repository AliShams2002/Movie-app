import { motion } from "framer-motion";
import { FaPlay, FaPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Button from "../common/Button";
import { useMemo } from "react";
import { findDirector, findWriters } from "../../utils/crewHelpers";
import CastCard from "./CastCard";
import ErrorState from "../common/ErrorState";
import EmptyState from "../common/EmptyState";
import InfoSkeleton from "./skeleton/InfoSkeleton";

const DetailInfo = ({
  type,
  detail,
  credits,
  setisTrailerOpen,
  trailerKey,
}) => {
  const { data: movieDetail, status: movieStatus, error: movieError } = detail;
  const {
    data: movieCredits,
    status: creditsStatus,
    error: creditsError,
  } = credits;

  const director = useMemo(() => findDirector(movieCredits?.crew), [credits]);

  const writers = useMemo(() => findWriters(movieCredits?.crew), [credits]);

  if (movieStatus === "loading") return <InfoSkeleton />;
  if (movieError) return <ErrorState />;
  if (!movieDetail) return <EmptyState />;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-4 text-xs">
          <span className="bg-red-600/90 text-white px-3 py-1 rounded-full font-bold">
            ⭐ {movieDetail?.vote_average.toFixed(1)}
          </span>
          <span className="text-gray-400">
            {type === "movie"
              ? movieDetail?.release_date.substring(0, 4)
              : movieDetail.first_air_date.substring(0, 4)}
          </span>
          <span className="text-gray-400">|</span>
          <div>
            {movieDetail?.origin_country.map((c, index) => (
              <span key={index} className="text-gray-400">
                {c}
                {index < movieDetail.origin_country.length - 1 && "/"}
              </span>
            ))}
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
          {movieDetail?.title}
        </h1>
        <p className="text-gray-400 text-sm italic mb-2">
          {movieDetail?.original_title}
        </p>

        <p className="text-gray-300 max-w-4xl leading-7 text-md mb-6">
          {movieDetail?.overview}
        </p>

        {/* دکمه‌های اکشن */}
        <div className="flex flex-wrap gap-3">
          <Button
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
            icon={<FaPlay className="w-3 h-3" />}
            title="Trailer"
            action={setisTrailerOpen}
            disabled={!trailerKey}
          />
          <Button
            className="bg-gray-800/50 hover:bg-gray-700/80 border border-white/10 px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2"
            icon={<FaPlus className="w-3 h-3" />}
            title="Add to list"
            action={() => handelAddToFavorite(movieDetail?.id)}
          />
          <Button
            className="bg-gray-800/50 hover:bg-gray-700/80 border border-white/10 px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2"
            icon={<FiHeart className="w-4 h-4" />}
            title="Add to favorites"
            action={() => handelAddToWatchList(movieDetail?.id)}
          />
        </div>
      </motion.div>

      {/* --- درباره فیلم (دیتیل) --- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-[#141414]/50 border border-white/5 rounded-3xl p-6 md:p-8"
      >
        <h2 className="font-bold text-xl mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full"></span> Credits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-gray-500 text-xs font-medium tracking-wider">
              Director
            </p>
            {director ? <CastCard cast={director} /> : "_"}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="text-gray-500 text-xs font-medium tracking-wider">
              Author
            </p>
            <ul className="flex items-center gap-2">
              {writers.length
                ? writers?.map((writer, index) => (
                    <CastCard key={index} cast={writer} />
                  ))
                : "_"}
            </ul>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="text-gray-500 text-xs font-medium tracking-wider">
              Casts
            </p>
            <ul className="flex items-center gap-2">
              {movieCredits?.cast.slice(0, 4).map((cast, index) => (
                <CastCard key={index} cast={cast} />
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="text-gray-500 text-xs font-medium tracking-wider">
              Country
            </p>
            <div className="flex items-center">
              {movieDetail?.origin_country.map((c, index) => (
                <span key={index} className="font-bold text-white">
                  {c}
                  {index < movieDetail.origin_country.length - 1 && "/"}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default DetailInfo;
