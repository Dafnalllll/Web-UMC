import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="bg-transparent text-white p-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => handleNavigation("/")}
          className="text-2xl font-bold hover:text-gray-300 transition-colors cursor-pointer"
        >
          UMC
        </button>
        <div className="space-x-6">
          <button
            onClick={() => handleNavigation("/")}
            className="hover:text-gray-300 transition-colors font-medium cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/about")}
            className="hover:text-gray-300 transition-colors font-medium cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("/service")}
            className="hover:text-gray-300 transition-colors font-medium cursor-pointer"
          >
            Service
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="hover:text-gray-300 transition-colors font-medium cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
