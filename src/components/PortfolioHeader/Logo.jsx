import logo from "../../assets/Img/logo.png";
export default function Logo({ dark }) {
  return (
    <a href="#home" className="flex items-center gap-2.5 group select-none">
      <div
        className="relative flex items-center justify-center w-9 h-9 rounded-xl font-black text-white text-lg tracking-tight shadow-lg transition-transform duration-200 group-hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            letterSpacing: "-0.05em",
          }}
        >
          <img src={logo} alt="" />
        </span>
        <span
          className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2"
          style={{
            background: "#22D3EE",
            borderColor: dark ? "#0f172a" : "#ffffff",
          }}
        />
      </div>

      <div className="flex flex-col leading-none">
        <span
          className="text-base font-bold tracking-tight"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: dark ? "#f8fafc" : "#0f172a",
          }}
        >
          VK<span style={{ color: "#2563EB" }}>.</span>dev
        </span>
        <span
          className="text-[10px] font-medium tracking-widest uppercase"
          style={{ color: dark ? "#94a3b8" : "#64748b" }}
        >
          Creative Dev
        </span>
      </div>
    </a>
  );
}
