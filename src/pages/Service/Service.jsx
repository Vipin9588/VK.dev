import { useState } from "react";
import {
  FaCode,
  FaTools,
  FaPaintBrush,
  FaServer,
  FaMobileAlt,
  FaUserTie,
  FaPlug,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    label: "Our Services",
    icon: <FaCode size={52} />,
    title: "Frontend Development",
    desc: "We build responsive, blazing-fast websites using React & Tailwind CSS — from Figma to fully working code.",
    bg: "#EF4444",
    best: true,
  },
  {
    id: 2,
    icon: <FaPaintBrush size={52} />,
    title: "UI Development",
    desc: "Modern dashboards, landing pages and UI redesigns for startups and businesses that want to look great.",
    bg: "#F59E0B",
    best: false,
  },
  {
    id: 3,
    icon: <FaServer size={52} />,
    title: "Full Stack Apps",
    desc: "CRUD apps, login systems, chat features and REST API integrations using Node.js and MySQL.",
    bg: "#10B981",
    best: false,
  },
  {
    id: 4,
    icon: <FaTools size={52} />,
    title: "Bug Fixing",
    desc: "Fix HTML/CSS issues, JavaScript errors, responsiveness problems and improve site performance fast.",
    bg: "#6366F1",
    best: true,
  },
  {
    id: 5,
    icon: <FaMobileAlt size={52} />,
    title: "Responsive Fix",
    desc: "Many websites are broken on mobile. I'll make yours look perfect on every screen and device.",
    bg: "#EC4899",
    best: false,
  },
  {
    id: 6,
    icon: <FaUserTie size={52} />,
    title: "Portfolio Sites",
    desc: "Personal portfolio websites for developers, designers, and students — built to impress clients.",
    bg: "#14B8A6",
    best: false,
  },
  {
    id: 7,
    icon: <FaPlug size={52} />,
    title: "API Integration",
    desc: "Connect frontend to any backend or third-party API. Fetch and display dynamic data seamlessly.",
    bg: "#F97316",
    best: false,
  },
];

export default function ServicesSection({dark}) {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
      className="mt-4 relative min-h-screen overflow-hidden px-6 py-6 md:px-14 lg:px-20"
    >
      {/* Background blobs */}
      {/* <div
        className="absolute top-16 left-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{ background: "#FECDD3", filter: "blur(60px)" }}
      />
      <div
        className="absolute top-8 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{ background: "#C7D2FE", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-20 left-1/2 w-96 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: "#A7F3D0", filter: "blur(80px)" }}
      /> */}

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto mb-14">
        <p
          className="text-sm tracking-widest uppercase mb-4"
          style={{ color: "#9CA3AF", letterSpacing: "0.15em" }}
        >
          Our Services
        </p>
        <h2
          className={`text-4xl  ${dark?"text-teal-50":"text-[#111827]"}  md:text-5xl font-bold leading-tight max-w-3xl`}
          style={{ color: "#", lineHeight: 1.15 }}
        >
          We are a boutique team that writes stories that have been created so
          that you can achieve your goals.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.slice(0, 4).map((s) => (
          <ServiceCard
            key={s.id}
            service={s}
            hovered={hovered === s.id}
            onHover={() => setHovered(s.id)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>

      {/* Second row */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {services.slice(4).map((s) => (
          <ServiceCard
            key={s.id}
            service={s}
            hovered={hovered === s.id}
            onHover={() => setHovered(s.id)}
            onLeave={() => setHovered(null)}
          />
        ))}
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
        transform: hovered ? "translateY(-10px) scale(1.02)" : "translateY(0px) scale(1)",
        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
        boxShadow: hovered
          ? `0 24px 48px ${service.bg}66`
          : "0 4px 16px rgba(0,0,0,0.08)",
        minHeight: "280px",
        justifyContent: "space-between",
      }}
    >
    
      {!service.best && <div className="h-6" />}

      {/* Icon */}
      <div className="text-white mb-4 opacity-90">{service.icon}</div>

      {/* Text */}
      <div>
        <h3
          className="text-xl font-bold mb-3"
          style={{ color: "#fff" }}
        >
          {service.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.65 }}
        >
          {service.desc}
        </p>
      </div>
    </div>
  );
}