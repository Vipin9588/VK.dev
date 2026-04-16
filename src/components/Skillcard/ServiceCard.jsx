import React from "react";

export default function ServiceCard({ icon, title, onClick, active, i, dark }) {
  return (
    <div
      onClick={onClick}
      className={`group border border-gray-700 rounded-xl px-4 py-3
      hover:border-gray-500 hover:shadow-lg transition-all duration-300 
      hover:-translate-y-1 cursor-pointer flex items-center gap-4
      active:border-white 
      ${active === i ? "border-2 border-blue-400 " : "border-gray-700"}
      `}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-lg">
        {icon}
      </div>

      <h3
        className={`${dark ? "text-white" : "text-black"} font-medium text-sm`}
      >
        {title}
      </h3>
    </div>
  );
}
