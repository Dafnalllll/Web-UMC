import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

const Home = () => {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Section Home */}
        <section id="home" className="w-full">
          <div className="text-center mt-24 mb-32 min-h-[400px] flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              Welcome to UMC
            </h1>
            <p className="text-lg text-gray-300">
              Selamat datang di website resmi UMC!
            </p>
          </div>
        </section>
      </main>
      {/* Section About */}
      <section id="about">
        <About />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
