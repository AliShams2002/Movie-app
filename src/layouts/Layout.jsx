import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
