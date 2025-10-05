import React from "react";
import UMC from "../assets/LOGO UMC.png";

const images = [UMC, UMC, UMC, UMC, UMC, UMC];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-white py-12 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-8 tracking-wide drop-shadow-lg">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-black to-white border border-white cursor-pointer"
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-contain bg-black p-6 group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay info saat hover */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">
                Logo UMC #{idx + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
