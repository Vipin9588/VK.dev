import React, { useState, useEffect } from "react";
import InstagramCard from "../../components/Postcard/InstagramCard";
export default function HeroSection({dark}) {
  const badges = [
  { label: "React Expert", color: "bg-blue-100 text-blue-700" },
  { label: "UI/UX Design", color: "bg-purple-100 text-purple-700" },
  { label: "$50–$150/HR", color: "bg-green-100 text-green-700" },
];

const brands = [
  { name: "Figma", icon: "𝔽" },
  { name: "Notion", icon: "𝕹" },
  { name: "Framer", icon: "Fr" },
  { name: "Webflow", icon: "W" },
];
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);
 
  return (

    <section className={`w-full h-full b-[#f5f4f0] flex flex-col font-sans  ${dark?"text-white":"text-black"}`}>
    
      <div className="flex-1 flex items-center px-8 lg:px-16 pb-12 pt-12 ">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div
            className={`transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
         
            <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-black leading-[0.92] tracking-tight  mb-6">
              Hi, I'm a<br />
              <span className="italic font-black">Fullstack</span>
              <br />
              developer
              <span className="text-gray-400">©</span>
            </h1>
 
            <p className="text-gray-500 text-base leading-relaxed max-w-sm mb-8">
              I have 1 years of experience working on useful and mindful
              products together with startups and known brands.
            </p>
 
            <button className="bg-gray-900 text-white text-sm font-semibold px-7 py-3 rounded-full hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-900/20">
              Contact Us
            </button>
          </div>
 

          <div
            className={`relative h-[460px] transition-all duration-700 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
           
            <div className="absolute top-0 right-0 w-[250px] md:w-[300px] md:h-[320px] z-10 ">
              <InstagramCard dark={dark}/>
            </div>
 
            <div className="absolute top-8 right-[200px] md:right-[240px] w-[130px] h-[165px] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20">
              <div className="w-full h-full bg-gradient-to-br from-stone-300 via-amber-200 to-orange-300 flex items-center justify-center">
                <img src="./1me.jpeg" alt="" />
              </div>
            </div>
 
            <div className="absolute bottom-0 right-0 w-[310px] bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl shadow-xl p-4 z-10">
              <p className="text-white/80 text-xs mb-3 font-medium">
                The most recent brands I happily worked with ♡
              </p>
              <div className="flex items-center gap-3">
                {brands.map((b) => (
                  <div
                    key={b.name}
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold hover:bg-white/40 transition-colors cursor-pointer"
                    title={b.name}
                  >
                    {b.icon}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-3 overflow-hidden">
                {["Squarespace", "Asana", "Attentive", "Framer"].map((n) => (
                  <span key={n} className="text-white/70 text-[11px] font-semibold whitespace-nowrap">
                    {n}
                  </span>
                ))}
              </div>
            </div>
 
            <div className="absolute top-[52%] left-0 bg-white rounded-xl shadow-lg px-4 py-2.5 z-30 flex items-center gap-2">
              <span className="text-2xl font-black text-gray-900">1</span>
              <div className="text-xs text-gray-500 leading-tight">
                Years of<br />Experience
              </div>
            </div>
          </div>
 
        </div>
      </div>
 
    
    </section>
  );
}