import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import NavLink from './Navbar/Navlink';
import ThemeToggle from './themetoggleF/ThemeToggle ';
import CloseIcon from './burgerbutton/CloseIcon ';
import MenuIcon from './burgerbutton/MenuIcon ';
import HeroSection from '../../pages/Heropage/HeroSection';
import AboutSection from '../../pages/Aboutpage/About';
import SkillSection from '../../pages/Skillpage/SkillSection';
import ProjectSection from '../../pages/Projectpage/ProjectSection';
import ContactSection from '../../pages/contactpage/ContactSection';
export default function Header() {

  const [dark, setDark] = useState(false);                    
  const [menuOpen, setMenuOpen] = useState(false);            
  const [scrolled, setScrolled] = useState(false);            
  const [activeSection, setActiveSection] = useState("home"); 
  const mobileMenuRef = useRef(null);
 
  const NAV_LINKS = [
  { label: "Home", href: "#home" ,Hero:HeroSection},
  { label: "About", href: "#about" ,Hero:AboutSection},
  { label: "Skills", href: "#skills",Hero:SkillSection },
  { label: "Projects", href: "#projects",Hero:ProjectSection },
  { label: "Contact", href: "#contact",Hero:ContactSection},
];

  
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
  }, []);
 
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
 
      
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        console.log(`el +" &&"+ ${window.scrollY} +" "+ ">=" +${ el.offsetTop - 100}`)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);
 
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
 
  
  const bg = dark
    ? scrolled ? "rgba(10,15,30,0.92)" : "rgba(10,15,30,0)"
    : scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0)";
 
  const borderColor = dark
    ? scrolled ? "rgba(51,65,85,0.6)" : "transparent"
    : scrolled ? "rgba(226,232,240,0.8)" : "transparent";
 
  return (
    <>
  
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@500&display=swap" rel="stylesheet" />

      <header
        className="fixed border-4 w-screen border-pink-700 top-0 left-0 right-0 z-50 transition-all duration-300 "
        style={{
          background: bg,
          borderBottom: `1px solid ${borderColor}`,
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 border-2 border-green-500">
          <div className="flex items-center justify-between h-16 sm:h-[70px]">
 
            
            <Logo dark={dark} />
 
           
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  {...link}
                  active={activeSection === link.href.replace("#", "")}
                  dark={dark}
                />
              ))}
            </nav>
 
            
            <div className="flex items-center gap-2.5">
 
             
              <ThemeToggle dark={dark} onToggle={() => setDark((d) => !d)} />
 
             
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                style={{
                  background: dark ? "#1e293b" : "#f1f5f9",
                  border: `1px solid ${dark ? "#334155" : "#e2e8f0"}`,
                  color: dark ? "#e2e8f0" : "#475569",
                }}
                aria-label="Toggle mobile menu"
              >
               
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
 
        
        <div
          className="md:hidden fixed inset-0 z-40 transition-all duration-300"
          style={{
            background: "rgba(0,0,0,0.5)",
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "all" : "none",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setMenuOpen(false)}
        />
 
       
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed right-0 top-0 bottom-0 z-50 w-72 flex flex-col transition-transform duration-300 ease-in-out"
          style={{
            transform: menuOpen ? "translateX(0)" : "translateX(150%)",
            background: dark ? "#0f172a" : "#ffffff",
            // borderLeft: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`,
            border:"4px solid red"
          }}
        >
         
          <div
            className="flex items-center justify-between px-5 h-16"
            style={{ borderBottom: `1px solid ${dark ? "#1e293b" : "#f1f5f9"}` }}
          >
          
            <Logo dark={dark} />
 
           
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors cursor-pointer"
              style={{ color: dark ? "#94a3b8" : "#64748b", background: dark ? "#1e293b" : "#f1f5f9" }}
            >
              
              <CloseIcon />
            </button>
          </div>
 
          
          <nav className="flex flex-col px-5 py-6 gap-1 flex-1">
            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    animationDelay: `${i * 50}ms`,
                    background: isActive
                      ? dark ? "rgba(37,99,235,0.15)" : "rgba(37,99,235,0.08)"
                      : "transparent",
                    color: isActive
                      ? "#2563EB"
                      : dark ? "#cbd5e1" : "#475569",
                    borderLeft: isActive ? "2px solid #2563EB" : "2px solid transparent",
                  }}
                >
                
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: isActive ? "#2563EB" : dark ? "#334155" : "#cbd5e1" }}
                  />
                  {link.label}
                </a>
              );
            })}
          </nav>
 
         
          <div className="px-5 pb-8">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Hire Me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
 
           
            <p
              className="text-center text-xs mt-3"
              style={{ color: dark ? "#475569" : "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}
            >
              Available for freelance projects
            </p>
          </div>
        </div>
      </header>
 
      
      <div
        style={{
          minHeight: "300vh",
          background: dark
            ? "linear-gradient(180deg, #0f172a 0%, #020617 100%)"
            : "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",
          paddingTop: "70px",
          transition: "background 0.3s",
        }}
      >
        {NAV_LINKS.map((link, i) => (
          
          <section
            key={link.href}
            id={link.href.replace("#", "")}
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
             className='border-2 border-red-500'
          >
            <div style={{ textAlign: "center" }}>
            
                <link.Hero dark={dark}/>
             
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
 

