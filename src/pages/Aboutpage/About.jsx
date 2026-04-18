import React, { useState, useEffect } from "react";
import CommentCard from "../../components/commentcard/CommentCard";
import InstagramCard from "../../components/Postcard/InstagramCard";
import resume from "../../assets/pdf/vipin___resume.pdf";

export default function AboutSection({ dark }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Subtle fade-in animation trigger
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Highlight data for the feature cards
  const highlights = [
    {
      title: "Responsive Design",
      desc: "Mobile-friendly layouts",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Clean Code",
      desc: "Maintainable & scalable",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Fast Performance",
      desc: "Optimized loading times",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "User Experience",
      desc: "Intuitive & engaging UI",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className={`font-Primary w-full min-h-screen px-6 lg:px-16 py-24 flex items-center transition-colors duration-500 overflow-hidden ${
        dark ? "bg-[#0b0f19] text-white" : "bg-[#f8fafc] text-slate-900"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* ─── LEFT SIDE (VISUALS) ─── */}
        <div className="flex flex-col items-center lg:items-start gap-8 relative">
          {/* Main Visual/Card */}
          <div className="relative z-10 w-full max-w-[340px] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300">
            <InstagramCard dark={dark} />
          </div>

          {/* Floating context card */}
          <div
            className={`absolute -bottom-6 -right-4 lg:-right-8 p-5 rounded-2xl shadow-xl max-w-xs backdrop-blur-md border z-20 transition-colors duration-500 hidden md:block ${
              dark
                ? "bg-slate-800/90 border-slate-700 text-slate-200"
                : "bg-white/90 border-slate-200 text-slate-700"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">Currently building</span>
            </div>
            <p className="text-sm font-medium leading-relaxed">
              Passionate about building scalable and modern web applications with clean UI.
            </p>
          </div>
        </div>

        {/* ─── RIGHT SIDE (CONTENT) ─── */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <div className="w-12 h-[2px] bg-blue-500"></div>
             <span className={`text-sm font-bold uppercase tracking-widest ${dark ? "text-blue-400" : "text-blue-600"}`}>
               Discover
             </span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-Secondary font-bold tracking-tight mb-2 ${dark ? "text-white" : "text-slate-900"}`}>
            About Me
          </h2>

          {/* Body Paragraphs */}
          <div className={`space-y-4 text-base md:text-lg leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
            <p>
              I’m a Full Stack Web Developer with a strong focus on building modern, responsive, and user-friendly websites. I specialize in helping businesses create an online presence that not only looks good but also brings real results.
            </p>
            <p>
              I work with technologies like HTML, CSS, JavaScript, React, Node.js, Express, and MySQL to build fast and scalable web applications.
            </p>
            <p>
              I enjoy solving real-world problems through code and continuously improving my skills to deliver better solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600"
                    : "bg-white border-slate-200 hover:shadow-md"
                }`}
              >
                <div className={`p-2 rounded-lg shrink-0 ${dark ? "bg-slate-700 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-sm mb-1 ${dark ? "text-slate-200" : "text-slate-900"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Extras: Comment & Resume */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <CommentCard
                dark={dark}
                message="I'm a BCA graduate and full-stack developer who crafts seamless digital experiences."
              />
            </div>
            
            <a href={resume} download className="shrink-0">
              <button className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}