import EmptyState from "../common/EmptyState";
import ErrorState from "../common/ErrorState";
import HeroSkeleton from "./skeleton/HeroSkeleton";

const DetailHero = ({ detail }) => {
  const { data, status, error } = detail;

  if (status === "loading") return <HeroSkeleton />;
  if (error) return <ErrorState />;
  if (!data) return <EmptyState />;

  return (
    <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      <img
        src={
          data?.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${data?.backdrop_path}`
            : "/images/placeholder.jpg"
        }
        alt={data?.name}
        className="w-full h-full object-cover"
      />
      {/* گرادینت‌های تاریک حرفه‌ای */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default DetailHero;
