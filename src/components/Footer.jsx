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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Contact", href: "/contact" },
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

// Array program UMC
const umcPrograms = [
  { name: "UMC Project" },
  { name: "UMC Academy" },
  { name: "UMC Berbagi" },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-black text-white pt-10 pb-4 mt-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Logo UMC */}
          <div
            className="flex-1 flex items-center gap-4 mb-[10rem]"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <img src={UMC} alt="Logo UMC" className="w-[60px] h-[60px]" />
          </div>
          {/* Quick Links */}
          <div className="flex-1" data-aos="fade-right" data-aos-duration="800">
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="hover:text-white bg-transparent text-inherit text-left w-full cursor-pointer hover:underline font-bold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Website Team */}
          <div className="flex-1" data-aos="fade-left" data-aos-duration="800">
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
          <div className="flex-1 text-center" data-aos="fade-left" data-aos-duration="600">
            <h3 className="font-bold text-xl mb-2">Program</h3>
            <ul className="space-y-4 text-gray-300 text-start ml-[4.1rem]">
              {umcPrograms.map((program) => (
                <li key={program.name} className="font-semibold">
                  {program.name}
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media */}
          <div
            className="flex-1 flex flex-col items-end justify-start gap-3"
            data-aos="fade-left"
            data-aos-duration="600"
          >
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
