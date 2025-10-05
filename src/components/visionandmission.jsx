import React from "react";

const vision =
  "Menjadi organisasi mahasiswa yang inspiratif, inovatif, dan berkontribusi nyata bagi kampus dan masyarakat.";

const missions = [
  "Meningkatkan kualitas sumber daya mahasiswa melalui berbagai program pengembangan.",
  "Mewujudkan lingkungan kampus yang aktif, kreatif, dan kolaboratif.",
  "Menjadi pelopor kegiatan sosial dan pengabdian masyarakat.",
];

const VisionAndMission = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-green-900 tracking-wide drop-shadow-lg">
          Vision & Mission
        </h2>
        {/* Vision */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Vision</h3>
            <p className="text-lg text-gray-700 bg-white rounded-xl p-4 shadow hover:shadow-xl transition-all duration-300">
              {vision}
            </p>
          </div>
        </div>
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 19V6M5 12l7-7 7 7" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-yellow-700 mb-2">Mission</h3>
            <ul className="space-y-4">
              {missions.map((mission, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 shadow hover:shadow-xl transition-all duration-300"
                >
                  <span className="mt-1 text-green-600 font-bold">
                    {idx + 1}.
                  </span>
                  <span className="text-gray-700">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;
