import React from "react";
import UMC from "../assets/LOGO UMC.png";
import { useNavigate } from "react-router-dom";
import Instagram from "../assets/sosmed/instagram.png";
import Tiktok from "../assets/sosmed/tiktok.png";
import Youtube from "../assets/sosmed/youtube.png";

const teamMembers = [
  { name: "Rizki Dafa Naldi", role: "Project Manager", instagram: "daf_nal" },
  {
    name: "Dhyva Aulia Hendri",
    role: "UI/UX Designer",
    instagram: "dhyvaa64_",
  },
  {
    name: "Hafid Fitrah Ramadhan",
    role: "Front-End Developer",
    instagram: "hafidfitrahramadhan",
  },
];

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Kontak", href: "/kontak" },
];

const socialMedias = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/bemkmftiunand/",
  },
  {
    name: "TikTok",
    icon: Tiktok,
    url: "https://www.tiktok.com/@bemkmftiunand",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@bemkmftiunand",
  },
];

const umcPrograms = [
  { name: "UMC Project" },
  { name: "UMC Academy" },
  { name: "UMC Berbagi" },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-black text-white pt-10 pb-4 mt-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo UMC */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <img src={UMC} alt="Logo UMC" className="w-[60px] h-[60px]" />
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      // Mapping "/" ke "home"
                      const sectionId =
                        link.href === "/" ? "home" : link.href.replace("/", "");
                      if (window.location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                          const section = document.getElementById(sectionId);
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 300);
                      } else {
                        const section = document.getElementById(sectionId);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className="hover:text-white bg-transparent text-inherit text-left w-full cursor-pointer hover:underline font-bold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Website Team */}
          <div>
            <h3 className="font-bold text-xl mb-2">Website</h3>
            <ul className="space-y-2 text-gray-300">
              {teamMembers.map((member) => (
                <li key={member.name}>
                  <div className="font-bold text-lg text-white">
                    {member.role}
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={Instagram}
                      alt="Instagram"
                      className="w-5 h-5 inline-block"
                    />
                    <a
                      href={`https://instagram.com/${member.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {member.name}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* UMC Program */}
          <div className="flex flex-col items-start text-left md:items-center md:text-center mb-4 md:mb-0">
            <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-2">
              Program
            </h3>
            <ul className="space-y-2 md:space-y-4 text-gray-300 text-base md:text-lg">
              {umcPrograms.map((program) => (
                <li key={program.name} className="font-semibold">
                  {program.name}
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h3 className="font-bold text-xl mb-2">Social Media</h3>
            <div className="flex gap-4">
              {socialMedias.map((sosmed) => (
                <a
                  key={sosmed.name}
                  href={sosmed.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={sosmed.name}
                >
                  <img
                    src={sosmed.icon}
                    alt={sosmed.name}
                    className="w-7 h-7 hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Lokasi/Alamat */}
        <div className="text-center mt-8">
          Universitas Andalas, Limau Manis, Sumatera Barat, Indonesia
        </div>
        <hr className="my-8 border-gray-500" />
        {/* Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-3 px-4">
          <p className="text-sm text-white whitespace-nowrap">
            © {new Date().getFullYear()} UMC. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
