import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { LiaHtml5, LiaJsSquare } from "react-icons/lia";
import { BiLogoCss3 } from "react-icons/bi";
import SkillCard from "../../components/Skillcard/SkillCard";
import ServiceCard from "../../components/Skillcard/ServiceCard";
import { FaPalette, FaCogs, FaGlobeEurope } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import Speech from "../../components/speechbuble/Speech";
import Logo from "../../components/PortfolioHeader/Logo";
import ServicesSection from "../Service/Service";
import logo from "../../assets/Img/LogoTransparent.png";

const skills = [
  { name: "HTML", Icon: LiaHtml5, accent: "#e34c26", bg: "#fff1ee" },
  { name: "CSS", Icon: BiLogoCss3, accent: "#264de4", bg: "#eef0ff" },
  { name: "Tailwind", Icon: SiTailwindcss, accent: "#06b6d4", bg: "#ecfeff" },
  { name: "JavaScript", Icon: LiaJsSquare, accent: "#f7df1e", bg: "#fffde7" },
  { name: "React.js", Icon: FaReact, accent: "#61dafb", bg: "#e8fbff" },
  { name: "Node.js", Icon: FaNodeJs, accent: "#3c873a", bg: "#edfaed" },
  { name: "MySQL", Icon: SiMysql, accent: "#f48022", bg: "#fff5eb" },
  { name: "Express.js", Icon: SiExpress, accent: "#61dafb", bg: "#e8fbff" },
  { name: "Git", Icon: FaGitAlt, accent: "#f48022", bg: "#fff5eb" },
  { name: "Postman", Icon: SiPostman, accent: "#f48022", bg: "#fff5eb" },
];

const services = [
  {
    icon: <FaPalette className="text-yellow-400" />,
    title: "Frontend Development",
    description:
      "Building responsive, pixel-perfect user interfaces using React.js and Tailwind CSS. Focused on performance, accessibility, and modern UI/UX principles.",
  },
  {
    icon: <FaCogs className="text-green-400" />,
    title: "Backend Development",
    description:
      "Developing scalable REST APIs with Node.js and Express.js, handling authentication, database integration, and secure server-side logic.",
  },
  {
    icon: <FaGlobeEurope className="text-blue-400" />,
    title: "Full Stack Applications",
    description:
      "Creating complete web applications from frontend to backend, integrating APIs, managing databases, and deploying production-ready solutions.",
  },
];

export default function SkillSection({ dark }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(null);
  const [clicked, setClicked] = useState(
    "Hey! 👋 Select a service below to explore my expertise",
  );

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .skill-section {
          width: 100%;
          min-height: 100vh;
          padding: 80px 16px 60px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .skill-inner {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Heading ── */
        .skill-heading-wrap {
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .skill-heading-wrap.show { opacity: 1; transform: translateY(0); }

        .skill-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 10px;
        }

        .skill-title {
          // font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 4vw, 54px);
          font-weight: 800;
          color: ${dark ? "#f1f5f9" : "#0f172a"};
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }

        .skill-title span {
          position: relative;
          display: inline-block;
        }
        .skill-title span::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 0;
          width: 100%; height: 6px;
          background: #fbbf24;
          border-radius: 2px;
          z-index: -1;
        }

        .skill-subtitle {
          font-size: 15px;
          color: ${dark ? "#94a3b8" : "#64748b"};
          max-width: 440px;
          line-height: 1.65;
          font-weight: 300;
          margin: 0;
        }

        /* ── Main two-column grid ── */
        .skill-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
          margin-bottom: 40px;
        }

        /* ── Skills panel ── */
        .skills-panel {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 8px;
        
        }

        /* ── Image card ── */
        .skill-image-card {
          position: relative;
          width: 100%;
          max-width: 320px;
          height: 220px;
          border-radius: 12px;
          overflow: visible;
          margin: 0 auto;
        }

        .skill-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }

        /* ── Service cards row ── */
        .services-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          align-items: stretch;
          margin-bottom: 40px;
        }

        /* ── CTA strip ── */
        .skill-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          padding: 0 16px;
          color: ${dark ? "#f1f5f9" : "#0f172a"};
        }

        .skill-cta p {
          margin: 0;
          font-size: 15px;
          line-height: 1.6;
          max-width: 560px;
          color: ${dark ? "#cbd5e1" : "#475569"};
        }

        .skill-cta-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 500;
          color: ${dark ? "#f1f5f9" : "#0f172a"};
          cursor: pointer;
          padding-bottom: 12px;
        }

        .skill-cta-underline {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 2px;
          overflow: hidden;
        }

        @keyframes underlineMove {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%);   }
        }
        .animate-underlineMove {
          animation: underlineMove 2s linear infinite;
        }

        /* ── Responsive breakpoints ── */

        /* Tablet: 768px and below */
        @media (max-width: 768px) {
          .skill-section {
            padding: 60px 16px 48px;
          }

          .skill-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .skill-image-card {
            max-width: 100%;
            height: 400px;
            margin-top: 0;
          }

          .skill-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }

          .services-row {
            flex-direction: column;
            align-items: center;
          }

          .services-row > * {
            width: 100%;
            max-width: 480px;
          }
        }

        /* Mobile: 480px and below */
        @media (max-width: 480px) {
          .skill-section {
            padding: 48px 12px 40px;
          }

          .skill-heading-wrap {
            margin-bottom: 32px;
          }

          .skills-panel {
            gap: 14px;
            padding: 4px;
          }

          .skill-image-card {
            height: 180px;
          }

          .services-row {
            gap: 12px;
          }

          .skill-cta p {
            font-size: 14px;
          }

          .skill-cta-link {
            font-size: 14px;
          }
        }

        @media(max-width:378px){
        .skills-panel {
          justify-content:center;
        }}
        
        @media (max-width: 360px) {
          .skill-section {
            padding: 10px 10px 32px;
          }
        }
      `}</style>

      <section className="skill-section font-Pr" ref={sectionRef}>
        <div className="skill-inner">
          <div className={`skill-heading-wrap ${visible ? "show" : ""}`}>
            <p className="skill-eyebrow">What I work with</p>
            <h2 className="skill-title font-Secondary">
              My <span>Skills</span>
            </h2>
            <p className="skill-subtitle">
              Technologies I use to build modern, scalable web applications —
              from pixel to production.
            </p>
          </div>

          <div className="skill-grid">
            <div className="skills-panel">
              {skills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={i}
                  visible={visible}
                />
              ))}
            </div>

            <div className="skill-image-card">
              <img src="./codingsetup.jpg" alt="Coding setup" />
              <Speech text={clicked} />
            </div>
          </div>

          <div className="services-row">
            {services.map((c, i) => (
              <ServiceCard
                key={i}
                icon={c.icon}
                title={c.title}
                active={active}
                dark={dark}
                i={i}
                onClick={() => {
                  setClicked(c.description);
                  setActive(i);
                }}
              />
            ))}
          </div>

          <div className="skill-cta">
            <p>
              Need a reliable developer who delivers clean code and modern UI?
              I'm ready to bring your project to life.
            </p>
            <span className="skill-cta-link ">
              Have a project in mind? Let's build it together{" "}
              <span>
                <img src={logo} alt="" className="w-10 h-10" />
              </span>
              <span className="skill-cta-underline">
                <span className="block w-[200%] h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-underlineMove" />
              </span>
            </span>
          </div>
        </div>

        {/* ── Full-width services section ── */}
        <ServicesSection dark={dark} />
      </section>
    </>
  );
}
