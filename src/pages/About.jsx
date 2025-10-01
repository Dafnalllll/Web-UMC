import React from "react";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div className="bg-blue-500 w-full min-h-screen flex items-center justify-center">
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Tentang Kami</h1>
        <p className="text-xl text-white">Informasi tentang PortoUMC</p>
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-lg text-white leading-relaxed">
            PortoUMC adalah platform yang menyediakan informasi dan layanan
            terkait dengan berbagai kebutuhan akademik dan profesional.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
