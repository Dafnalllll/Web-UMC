import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <div className="bg-black w-full min-h-screen flex items-center justify-center">
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to PortoUMC
        </h1>
        <p className="text-xl text-white">Halaman Utama</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
