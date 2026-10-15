import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-4 z-50 bg-gradient-to-br from-red-600 to-red-700 hover:bg-blue-700 text-white py-3 px-4 rounded-xl shadow-lg transition"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
