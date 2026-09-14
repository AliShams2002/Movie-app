import React from "react";
import { BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../hooks/ui/useScrollPosition";
import useAuthStore from "../../store/authStore";
import NavItem from "../common/NavItem";

const Navbar = () => {
  const isScrolled = useScrollPosition(50);
  const { user, loading } = useAuthStore();

  // const scrollToSection = (sectionId) => {
  //   setActiveHeaderBtn(sectionId);
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  const navClass = isScrolled
    ? "bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5 backdrop-blur-md shadow-lg text-gray-200"
    : "bg-gradient-to-b from-black/80 to-transparent";

  return (
    <nav className={`fixed top-0 z-40 w-full ${navClass}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-bold text-red-500 tracking-wider drop-shadow-md"
        >
          CINEMA
        </a>
        <div className="flex items-center gap-8 text-sm font-medium">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <NavItem type="header" to="/" title="HOME" />
            <NavItem type="header" to="/search" title="MOVIES" />
            <NavItem type="header" to="/search" title="TV" />
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <Link to="/account" className="cursor-pointer">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover rounded-full"
              />
            </Link>
          ) : (
            <Link to="/login" className="cursor-pointer">
              <BiUser className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
