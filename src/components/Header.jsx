import React from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="absolute w-full z-50 flex items-center justify-between px-10 py-6">
      <div className="w-9 h-9 bg-red-600 rounded-full"></div>
      <nav className="hidden md:flex items-center justify-center gap-6 w-full text-sm text-gray-200">
        <a href="#" className="text-red-500 font-bold">
          خانه
        </a>
        <a href="#best" className="hover:text-white">
          دسته بندی ها
        </a>
        <a href="#" className="hover:text-white">
          سریال‌ها
        </a>
        <a href="#" className="hover:text-white">
          برترین ها
        </a>
      </nav>

      <div className="flex items-center justify-center gap-1 text-gray-200">
        <button className="p-2 hover:bg-black/30 rounded-md">
          <BiSearch size={20} />
        </button>
        <button className="p-2 hover:bg-black/30 rounded-md">
          <IoNotifications size={20} />
        </button>
        <Link to="/auth" className="flex items-center">
          <button className="p-2 hover:bg-black/30 rounded-md">
            <BiUser size={20} />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
