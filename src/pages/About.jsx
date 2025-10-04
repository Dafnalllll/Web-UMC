import React from "react";

const About = () => {
  return (
    <div className=" bg-red-500 w-full min-h-screen flex items-center justify-center">
        <div className=" p-8 max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Tentang Kami</h1>
        <p className="text-lg text-white mb-4">Informasi tentang PortoUMC</p>
        <p className="text-base text-white leading-relaxed">
          PortoUMC adalah platform yang menyediakan informasi dan layanan
          terkait dengan berbagai kebutuhan akademik dan profesional.
        </p>
      </div>
    </div>
  );
};

export default About;
