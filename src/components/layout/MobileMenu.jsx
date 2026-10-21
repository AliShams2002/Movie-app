import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../../utils/constants";
import Button from "../common/Button";

const MobileMenu = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Hamburger button */}
      <Button
        type="button"
        action={() => setIsMenuOpen(true)}
        className="md:hidden z-50 p-2.5 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-red-600/20 hover:border-red-500/50 transition-all"
        ariaLabel="Open menu"
        icon={<Menu className="w-4 h-4" />}
      />

      {/* Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Blurred background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="w-screen fixed inset-0 bg-black/70 backdrop-blur-md z-[90] md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }} // Enters from the right
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 flex flex-col gap-1 h-screen w-[85%] max-w-sm bg-[#0a0a0a] border-l border-white/10 z-[100] md:hidden overflow-y-auto"
            >
              {/* --- Header Menu --- */}
              <div className="flex items-center justify-between p-5 border-b border-white/5">
                <Button
                  type="link"
                  action="/"
                  className="flex items-center gap-2 text-2xl font-bold text-red-500 tracking-wider"
                >
                  CINEMA
                </Button>
                <Button
                  type="button"
                  action={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-red-600/20 border border-white/10 text-gray-400 hover:text-red-400 transition-all"
                  ariaLabel="Close menu"
                  icon={<X className="w-5 h-5" />}
                />
              </div>

              {/* --- Menu Items --- */}
              <nav className="p-5 space-y-1">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-3 px-2">
                  Menu
                </p>

                {NAV_ITEMS.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setActiveTab(item.label)}
                        className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                          activeTab === item.label
                            ? "bg-red-600/10 border border-red-500/30 text-red-400"
                            : "text-gray-300 hover:bg-white/5 hover:text-white border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`${activeTab === item.title ? "text-red-500" : "text-gray-500 group-hover:text-red-400"} transition-colors`}
                          >
                            {item.icon}
                          </span>
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </div>
                        {activeTab === item.title && (
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* --- Footer Menu (User Profile) --- */}
              <div className="mt-auto p-5 border-t border-white/5 bg-[#0a0a0a]">
                {user ? (
                  <Button
                    type="link"
                    action="/account"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <img
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-sm font-bold shadow-lg shadow-red-600/20"
                      src={user.avatar}
                      alt=""
                    />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white">
                        {user.username}
                      </p>
                      <p className="text-[10px] text-gray-500">View Profile</p>
                    </div>
                    <User className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" />
                  </Button>
                ) : (
                  <Button
                    type="link"
                    action="/login"
                    className="flex items-center justify-center w-full bg-red-600 group-hover:text-red-400 transition-colors text-gray-300 px-4 py-3.5 rounded-xl"
                  >
                    Login/Register
                  </Button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
