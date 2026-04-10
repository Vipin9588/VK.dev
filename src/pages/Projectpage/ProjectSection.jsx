import React from "react";

export default function ProjectSection({dark}) {
  const projects = [
    {
      title: "Smart Expense Splitter",
      desc: "An app to split bills easily among friends with optimized payment suggestions.",
      tech: ["React", "Node.js", "MySQL"],
      img: "./ecommerce.png",
      live: "#",
      github: "#",
    },
    {
      title: "Currency Converter",
      desc: "Responsive currency converter with real-time exchange rates and clean UI.",
      tech: ["React", "Tailwind"],
      img: "./video.png",
      live: "#",
      github: "#",
    },
    {
      title: "Election Care Website",
      desc: "A professional website for political consultancy and campaign management.",
      tech: ["React", "Tailwind", "Express"],
      img: "./car.png",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="w-full min-h-scree px-6 lg:px-16 py-20">
      
      <div className="max-w-6xl mx-auto">

        {/* 🔹 Heading */}
        <div className="mb-12">
          <h2 className={`text-4xl font-bold ${dark?"text-white":"text-gray-900"} mb-3`}>
            My Projects
          </h2>
          <p className="text-gray-500 max-w-md">
            Here are some of the projects I’ve worked on, showcasing my skills and experience.
          </p>
        </div>

        {/* 🔹 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project, i) => (
            <div
              key={i}
              className={`p-2 border ${dark?"border-gray-600":""} rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group `}
            >
              
              {/* Project Image */}
              <div className="h-48 overflow-hidden rounded-md">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full rounded-md object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                
                <h3 className={`text-lg font-semibold ${dark?"text-gray-400":"text-gray-900 mb-2"}`}>
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    className="text-sm px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="text-sm px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                  >
                    Code
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}