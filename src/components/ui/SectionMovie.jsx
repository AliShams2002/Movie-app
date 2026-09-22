import { motion } from "framer-motion";
import MovieListSkeleton from "../common/SceletonRow";
import ErrorState from "../common/ErrorState";
import EmptyState from "../common/EmptyState";
import MovieCard from "../movie/MovieCard";

const SectionMovie = ({
  initialData,
  type,
  itemVariants,
  containerVariants,
}) => {
  const { data, error, refetch, status } = initialData;

  if (status === "loading") return <MovieListSkeleton />;
  if (error) return <ErrorState errorMessage={error} refetch={refetch} />;
  if (!data.length) return <EmptyState />;

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {data.slice(0, 6).map((item) => (
          <MovieCard
            key={item.id}
            movie={item}
            type={type}
            itemVariants={itemVariants}
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionMovie;
