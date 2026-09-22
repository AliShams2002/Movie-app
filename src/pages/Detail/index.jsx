import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { addToFavorite, addToWatchList } from "../../services/userService";
import DetailHero from "../../components/detail/DetailHero";
import PanelInfo from "../../components/detail/PanelInfo";
import DetailInfo from "../../components/detail/DetailInfo";
import ReviewList from "../../components/detail/ReviewList";
import SimilarRow from "../../components/detail/SimilarRow";
import Modal from "../../components/common/Modal";
import { useMovieDetail } from "../../hooks/data/useMovieDetail";
import EpisodesSection from "../../components/detail/EpisodesSection";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Detail = ({ type }) => {
  const { user } = useAuthStore();
  const params = useParams();
  const [isTrailerOpen, setisTrailerOpen] = useState(false);

  const { detail, credits, videos, similar, reviews, refetch, trailer } =
    useMovieDetail({ type, id: params.id });

  const handelAddToFavorite = async (movieId) => {
    if (user) await addToFavorite(user.uid, movieId);
  };
  const handelAddToWatchList = async (movieId) => {
    if (user) await addToWatchList(user.uid, movieId);
  };

  const trailerKey = useMemo(() => {
    return (
      videos.data?.results?.find((video) => video.type === "Trailer")?.key ||
      null
    );
  }, [videos.data]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative pb-2">
      {/* Hero Section */}
      <DetailHero detail={detail} />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 -mt-32 md:-mt-40 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Information Panel */}
        <PanelInfo type={type} detail={detail} />

        {/* Main Content */}
        <main className="lg:col-span-8 xl:col-span-9 space-y-8 order-1 lg:order-1">
          <DetailInfo
            type={type}
            detail={detail}
            credits={credits}
            setisTrailerOpen={() => setisTrailerOpen(true)}
            trailerKey={trailerKey}
          />

          {/* Episodes Section */}
          {type === "tv" && <EpisodesSection detail={detail.data} />}

          {/* --- Reviews --- */}
          <ReviewList detail={reviews} />
        </main>
      </div>

      {/* Similar Movies */}
      <SimilarRow type={type} detail={similar} itemVariants={itemVariants} />

      {/* Trailer Modal */}
      <Modal
        isOpen={isTrailerOpen}
        onClose={() => setisTrailerOpen(false)}
        videoKey={trailerKey}
        title="Interstellar"
      />
    </div>
  );
};

export default Detail;
