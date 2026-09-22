import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

const Modal = ({ isOpen, onClose, videoKey, title }) => {
  // --- ۱. قفل کردن اسکرول صفحه هنگام باز بودن مودال ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // پاکسازی هنگام unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // --- ۲. بستن با کلید Escape ---
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // اگر videoKey وجود نداشت، چیزی رندر نکن
  if (!videoKey) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* --- پس‌زمینه تار (Backdrop) --- */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose} // بستن با کلیک روی پس‌زمینه
          />

          {/* --- کارت مودال (ویدیو) --- */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-h-[600px] max-w-5xl bg-[#0f0f0f] rounded-3xl overflow-hidden shadow-2xl shadow-red-600/20 border border-white/10 z-10"
          >
            {/* --- هدر مودال --- */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-600/10 rounded-xl border border-red-500/20">
                  <Play className="w-4 h-4 text-red-500 fill-current" />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base text-white line-clamp-1">
                    {title}
                  </h3>
                  <p className="text-[10px] text-gray-500">Official Trailer</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/30 text-gray-400 hover:text-red-400 transition-all duration-200"
                title="close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* --- پخش‌کننده ویدیو (Embed YouTube) --- */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                title={`${title} - Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
