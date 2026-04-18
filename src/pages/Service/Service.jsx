import React, { useState } from "react";
import {
  FaCode,
  FaTools,
  FaServer,
  FaMobileAlt,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode size={48} />,
    title: "Business Website Development",
    desc: "I build modern, responsive websites for businesses that help attract more customers and improve online presence.",
    bg: "#EF4444", // Red
  },
  {
    id: 2,
    icon: <FaServer size={48} />,
    title: "Full Stack Web Applications",
    desc: "I develop complete web applications with login systems, dashboards, and database integration using Node.js and MySQL.",
    bg: "#10B981", // Green
  },
  {
    id: 3,
    icon: <FaTools size={48} />,
    title: "Website Bug Fixing",
    desc: "I fix HTML, CSS, and JavaScript issues quickly and improve performance and user experience.",
    bg: "#F59E0B", // Orange
  },
  {
    id: 4,
    icon: <FaMobileAlt size={48} />,
    title: "Mobile Responsive Fix",
    desc: "I make websites fully responsive so they look perfect on mobile, tablet, and desktop devices.",
    bg: "#6366F1", // Indigo
  },
  {
    id: 5,
    icon: <FaUserTie size={48} />,
    title: "Portfolio Website Design",
    desc: "I create modern portfolio websites for developers, students, and professionals to showcase their work.",
    bg: "#EC4899", // Pink
  },
];

export default function ServicesSection({ dark }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className={`font-Primary mt-4 relative min-h-screen overflow-hidden px-6 py-20 md:px-14 lg:px-20 transition-colors duration-500 ${
        dark ? "bg-[#0b0f19]" : "bg-[#f8fafc]"
      }`}
    >
      <div className="relative z-10 max-w-5xl mx-auto mb-16 text-center">
        <p
          className={`text-sm tracking-widest uppercase mb-4 font-bold ${
            dark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          What I Offer
        </p>
        <h2
          className={`text-4xl md:text-5xl font-Secondary font-extrabold leading-tight max-w-3xl mx-auto ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          Services I Offer to Help Your Business Grow Online
        </h2>
      </div>

      {/* Top Row: 3 Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 3).map((s) => (
          <ServiceCard
            key={s.id}
            service={s}
            hovered={hovered === s.id}
            onHover={() => setHovered(s.id)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>

      {/* Bottom Row: 2 Cards (Centered) */}
      <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {services.slice(3).map((s) => (
          <ServiceCard
            key={s.id}
            service={s}
            hovered={hovered === s.id}
            onHover={() => setHovered(s.id)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>

      {/* Contact CTA Button */}
      <div className="relative z-10 mt-16 flex justify-center">
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:-translate-y-1 ${
            dark
              ? "bg-white text-slate-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              : "bg-slate-900 text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
          }`}
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}

function ServiceCard({ service, hovered, onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer select-none"
      style={{
        background: service.bg,
        transform: hovered
          ? "translateY(-10px) scale(1.02)"
          : "translateY(0px) scale(1)",
        transition:
          "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
        boxShadow: hovered
          ? `0 24px 48px ${service.bg}66`
          : "0 4px 16px rgba(0,0,0,0.08)",
        minHeight: "300px",
        justifyContent: "center",
      }}
    >
      {/* Icon */}
      <div className="text-white mb-6 opacity-90 transition-transform duration-300 transform group-hover:scale-110">
        {service.icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-2xl font-bold mb-4" style={{ color: "#ffffff" }}>
          {service.title}
        </h3>
        <p
          className="text-[15px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}
        >
          {service.desc}
        </p>
      </div>
    </div>
  );
}