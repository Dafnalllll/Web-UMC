import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const menu = [
  { label: "Beranda", id: "home" },
  { label: "Tentang", id: "about" },
  { label: "Layanan", id: "service" },
  { label: "Kontak", id: "contact" },
  { label: "Galeri", id: "gallery" },
];

const TentangDropdown = [
  { label: "Visi & Misi", id: "vision-mission" },
  { label: "Histori", id: "journey" },
];

const ChevronDown = ({ open }) => (
  <svg
    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Hamburger = ({ open, onClick }) => (
  <button
    className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
    onClick={onClick}
    aria-label="Toggle menu"
    type="button"
  >
    <span
      className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${
        open ? "rotate-45 translate-y-2" : ""
      }`}
    />
    <span
      className={`block h-1 w-6 bg-white rounded my-1 transition-all duration-300 ${
        open ? "opacity-0" : ""
      }`}
    />
    <span
      className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${
        open ? "-rotate-45 -translate-y-2" : ""
      }`}
    />
  </button>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (id) => {
    setAboutOpen(false);
    setMenuOpen(false);
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
      }, 300);
    }
  };

  return (
    <nav className="bg-transparent text-white py-4 px-4 md:px-10 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="w-full flex justify-between items-center">
        <button
          onClick={() => handleScrollToSection("home")}
          className="text-2xl font-bold hover:text-gray-300 transition-colors cursor-pointer"
        >
          UMC
        </button>
        <Hamburger open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
        {/* Desktop menu */}
        <div className="space-x-6 md:flex items-center hidden">
          {menu.map((item) =>
            item.label === "Tentang" ? (
              <span key={item.id} className="relative inline-block">
                <button
                  onClick={() => handleScrollToSection(item.id)}
                  className="hover:text-gray-300 transition-colors font-medium cursor-pointer flex items-center"
                  type="button"
                >
                  {item.label}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setAboutOpen((open) => !open);
                    }}
                    className="cursor-pointer"
                  >
                    <ChevronDown open={aboutOpen} />
                  </span>
                </button>
                <div
                  className={`absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-50 transition-all duration-300 overflow-hidden ${
                    aboutOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{ minWidth: "10rem" }}
                >
                  {TentangDropdown.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleScrollToSection(sub.id)}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </span>
            ) : (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className="hover:text-gray-300 transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </button>
            )
          )}
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 w-full overflow-x-hidden bg-black bg-opacity-95 md:hidden shadow-lg transition-all duration-300">
            <div className="flex flex-col py-4 px-6 space-y-2">
              {menu.map((item) =>
                item.label === "Tentang" ? (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => setAboutOpen((open) => !open)}
                      className="w-full flex items-center justify-between py-2 font-medium"
                    >
                      <span>Tentang</span>
                      <ChevronDown open={aboutOpen} />
                    </button>
                    {aboutOpen && (
                      <div className="pl-4">
                        {TentangDropdown.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleScrollToSection(sub.id)}
                            className="block w-full text-left py-2 text-gray-200 hover:text-white"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleScrollToSection(item.id)}
                    className="w-full text-left py-2 font-medium text-gray-200 hover:text-white"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
