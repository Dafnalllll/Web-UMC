import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          Maaf, halaman yang Anda cari tidak ditemukan.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
