import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  Search,
  Clapperboard,
  Film,
  AlertTriangle,
  Tv,
  Sparkles,
} from "lucide-react";

const NotFound = () => {
  const optinalBtn = [
    {
      title: "Popular movies",
      icon: <Clapperboard className="w-3 h-3" />,
      linkTo: "/search?list=popular&type=movie",
    },
    {
      title: "Top TV Series",
      icon: <Tv className="w-3 h-3" />,
      linkTo: "/search?list=top_rated&type=tv",
    },
    {
      title: "The Best Animations",
      icon: <Sparkles className="w-3 h-3 text-cyan-400" />,
      linkTo: "/search?genre=16&type=movie&sort=popularity.desc",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex items-center justify-center p-6 relative overflow-hidden">
      {/* --- پس‌زمینه با المان‌های سینمایی --- */}
      <div className="absolute inset-0 z-0 opacity-5">
        {/* نوارهای فیلم (Film Strips) تزئینی */}
        <div className="absolute top-0 left-0 w-full h-8 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><rect x=%220%22 y=%220%22 width=%2240%22 height=%2240%22 fill=%22none%22/><rect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 fill=%22white%22/><rect x=%2230%22 y=%220%22 width=%2210%22 height=%2210%22 fill=%22white%22/><rect x=%220%22 y=%2230%22 width=%2210%22 height=%2210%22 fill=%22white%22/><rect x=%2230%22 y=%2230%22 width=%2210%22 height=%2210%22 fill=%22white%22/></svg>')] bg-repeat"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><rect x=%220%22 y=%220%22 width=%2240%22 height=%2240%22 fill=%22none%22/><rect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 fill=%22white%22/><rect x=%2230%22 y=%220%22 width=%2210%22 height=%2210%22 fill=%22white%22/><rect x=%220%22 y=%2230%22 width=%2210%22 height=%2210%22 fill=%22white%22/><rect x=%2230%22 y=%2230%22 width=%2210%22 height=%2210%22 fill=%22white%22/></svg>')] bg-repeat"></div>

        {/* گرادینت مرکزی */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      </div>

      {/* --- کارت اصلی ۴۰۴ --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-lg w-full text-center"
      >
        {/* آیکون بزرگ با انیمیشن شناور */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center backdrop-blur-xl">
              <Clapperboard className="w-16 h-16 md:w-20 md:h-20 text-red-500" />
            </div>
            {/* هاله نورانی */}
            <div className="absolute inset-0 rounded-full bg-red-600/20 blur-3xl -z-10"></div>
          </div>
        </motion.div>

        {/* کد ۴۰۴ */}
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800 mb-4 tracking-tighter">
          404
        </h1>

        {/* تیتر */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          The scene you were looking for was not found!
        </h2>

        {/* توضیحات */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
          It seems this film or page has been removed from our archive, its
          address has changed, or it never existed. You can return to the
          homepage or perform a search.
        </p>

        {/* دکمه‌های اکشن */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition-all px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
            >
              <Home className="w-4 h-4" /> Go to Home
            </motion.button>
          </Link>

          <Link to="/search" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all px-8 py-3 rounded-full font-bold text-sm"
            >
              <Search className="w-4 h-4" /> Go to Search
            </motion.button>
          </Link>
        </div>

        {/* پیشنهادات (Optional) */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-500 mb-4">You might like these:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {optinalBtn.map((opt, i) => (
              <motion.div key={i} whileHover={{ y: -3 }}>
                <Link
                  to={opt.linkTo}
                  className="flex items-center gap-2 bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 rounded-full px-4 py-2 text-xs text-gray-300 hover:text-red-400 transition-all duration-200"
                >
                  {opt.icon}
                  {opt.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-[10px] text-gray-600 mt-12">
          © {new Date().getFullYear()} Cinema Project. تمامی حقوق محفوظ است.
        </p>
      </motion.div>
    </div>
  );
};

export default NotFound;
