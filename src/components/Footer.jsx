import React from "react";
import UMC from "../assets/LOGO UMC.png";

const teamMembers = [
  {
    name: "Rizki Dafa Naldi",
    role: "Project Manager",
    instagram: "daf_nal",
  },
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
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const InstagramIcon = () => (
  <svg
    className="inline-block mr-2"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: "middle" }}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full fixed bottom-0 left-0 z-40">
      {/* Logo UMC independen di pojok kiri bawah */}
      <div className="absolute left-[5rem] bottom-[17rem] z-50">
        <img src={UMC} alt="UMC Logo" className="w-14 h-14 object-contain" />
      </div>
      {/* Konten utama footer */}
      <div className="container mx-auto flex flex-col md:flex-row md:justify-center md:items-start items-center">
        {/* Quick Links - Left */}
        <div className="mb-8 md:mb-0 md:mr-16 flex flex-col items-center md:items-start">
          <div className="font-extrabold font-[Poppins] mb-2 text-center md:text-left text-lg">
            Quick Links
          </div>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link, idx) => (
              <li key={idx} className="text-center md:text-left">
                <a
                  href={link.href}
                  className="font-bold text-lg hover:underline text-white transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Website Team - Center */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-0 md:mx-16">
          <div className="font-extrabold text-xl mb-4 tracking-wide font-[Poppins] text-center">
            Website
          </div>
          <ul className="flex flex-col gap-2 mb-3">
            {teamMembers.map((member, idx) => (
              <li key={idx} className="text-center">
                <div className="font-bold text-lg mb-1">{member.role}</div>
                <div className="flex items-center justify-center">
                  <InstagramIcon />
                  <a
                    href={`https://instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-base"
                  >
                    {member.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="w-[100] border-t border-white opacity-30 my-4" />
      <div className="text-xs text-white mt-2 opacity-70 text-center">
        &copy; {new Date().getFullYear()} UMC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
