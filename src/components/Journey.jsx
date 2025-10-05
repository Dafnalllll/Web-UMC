import React from "react";

const milestones = [
  {
    year: "2021",
    title: "UMC Berdiri",
    desc: "Unit Mahasiswa Cemerlang resmi didirikan di kampus.",
    color: "bg-green-700",
  },
  {
    year: "2022",
    title: "UMC Project",
    desc: "Meluncurkan program UMC Project untuk pengembangan karya mahasiswa.",
    color: "bg-blue-700",
  },
  {
    year: "2023",
    title: "UMC Academy",
    desc: "Membuka UMC Academy sebagai wadah pelatihan dan edukasi.",
    color: "bg-yellow-600",
  },
  {
    year: "2024",
    title: "UMC Berbagi",
    desc: "Mengadakan program sosial UMC Berbagi untuk masyarakat.",
    color: "bg-pink-600",
  },
];

const Journey = () => {
  return (
    <div className="py-10 px-2 sm:px-4 bg-gradient-to-b from-white via-green-50 to-green-100">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12 text-green-900 tracking-wide drop-shadow-lg">
        Journey
      </h2>
      <div className="max-w-xl sm:max-w-3xl mx-auto">
        <div className="relative border-l-4 border-green-700 pl-6 sm:pl-10">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="mb-10 sm:mb-14 relative group transition-all duration-300"
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-5 sm:-left-6 top-1 w-8 h-8 sm:w-12 sm:h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-xs sm:text-lg">{item.year}</span>
              </div>
              {/* Card */}
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 ml-2 sm:ml-4 border-l-4 border-green-300 group-hover:shadow-2xl transition-all duration-300">
                <h3 className="text-lg sm:text-2xl font-bold mb-2 text-green-800 group-hover:text-green-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
          {/* Timeline line extension */}
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-700 via-green-400 to-green-100 pointer-events-none rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Journey;
