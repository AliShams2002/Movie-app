import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-dark-900">
      <Navbar />
      <main className="flex-1">
        {/* Animating during page navigation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default MainLayout;
