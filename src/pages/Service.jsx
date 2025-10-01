import React from "react";
import Navbar from "../components/Navbar";
const Services = () => {
  return (
    <div className="bg-purple-500 w-full min-h-screen flex items-center justify-center">
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Layanan Kami</h1>
        <p className="text-xl text-white mb-8">
          Berbagai layanan yang kami tawarkan
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              Konsultasi
            </h3>
            <p className="text-gray-600">Layanan konsultasi profesional</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              Pelatihan
            </h3>
            <p className="text-gray-600">Program pelatihan berkualitas</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-purple-600 mb-2">Support</h3>
            <p className="text-gray-600">Dukungan teknis 24/7</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
