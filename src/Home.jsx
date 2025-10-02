import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <div className="bg-black w-full min-h-screen flex items-center justify-center">
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to UMC</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
