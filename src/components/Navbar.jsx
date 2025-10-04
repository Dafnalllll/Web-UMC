import React from "react";
import { useNavigate } from "react-router-dom";

const menu = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (id) => {
    if (window.location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // delay agar halaman sempat berpindah
    }
  };

  return (
    <nav className="bg-transparent text-white p-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => handleScrollToSection("home")}
          className="text-2xl font-bold hover:text-gray-300 transition-colors cursor-pointer"
        >
          UMC
        </button>
        <div className="space-x-6">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollToSection(item.id)}
              className="hover:text-gray-300 transition-colors font-medium cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
