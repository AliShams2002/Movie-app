import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import useModuleStore from "../store/moduleStore";
import SearchModule from "../components/SearchModule";

const Layout = ({ children }) => {
  const { isOpen, open, close } = useModuleStore();

  return (
    <div className="relative">
      <Navbar open={open} />
      {isOpen && <SearchModule close={close} />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
