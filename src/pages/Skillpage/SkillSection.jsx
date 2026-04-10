import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { LiaHtml5, LiaJsSquare } from "react-icons/lia";
import { BiLogoCss3 } from "react-icons/bi";
import SkillCard from "../../components/Skillcard/SkillCard";
import CommentCard from "../../components/commentcard/CommentCard";
import ServiceCard from "../../components/Skillcard/ServiceCard";
import { FaPalette, FaCogs, FaGlobeEurope } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

import Speech from "../../components/speechbuble/Speech";
import Logo from "../../components/PortfolioHeader/Logo";
import ServicesSection from "../Service/Service";

// ─── Data ────────────────────────────────────────────────────────────────────

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

export default function SkillSection({dark}) {
  const sectionRef = useRef(null);
  const showrRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(null);
  const [clicked, setclicked] = useState(
    "Hey! 👋 Select a service below to explore my expertise",
  );

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
 
       
        .skill-section {
          font-family: 'DM Sans', sans-serif;
          width: 100%;
          min-height: 100vh;
          padding: 96px 24px;
          overflow: hidden;
        }
 
        /* Decorative blobs */
        .skill-section::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 480px; height: 480px;
    
          border-radius: 50%;
          pointer-events: none;
        }
        .skill-section::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 360px; height: 360px;
          border-radius: 50%;
          pointer-events: none;
        }
 
        .skill-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
 
        /* ── Heading ── */
        .skill-heading-wrap {
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .skill-heading-wrap.show { opacity: 1; transform: translateY(0); }
 
        .skill-eyebrow {
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 10px;
        }
 
        .skill-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.05;
          letter-spacing: -0.02em;
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
          margin-top: 14px;
          font-size: 16px;
          color: #64748b;
          max-width: 440px;
          line-height: 1.65;
          font-weight: 300;
        }
 
        /* ── Layout ── */
        .skill-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          gap: 40px;
          align-items: start;
          padding:8px
        }
        @media (max-width: 768px) {
          .skill-grid { grid-template-columns: 1fr ; }
          .skill-card {
          
         
          min-width: 90px;
          max-width: 100px;
        }
        }
 
        /* ── Skill Cards Panel ── */
        .skills-panel {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
 
        
 
        // div{
        // border: 2px solid red;
        // }

         @keyframes underlineMove {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }

      .animate-underlineMove {
        animation: underlineMove 2s linear infinite;
      }

      `}
      </style>

      <section
        className="skill-section borde-2 border-green-500"
        ref={sectionRef}
      >
        <div className="skill-inner">
          {/* Heading */}
          <div className={`skill-heading-wrap ${visible ? "show" : ""}`}>
            <p className="skill-eyebrow">What I work with</p>
            <h2 className="skill-title">
              My <span>Skills</span>
            </h2>
            <div className="skill-divider" />
            <p className="skill-subtitle">
              Technologies I use to build modern, scalable web applications —
              from pixel to production.
            </p>
          </div>

          {/* Two-column grid */}
          <div className="skill-grid ">
            {/* Skills */}
            <div className="skills-panel p-[40px] md:p-4">
              {skills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={i}
                  visible={visible}
                />
              ))}
            </div>

            <div className="bordr-2 border-purple-900 rounded-sm w-80 h-60 relative md:top-14 ml-14">
              <img
                src="./codingsetup.jpg"
                alt=""
                className="w-full h-full rounded-sm"
              />
              <Speech text={clicked} />
            </div>
          </div>
          <div
            className="h-40 flex items-center
             justify-center gap-6
            "
          >
            {services.map((c, i) => (
              <ServiceCard
                key={i}
                icon={c.icon}
                title={c.title}
                active={active}
                dark={dark}
                i={i}
                onClick={() => {
                  setclicked(c.description);
                  setActive(i);
                }}
              />
            ))}
          </div>
        </div>
        <div className={`flex justify-center flex-col ${dark?"text-white":"text-black"}`}>
          <p className="pt-4  ml-12 mr-12">
            Need a reliable developer who delivers clean code and modern UI? I’m
            ready to bring your project to life.
          </p>
          <p className="relative inline-block pt-2 cursor-pointer text-center ">
            <span className="flex justify-center items-center gap-2">
              Have a project in mind? Let’s build it together <Logo />
            </span>

            <span className="absolute left-24 md:left-0 bottom-[-10px] w-1/2 md:w-full h-[2px] overflow-hidden ">
              <span className="block w-[200%] h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-underlineMove"></span>
            </span>
          </p>
        </div>

       <ServicesSection dark={dark}/>

      </section>
    </>
  );
}
