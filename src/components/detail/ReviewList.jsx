import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import ErrorState from "../common/ErrorState";
import EmptyState from "../common/EmptyState";
import ReviewSkeleton from "./skeleton/ReviewSkeleton";

const ReviewList = ({ detail = null }) => {
  const { data, status, error } = detail;

  if (status === "loading") return <ReviewSkeleton/>
  if (error) return <ErrorState />;
  if (!data) return <EmptyState />;

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-[#141414]/50 border border-white/5 rounded-3xl p-6 md:p-8"
      >
        <h2 className="font-bold text-xl mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-500 rounded-full"></span> Reviews
        </h2>

        <div className="space-y-6 text-center">
          {data?.results ? (
            <ReviewCard reviews={data.results} />
          ) : (
            <span className="text-gray-400 text-sm leading-relaxed">
              No comments have been posted!
            </span>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default ReviewList;
