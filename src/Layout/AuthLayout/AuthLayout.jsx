import React from "react";
import { Outlet } from "react-router"; // ✅ NOT react-router-dom
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div
      className="
        min-h-screen flex justify-center items-center
        bg-[#f5f5f5] text-gray-900
        dark:bg-[#1f1f1f] dark:text-gray-100
        transition-all duration-300
      "
    >
      <div
        className="
          w-full max-w-md p-8 rounded-2xl shadow-lg
          bg-white/90 backdrop-blur
          border border-gray-200
          dark:bg-[#2a2a2a]/80 dark:border-gray-700
          transition-all duration-300
        "
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
