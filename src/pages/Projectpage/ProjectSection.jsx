import React, { useState } from "react";

export default function ProjectSection({ dark }) {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [

    {
  title: "IRONFORGE Gym Website",
  desc: "A modern, responsive gym website built with React and Framer Motion, featuring smooth scrolling, animated UI, mobile-friendly navigation, and professional fitness branding.",
  tech: ["React", "Tailwind CSS", "Framer Motion"],
  img: "./IRONFORGE.png",
  live: "https://vipin9588.github.io/IRONFORGE/",
  github: "#",
},
    {
      title: "Smart Expense Splitter",
      desc: "An app to split bills easily among friends with optimized payment suggestions.",
      tech: ["React", "Node.js", "MySQL"],
      img: "./ecommerce.png",
      live: "https://vvchatk.onrender.com/",
      github: "#",
    },
    {
      title: "ConnectHub",
      desc: "Responsive currency converter with real-time exchange rates and clean UI.",
      tech: ["React", "Tailwind"],
      img: "./video.png",
      live: "https://vvchatk.onrender.com/",
      github: "#",
    },
    {
      title: "Election Care Website",
      desc: "A professional website for political consultancy and campaign management.",
      tech: ["React", "Tailwind", "Express"],
      img: "./car.png",
      live: "https://vipin9588.github.io/car/",
      github: "#",
    },
  ];

  return (
    <section className="font-Primary w-full min-h-screen px-6 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className={`font-Secondary text-5xl font-bold ${
              dark ? "text-white" : "text-gray-900"
            } mb-3`}
          >
            My Projects
          </h2>
          <p className="text-gray-500 max-w-md">
            Here are some of the projects I’ve worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setActiveProject(project)}
              className={`p-1 ${dark ? "border border-gray-800" : ""} rounded-xl shadow-sm hover:shadow-lg cursor-pointer
                         transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
            >
              <div className="h-48 overflow-hidden rounded-md">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-md
                             transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="mt-4 p-4">
                <h3
                  className={`text-lg font-semibold mb-2 ${dark ? "text-gray-200" : "text-black"}`}
                >
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm mb-3">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center
                      backdrop-blur-sm transition-opacity duration-300`}
          onClick={() => setActiveProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${dark ? "bg-[#0d1326]" : "bg-white"} w-[90%] max-w-4xl rounded-xl p-6 relative
                       transform transition-all duration-300 scale-100 opacity-100`}
          >
            <button
              onClick={() => setActiveProject(null)}
              className={`absolute top-3 right-3 ${dark ? "text-white" : "text-black"} hover:text-blue-400 text-xl`}
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="w-full h-64">
                <img
                  src={activeProject.img}
                  alt={activeProject.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <div>
                <h2
                  className={`text-2xl ${dark ? "text-white" : "text-black"} font-bold mb-3`}
                >
                  {activeProject.title}
                </h2>

                <p className="text-gray-600 mb-4">{activeProject.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={activeProject.live}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg
                               hover:bg-blue-700 transition"
                  >
                    Live
                  </a>

                  <a
                    href={activeProject.github}
                    className={`px-4 py-2 border rounded-lg ${dark ? "text-white" : "text-black"}
                     active:ring-2 ring-blue-500
                    `}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
