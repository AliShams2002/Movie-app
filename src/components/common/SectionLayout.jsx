import { ChevronRight } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const SectionLayout = ({
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
      

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // وقتی ۱۰٪ از بخش دیده شد، انیمیشن شروع شود
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {/* {data.map((item) => ( */}
        {data?.slice(0, 6).map((item) => (
          <MovieCard
            key={item.id}
            item={item}
            type={type}
            itemVariants={itemVariants} // *** کلید اصلی حل مشکل: پاس دادن واریانت به کارت ***
          />
        ))}
      </motion.div>
    </section>
  );
};

export default SectionLayout;
