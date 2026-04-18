import React, { useState, useEffect } from "react";

export default function HeroSection({ dark }) {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger fade-in/slide-up animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      // Added font-Primary here so all text inherits it by default
      className={`font-Primary relative min-h-screen overflow-hidden flex items-center transition-colors duration-500 ${
        dark ? "bg-[#0b0f19] text-slate-100" : "bg-[#f8fafc] text-slate-900"
      }`}
    >
      {/* Background glow effects */}
      <div
        className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 ${
          dark ? "bg-blue-600/20" : "bg-blue-400/30"
        }`}
      />
      <div
        className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 ${
          dark ? "bg-emerald-500/10" : "bg-emerald-400/20"
        }`}
      />

      <div className="container mx-auto px-6 py-16 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* ─── LEFT PANEL: TEXT CONTENT ─── */}
        <div
          className={`flex flex-col items-start transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Status Badge */}
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-8 transition-colors duration-500 ${
              dark
                ? "bg-slate-800/50 border-slate-700"
                : "bg-white/60 border-slate-200 shadow-sm"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span
              className={`text-xs font-medium tracking-wide uppercase ${
                dark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Available for work
            </span>
          </div>

          {/* Main Heading */}
          {/* Added font-Secondary here for the bold Sansation look */}
          <h1 className="font-Secondary text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-extrabold tracking-tight mb-6">
            I Build{" "}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                dark
                  ? "from-blue-400 via-indigo-400 to-emerald-400"
                  : "from-blue-600 via-indigo-600 to-emerald-500"
              }`}
            >
              Modern Websites
            </span>{" "}
            <br className="hidden md:block" />
            That Help Businesses Get More Customers
          </h1>

          {/* Subheading */}
          <p
            className={`text-base md:text-lg leading-relaxed max-w-xl mb-10 transition-colors duration-500 ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I'm a Full Stack Developer specializing in fast, responsive, and
            user-friendly websites using React, Node.js, and MySQL.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`px-8 py-3.5 rounded-full border font-medium hover:-translate-y-1 transition-all duration-300 ${
                dark
                  ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md"
              }`}
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons (SVG code omitted for brevity, keep your existing ones here) */}
          <div className="flex items-center gap-5">
             <a href="https://github.com" target="_blank" rel="noreferrer" className={`transition-colors duration-200 ${dark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"}`}>
               {/* GitHub SVG */}
               GitHub
             </a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={`transition-colors duration-200 ${dark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"}`}>
               {/* LinkedIn SVG */}
               LinkedIn
             </a>
          </div>
        </div>

        {/* ─── RIGHT PANEL: ILLUSTRATION / IMAGE ─── */}
        <div
          className={`relative w-full h-[400px] md:h-[500px] transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div
            className={`absolute inset-0 backdrop-blur-xl border rounded-2xl shadow-2xl overflow-hidden flex flex-col transform hover:scale-[1.02] transition-all duration-500 ${
              dark
                ? "bg-slate-800/80 border-slate-700"
                : "bg-white/80 border-slate-200"
            }`}
          >
            {/* Window Header */}
            <div
              className={`px-4 py-3 flex items-center gap-2 border-b ${
                dark
                  ? "bg-slate-900/50 border-slate-700/50"
                  : "bg-slate-100/50 border-slate-200"
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            {/* Image Area */}
            <div
              className={`flex-1 relative ${
                dark ? "bg-slate-900" : "bg-slate-100"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop"
                alt="Developer Setup"
                className={`w-full h-full object-cover mix-blend-luminosity transition-opacity duration-500 ${
                  dark ? "opacity-60" : "opacity-90"
                }`}
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t transition-colors duration-500 ${
                  dark
                    ? "from-slate-900 via-transparent to-transparent"
                    : "from-white via-transparent to-transparent"
                }`}
              />

              {/* Floating tech stack badge */}
              <div
                className={`absolute bottom-6 right-6 backdrop-blur-md border p-4 rounded-xl shadow-xl flex items-center gap-3 transition-colors duration-500 ${
                  dark
                    ? "bg-slate-800/90 border-slate-700"
                    : "bg-white/90 border-slate-200"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl">
                  ⚛️
                </div>
                <div>
                  <div
                    className={`text-sm font-bold ${
                      dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Full Stack
                  </div>
                  <div
                    className={`text-xs ${
                      dark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    React • Node • MySQL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}