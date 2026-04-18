import React, { useState, useEffect, useRef } from "react";

const projectsData = [
  {
    id: 1,
    title: "IRONFORGE Gym Website",
    desc: "A modern, responsive gym website designed to attract customers, showcase membership plans, and improve online presence.",
    fullDesc:
      "Built to solve the problem of local fitness centers lacking a strong digital footprint. This project delivers a blazing-fast, visually appealing experience with clear calls-to-action, helping convert online visitors into actual gym members.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    img: "./IRONFORGE.png", 
    live: "https://vipin9588.github.io/IRONFORGE/",
    github: "#",
  },
  {
    id: 2,
    title: "Smart Expense Splitter",
    desc: "A full-stack application that helps users split bills easily and track payments with optimized settlement suggestions.",
    fullDesc:
      "Group expenses often lead to confusion and awkward conversations. This app streamlines the process by calculating exactly who owes who, offering optimized payment routes to minimize total transactions.",
    tech: ["React", "Node.js", "MySQL"],
    img: "./ecommerce.png", 
    live: "https://vvchatk.onrender.com/",
    github: "#",
  },
  {
    id: 3,
    title: "ConnectHub (Currency Converter)",
    desc: "A responsive web app that provides real-time currency conversion with a clean and user-friendly interface.",
    fullDesc:
      "Designed for travelers and international businesses, this tool provides instant, accurate currency exchange rates without visual clutter. Focused heavily on load speed and mobile usability.",
    tech: ["React", "Tailwind CSS"],
    img: "./video.png",
    live: "https://vvchatk.onrender.com/",
    github: "#",
  },
  {
    id: 4,
    title: "Election Care Business Website",
    desc: "A professional website built for a consultancy business to showcase services and generate leads.",
    fullDesc:
      "A tailored digital solution for a political consultancy firm. The platform establishes brand authority, clearly communicates specialized services, and provides an easy funnel for capturing potential client leads.",
    tech: ["React", "Tailwind CSS", "Express"],
    img: "./car.png",
    live: "https://vipin9588.github.io/car/",
    github: "#",
  },
];

export default function ProjectSection({ dark }) {
  const [activeProject, setActiveProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeProject]);

  return (
    <section
      ref={sectionRef}
      className={`font-Primary w-full min-h-screen px-6 py-24 lg:px-16 transition-colors duration-500 ${
        dark ? "bg-[#0b0f19]" : "bg-[#f8fafc]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ease-out text-center md:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span
            className={`text-sm font-bold uppercase tracking-widest mb-3 block ${
              dark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Portfolio
          </span>
          <h2
            className={`font-Secondary text-4xl md:text-5xl font-extrabold mb-4 ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            My Work
          </h2>
          <p
            className={`text-base md:text-lg max-w-2xl ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Real projects built to solve real problems and help businesses grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group flex flex-col rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(59,130,246,0.3)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${
                dark
                  ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600"
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-xl"
              }`}
            >
              <div className="relative h-56 md:h-60 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3
                  className={`text-xl font-bold mb-3 transition-colors ${
                    dark ? "text-white group-hover:text-blue-400" : "text-slate-900 group-hover:text-blue-600"
                  }`}
                >
                  {project.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${dark ? "text-slate-400" : "text-slate-600"}`}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] font-medium px-3 py-1 rounded-full ${
                        dark
                          ? "bg-slate-700/50 text-blue-300 border border-slate-600"
                          : "bg-blue-50 text-blue-600 border border-blue-100"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MODAL ─── */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md transition-opacity duration-300 p-4 md:p-6"
          onClick={() => setActiveProject(null)}
        >
          <div
            className={`w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl relative shadow-2xl transform transition-all duration-300 scale-100 opacity-100 flex flex-col md:flex-row ${
              dark ? "bg-[#0f172a] border border-slate-800" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-sm transition-colors ${
                dark ? "bg-black/20 text-slate-300 hover:bg-black/40 hover:text-white" : "bg-white/50 text-slate-600 hover:bg-slate-100 hover:text-black"
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] bg-slate-100 dark:bg-slate-800 relative">
              <img
                src={activeProject.img}
                alt={activeProject.title}
                className="absolute inset-0 w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000";
                }}
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className={`text-3xl font-Secondary font-bold mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
                {activeProject.title}
              </h2>
              
              <p className={`text-base leading-relaxed mb-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>
                {activeProject.fullDesc || activeProject.desc}
              </p>

              <div className="mb-8">
                <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 ${dark ? "text-slate-500" : "text-slate-400"}`}>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-sm font-medium px-4 py-1.5 rounded-full ${
                        dark
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-blue-50 text-blue-600 border border-blue-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-auto">
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>

                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 font-medium rounded-full border transition-all duration-300 hover:-translate-y-0.5 ${
                    dark 
                      ? "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white" 
                      : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-black"
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}