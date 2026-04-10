import React from "react";

export default function CommentCard({message}) {
  return (
    <div className="w-full flex items-center justify-center">
      
      {/* Card */}
      <div className="w-[360px] bg-gray-100 rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
        
        {/* Top Row */}
        <div className="flex items-center justify-between mb-3">
          
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
              <div className="w-7 h-7 bg-white rounded-full">
                <img src="./VK.png" className="rounded-full w-full h-full"/>
              </div>
            </div>

            {/* Name + Time */}
            <div className="flex items-center gap-2">
              <p className="font-semibold text-gray-800 text-sm">
                Instagram
              </p>
              <span className="text-gray-400 text-xs">12h</span>
            </div>
          </div>

          {/* Heart */}
          <span className="text-red-500 text-lg">❤️</span>
        </div>

        {/* Message */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4 p-2">
          {message}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center gap-6 text-gray-400 text-xs">
          <span>121 likes</span>
          <span className="cursor-pointer hover:text-gray-600">Reply</span>
          <span className="cursor-pointer hover:text-gray-600">
            See translation
          </span>
        </div>

      </div>
    </div>
  );
}