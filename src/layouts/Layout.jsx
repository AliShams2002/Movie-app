import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import useModuleStore from "../store/moduleStore";
import SearchModule from "../components/common/SearchModule";
import useAuthStore from "../store/authStore";
import MobileMenu from "../components/common/MobileMenu";

const Layout = ({ children }) => {
  const { profile } = useAuthStore();
  const {
    serchModuleIsOpen,
    serchModuleOpen,
    serchModuClose,
    menuModuleIsOpen,
    menuModuleOpen,
    menuModuleClose,
  } = useModuleStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHeaderBtn, setActiveHeaderBtn] = useState("home");
  const pathname = location.pathname;

  const headerBtnValue = [
    { id: 1, name: "home", value: "خانه" },
    { id: 2, name: "series", value: "سریال" },
    { id: 3, name: "popular", value: "فیلم های محبوب" },
    { id: 4, name: "now", value: "فیلم های جدید" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // اگر بیشتر از 50 پیکسل اسکرول کرده باشیم
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // اضافه کردن event listener
    window.addEventListener("scroll", handleScroll);

    // پاک کردن event listener هنگام unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white font-sans relative overflow-x-hidden"
      dir="rtl"
    >
      {/* {pathname !== "/" && (
      )} */}
      <Navbar
        profile={profile}
        menuModuleOpen={menuModuleOpen}
        isScrolled={isScrolled}
        headerBtnValue={headerBtnValue}
        setActiveHeaderBtn={setActiveHeaderBtn}
        activeHeaderBtn={activeHeaderBtn}
      />
      {serchModuleIsOpen && <SearchModule serchModuClose={serchModuClose} />}
      <MobileMenu
        menuModuleIsOpen={menuModuleIsOpen}
        menuModuleClose={menuModuleClose}
        headerBtnValue={headerBtnValue}
        setActiveHeaderBtn={setActiveHeaderBtn}
        activeHeaderBtn={activeHeaderBtn}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
