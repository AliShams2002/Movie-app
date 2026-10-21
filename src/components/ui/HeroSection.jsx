import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import { HeroSlider } from "../common/Swiper";
import { AnimatePresence } from "framer-motion";
import { Clock, Film, Info, Play } from "lucide-react";
import { handelMovieGenre } from "../../utils/genreHelper";
import Button from "../common/Button";
import { useMovieVideos } from "../../hooks/data/useMovieVideos";
import toast from "react-hot-toast";
import { useState } from "react";
import Modal from "../common/Modal";
import { getTmdbImage } from "../../utils/tmdbImage";

const HeroSection = ({ data }) => {
  const [trailerDetail, setTrailerDetail] = useState({
    trailerName: "",
    trailerKey: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchTrailer, isLoading } = useMovieVideos();

  // Check and handle key & modal
  const handlePlayClick = async (item) => {
    const trailer = await fetchTrailer(item.id, "movie");
    if (trailer) {
      setTrailerDetail({ trailerName: item.title, trailerKey: trailer.key });
      setIsModalOpen(true);
    } else {
      toast.error("No trailer available for this movie");
    }
  };

  return (
    <div className="relative h-[85vh] md:h-[90vh] lg:h-screen w-full overflow-hidden">
      <HeroSlider>
        {data.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            {({ isActive }) => (
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={`${item.backdrop_path ? getTmdbImage(item.backdrop_path, "w342") : "/images/Auth_Wallpaper.jpg"} `}
                    srcSet={
                      item.backdrop_path
                        ? [
                            `${getTmdbImage(item.backdrop_path, "w780")} 780w`,
                            `${getTmdbImage(item.backdrop_path, "w1280")} 1280w`,
                          ].join(", ")
                        : undefined
                    }
                    sizes="100vw"
                    alt={item.title || item.name || "Featured movie"}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/Auth_Wallpaper.jpg";
                    }}
                  />
                  {/* Dark gradients*/}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent"></div>
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Textual content */}
                <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-20 md:pb-28">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="max-w-2xl"
                      >
                        <div className="flex items-center gap-3 text-sm text-gray-300 mb-4">
                          <span className="bg-red-600/90 px-3 py-1 rounded-full text-white text-[10px] font-bold tracking-wider uppercase">
                            NEW
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />{" "}
                            {item.release_date?.substring(0, 4)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Film className="w-4 h-4" />{" "}
                            {handelMovieGenre(item.genre_ids)}
                          </span>
                        </div>
                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-xl">
                          {item.title}
                        </h1>
                        {/* Subtitle */}
                        <p className="text-md text-gray-300 mb-8 leading-relaxed line-clamp-3 max-w-xl drop-shadow-lg">
                          {item.overview}
                        </p>

                        <div className="flex flex-wrap gap-4">
                          {/* Play btn */}
                          <Button
                            type="button"
                            action={() => handlePlayClick(item)}
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-all px-8 py-3 rounded-full font-bold text-md shadow-lg shadow-red-600/30"
                            icon={<Play className="w-4 h-4" />}
                            title="play"
                          />
                          {/* Info btn */}
                          <Button
                            type="link"
                            action={`/movie/${item.id}`}
                            className="flex items-center gap-2 bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-md transition-all px-8 py-3 rounded-full font-bold text-md border border-white/10"
                          >
                            <Info className="w-4 h-4" /> Info
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </HeroSlider>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoKey={trailerDetail.trailerKey}
        title={trailerDetail.trailerName}
      />
    </div>
  );
};

export default HeroSection;
