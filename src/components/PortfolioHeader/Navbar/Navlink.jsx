export default function NavLink({ href, label, active, dark }) {
  const handleClick = (e) => {
    e.preventDefault(); 

    const id = href.replace("#", ""); 
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative text-sm font-medium transition-colors duration-200 group"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        color: active
          ? "#2563EB"
          : dark
          ? "#cbd5e1"
          : "#475569",
      }}
    >
      {label}

      <span
        className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300"
        style={{
          width: active ? "100%" : "0%",
          background: "linear-gradient(90deg, #2563EB, #1D4ED8)",
        }}
      />

      <span
        className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full"
        style={{
          width: "0%",
          background: "linear-gradient(90deg, #2563EB, #1D4ED8)",
        }}
      />
    </a>
  );
}