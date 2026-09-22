import MovieCard from "../movie/MovieCard";
import EmptyState from "../common/EmptyState";
import { MovieSlider } from "../common/Swiper";
import { SwiperSlide } from "swiper/react";
import Spinner from "../common/Spinner";
import ErrorState from "../common/ErrorState";

const SimilarRow = ({ type, detail, itemVariants }) => {
  const { data, status, error } = detail;

  if (status === "loading") return <Spinner />;
  if (error) return <ErrorState />;
  if (!data) return <EmptyState />;

  return (
    <div className="w-full border-t border-white/5 pt-12 pb-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Similar Movies
          </h2>
        </div>

        {data?.results ? (
          <MovieSlider slidesPerViewPc={6}>
            {data.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard
                  movie={movie}
                  type={type}
                  itemVariants={itemVariants}
                />
              </SwiperSlide>
            ))}
          </MovieSlider>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default SimilarRow;
