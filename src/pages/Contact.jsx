import React from "react";

const Contact = () => {
  return (
    <div className="bg-green-500 w-full min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Kontak Kami</h1>
        <p className="text-xl text-white mb-8">
          Hubungi kami untuk informasi lebih lanjut
        </p>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">info@portoumc.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Telepon</h3>
              <p className="text-gray-600">+62 123 456 789</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Alamat</h3>
              <p className="text-gray-600">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
