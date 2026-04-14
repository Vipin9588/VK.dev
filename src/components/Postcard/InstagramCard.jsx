import { useState } from "react";
import { FaHeart, FaRegHeart, FaRegComment, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import profile from "../../assets/Img/17 PM.jpeg"
import logo from '../../assets/Img/logoSmall.png'

export default function InstagramCard({dark}) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(12853);
 
  return (
    <div className={`${dark?"border  border-gray-800":"bg-[rgba(234,235,236,0.92)]"}  rounded-2xl shadow-sm overflow-hidden w-full h-full`}>
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-[9px] font-bold overflow-hidden">
                <img src={logo} alt="" className="w-full h-full rounded-full" />
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className={`text-xs font-semibold ${dark?"text-white":"text-gray-900"}`}>youraccount</span>
              <GoVerified className="text-blue-500 text-[10px]" />
            </div>
            <p className={`text-[10px] ${dark?"text-white":"text-gray-400"} leading-none`}>Location Here</p>
          </div>
        </div>
        <BsThreeDots className={`${dark?"text-white":"text-gray-500"} text-base cursor-pointer`} />
      </div>
 
      
      <div className="bg-blue-300 relative w-full overflow-hidden h-40 md:h-48 flex items-center justify-center ">
         <div className="absolute h-full w-full z-44"></div>
        <img src={profile} alt="" className="w-full " />
      </div>
 
      <div className="px-3 pt-2 pb-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setLiked((l) => !l);
                setLikes((n) => (liked ? n - 1 : n + 1));
              }}
              className="active:scale-125 transition-transform"
            >
              {liked ? (
                <FaHeart className="text-base text-red-500" />
              ) : (
                <FaRegHeart className={`text-base ${dark?"text-white":"text-gray-700"}`} />
              )}
            </button>
            <FaRegComment className={`text-base ${dark?"text-white":"text-gray-700"} cursor-pointer`} />
            <LuSend className={`text-base ${dark?"text-white":"text-gray-700"} cursor-pointer`}/>
          </div>
          <button onClick={() => setSaved((s) => !s)}>
            {saved ? (
              <FaBookmark className={`text-base ${dark?"text-white":"text-gray-900"}`} />
            ) : (
              <FaRegBookmark className={`text-base ${dark?"text-white":"text-gray-700"} cursor-pointer`} />
            )}
          </button>
        </div>
 
        <p className={`text-[11px] font-semibold ${dark?"text-white":"text-gray-900"} flex`}>
          {likes.toLocaleString()} likes
        </p>
        <p className={`flex text-[11px] ${dark?"text-white":"text-gray-800"} mt-0.5 leading-snug`}>
          <span className="flex font-semibold">youraccount</span>{" "}
          Enhance your Instagram with our UI Mockup.
        </p>
        <p className={`flex text-[11px] text-blue-500 mt-0.5`}>
          #instagram #templates #beautiful
        </p>
      </div>
    </div>
  );
}
 
