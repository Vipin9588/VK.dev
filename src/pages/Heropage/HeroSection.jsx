import React, { useState, useEffect } from "react";
import profile from "../../assets/Img/Profile.png";
export default function HeroSection({ dark }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const badges = [
    { label: "React Expert", style: "lime" },
    { label: "UI / UX Developement", style: "ghost" },
    { label: "$50 – $150 / hr", style: "ghost" },
  ];

  const stats = [
    { num: "1", label: "Years of\nExperience" },
    { num: "5+", label: "Projects\nDelivered" },
    { num: "4", label: "Happy\nClients" },
  ];

  // const brands = ["Figma", "Notion", "Framer", "Webflow", "Asana"];

  return (
    <section
      className={`font-Primary w-[100%] md:p-12 min-h-screen grid grid-cols-1 lg:grid-cols-2  overflow-hidden transition-colors duration-300 ${
        dark ? " text-[#f0ede6]" : " text-[#0e0e0f]"
      }`}
    >
      <div
        className={`flex flex-col justify-between px-10 py-14 lg:px-16 lg:border-r transition-all duration-700 ease-out  ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${dark ? "border-white/10" : "border-black/10"}`}
      >
        <div>
          <div
            className={`flex items-center gap-2 text-[11px]  tracking-widest uppercase mb-8 ${
              dark ? "text-white/40" : "text-black/40"
            }`}
          >
            <span className=" inline-block w-2 h-2 rounded-full bg-[#5de0e6] shadow-[0_0_0_3px_rgba(197,247,74,0.2)]" />
            Available for projects · {new Date().getFullYear()}
          </div>

          <h1
            className={`text-[clamp(3rem,5vw,5rem)] leading-[1] tracking-tight mb-6 ${
              dark ? "text-[#f0ede6]" : "text-[#0e0e0f]"
            } font-Secondary`}
          >
            Hi, I'm a
            <br />
            <em className="italic bg-gradient-to-r from-[#5de0e6] to-[#0078a6] p-2 bg-clip-text text-transparent">
              Fullstack
            </em>
            <br />
            developer.
          </h1>

          <p
            className={`text-sm leading-relaxed max-w-xs mb-10 ${
              dark ? "text-white/45" : "text-black/45"
            } `}
          >
            1 year crafting thoughtful digital products — from pixel-precise UI
            to robust backends — with startups and known brands.
          </p>

          <div className="flex items-center gap-4 mb-14">
            <button
              onClick={(e) => {
                e.preventDefault();

                const section = document.getElementById("contact");

                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-[#5de0e6] to-[#0078a6] text-[#0e0e0f] text-[14px]  px-7 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_24px_#0078a6] transition-all duration-150"
            >
              Let's talk
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();

                const section = document.getElementById("projects");

                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`text-[13px] px-5 py-3 rounded-full border transition-all duration-150 ${
                dark
                  ? "border-white/15 text-white/55 hover:border-white/40 hover:text-white"
                  : "border-black/15 text-black/55 hover:border-black/40 hover:text-black"
              }`}
            >
              See my work →
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <span
              key={b.label}
              className={`text-[11px]  px-4 py-1.5 rounded-full border tracking-wide ${
                b.style === "lime"
                  ? "bg-[rgba(197,247,74,0.12)] text-[rgb(55,202,228)] border-[rgba(20,188,221,0.25)]"
                  : dark
                    ? "bg-white/7 text-white/60 border-white/10"
                    : "bg-black/5 text-black/55 border-black/10"
              }`}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* ─── RIGHT PANEL ─── */}
      <div
        className={`relative flex flex-col justify-between px-10 py-14 lg:px-12 overflow-hidden transition-all duration-700 delay-150 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${dark ? "bg-[#161617]" : "bg-[#f1f0ed]"}`}
      >
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-8 relative z-10">
          {stats.map((s) => (
            <div
              key={s.num}
              className={`rounded-2xl p-5 border ${
                dark ? "bg-[#1e1e1f] border-white/8" : "bg-white border-black/8"
              }`}
            >
              <div
                className={`text-4xl leading-none mb-1 ${
                  dark ? "text-[#f0ede6]" : "text-[#0e0e0f]"
                }`}
              >
                {s.num}
              </div>
              <div
                className={`text-xs leading-snug whitespace-pre-line ${
                  dark ? "text-white/45" : "text-black/45"
                }`}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden h-52 md:h-80 lg:h-74 mb-6 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-300 via-amber-200 to-orange-300">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-xl px-4 py-2.5">
            <div className="w-8 h-8 rounded-full bg-[#5de0e6] flex items-center justify-center text-[10px]  text-black flex-shrink-0">
              YO
            </div>
            <div className="text-white text-xs leading-snug">
              <span className="block text-[13px] ">Open to work</span>
              React · Node · Design
            </div>
          </div>
        </div>

        {/* Brand pills */}
        {/* <div className="relative z-10">
          <p
            className={`text-[11px] uppercase tracking-widest  mb-3 ${
              dark ? "text-white/35" : "text-black/35"
            }`}
          >
            Recent brands
          </p>
          <div className="flex flex-wrap gap-2">
            {brands.map((name) => (
              <span
                key={name}
                className={`text-xs px-4 py-1.5 rounded-full border ${
                  dark
                    ? "bg-[#1e1e1f] border-white/10 text-white/60"
                    : "bg-white border-black/10 text-black/60"
                }`}
              >
                {name}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
