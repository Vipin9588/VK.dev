import React from "react";

export default function Speech({ text = "Hello How are you" }) {
  return (
    <div className="relative inline-block bottom-[90%] left-[50%] md:left-[35%]">
      
      {/* Bubble */}
      <div className="bg-gray-200 text-gray-800 px-6 py-4 rounded-2xl shadow-lg max-w-xs">
        {text}
      </div>

      {/* Tail */}
      <div className="absolute -bottom-3 left-6 w-0 h-0 
        border-l-[12px] border-l-transparent
        border-r-[12px] border-r-transparent
        border-t-[14px] border-t-gray-200">
      </div>

    </div>
  );
}