import React from 'react'
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon ';

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      style={{
        background: dark ? "#1e293b" : "#f1f5f9",
        border: `1px solid ${dark ? "#334155" : "#e2e8f0"}`,
        color: dark ? "#fbbf24" : "#475569", // amber in dark, slate in light
      }}
    >
      {/* Icon rotates 180° when switching theme for a smooth flip effect */}
      <span className="transition-all duration-300" style={{ transform: dark ? "rotate(0deg)" : "rotate(180deg)" }}>
        {/* Component: SunIcon / MoonIcon (conditional) */}
        {dark ? <SunIcon/> : <MoonIcon/>}
      </span>
    </button>
  );
}
 
