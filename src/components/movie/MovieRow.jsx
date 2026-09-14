import MovieCard from "../common/MovieCard";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

const MovieRow = ({
  title,
  subtitle,
  icon,
  data,
  type,
  linkTo,
  containerVariants,
  itemVariants,
}) => {
  return (
    <section className="container mx-auto px-6 py-12 border-t border-white/5">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        icon={icon}
        linkTo={linkTo}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {data.status == "error" && (
          <div className="col-span-6 text-center text-red-500">
            <p className="text-lg font-semibold">{`Error: ${data.message}`}</p>
            <button
              className="bg-red-600 text-gray-100 px-2 py-1 rounded-md cursor-pointer"
              onClick={data.refetch}
            >
              Refetch
            </button>
          </div>
        )}

        {data.data.length ? (
          data.data.slice(0, 6).map((item) => (
            <MovieCard
              key={item.id}
              item={item}
              type={type}
              itemVariants={itemVariants} // *** کلید اصلی حل مشکل: پاس دادن واریانت به کارت ***
            />
          ))
        ) : (
          <div className="col-span-6 text-center text-gray-500">
            <p className="text-lg font-semibold">No data available</p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default MovieRow;
