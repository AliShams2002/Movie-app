import React from "react";
import { BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({
  profile,
  menuModuleOpen,
  isScrolled,
  headerBtnValue,
  setActiveHeaderBtn,
  activeHeaderBtn,
}) => {
  const scrollToSection = (sectionId) => {
    setActiveHeaderBtn(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-2xl font-bold text-red-500 tracking-wider drop-shadow-md">
          CINEMA
        </span>
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-red-400 transition-colors hidden md:block"
          >
            خانه
          </Link>
          <Link
            to="/movies"
            className="hover:text-red-400 transition-colors hidden md:block"
          >
            فیلم‌ها
          </Link>
          <Link
            to="/series"
            className="hover:text-red-400 transition-colors hidden md:block"
          >
            سریال‌ها
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* لینک مستقیم به صفحه جستجوی پیشرفته */}

          <Link to="/profile" className="cursor-pointer">
            {profile && profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <BiUser className="w-4 h-4" />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
