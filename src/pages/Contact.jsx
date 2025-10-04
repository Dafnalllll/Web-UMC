import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-green-500 to-green-700 w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
            Kontak Kami
          </h1>
          <p className="text-lg text-green-100 mb-8">
            Hubungi kami untuk informasi lebih lanjut
          </p>
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-green-200">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="bg-green-100 p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </span>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-green-700">
                    Email
                  </h3>
                  <a
                    href="mailto:info@portoumc.com"
                    className="text-green-900 hover:underline"
                  >
                    info@portoumc.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-green-100 p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.7 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.33 2.01.57 3.06.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-green-700">
                    Telepon
                  </h3>
                  <a
                    href="tel:+62123456789"
                    className="text-green-900 hover:underline"
                  >
                    +62 123 456 789
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-green-100 p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                </span>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-green-700">
                    Alamat
                  </h3>
                  <p className="text-green-900">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
