import { useState } from "react";
import {
  FiGithub, FiLinkedin, FiTwitter, FiArrowRight,
} from "react-icons/fi";
import { SiDribbble } from "react-icons/si";

const navLinks = {
  Work:     ["Portfolio", "Case studies", "Open source", "Side projects", "Dribbble shots"],
  Services: ["Web design", "Development", "Brand identity", "UI / UX audit", "Consulting"],
  Connect:  ["About me", "Blog", "Contact", "Hire me", "Resume"],
};

const socials = [
  { icon: FiGithub,   label: "GitHub"   },
  { icon: FiLinkedin, label: "LinkedIn" },
  { icon: FiTwitter,  label: "Twitter"  },
  { icon: SiDribbble, label: "Dribbble" },
];

const newBadge = "Development";

export default function Footer({ dark = true }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // ── theme tokens ────────────────────────────────────────────────
  const bg          = dark ? "bg-[#0d0d12]"           : "bg-[#f8f8f6]";
  const text        = dark ? "text-zinc-100"           : "text-zinc-900";
  const muted       = dark ? "text-zinc-500"           : "text-zinc-500";
  const subtle      = dark ? "text-zinc-600"           : "text-zinc-400";
  const divider     = dark ? "border-white/[0.08]"     : "border-black/[0.08]";
  const inputCls    = dark
    ? "bg-white/5 border-white/10 text-zinc-100 placeholder-zinc-600 focus:border-indigo-500/50"
    : "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-indigo-400";
  const socialCls   = dark
    ? "bg-white/[0.03] border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-200 hover:bg-white/[0.07]"
    : "bg-white border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-800 hover:bg-zinc-50";
  const linkCls     = dark
    ? "text-zinc-500 hover:text-zinc-100"
    : "text-zinc-500 hover:text-zinc-900";
  const bottomLink  = dark
    ? "text-zinc-600 hover:text-zinc-400"
    : "text-zinc-400 hover:text-zinc-600";
  // ────────────────────────────────────────────────────────────────

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className={`${bg} ${text} w-full font-sans`}>

      {/* ── Main grid ── */}
      <div className="max-w-6xl mx-auto px-8 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">

        {/* Brand + newsletter */}
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-xl font-black tracking-tight mb-2.5">
            Alex<span className="text-indigo-500">.</span>dev
          </p>
          <p className={`${muted} text-sm leading-relaxed mb-5 max-w-[240px]`}>
            Full-stack designer & developer crafting beautiful digital experiences. Available for freelance projects worldwide.
          </p>

          {/* Newsletter */}
          <p className={`text-[10px] font-semibold uppercase tracking-widest ${subtle} mb-2`}>
            Stay in the loop
          </p>
          {subscribed ? (
            <p className="text-sm text-emerald-400 font-medium">You're subscribed!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={`flex-1 min-w-0 text-sm px-3 py-2 rounded-lg border outline-none transition-colors duration-150 ${inputCls}`}
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors duration-150 whitespace-nowrap"
              >
                Subscribe <FiArrowRight size={12} />
              </button>
            </form>
          )}

          {/* Socials */}
          <div className="flex gap-2 mt-5">
            {socials.map(({ icon: Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-150 ${socialCls}`}
              >
                <Icon size={14} />
              </button>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(navLinks).map(([title, links]) => (
          <div key={title}>
            <p className={`text-[10px] font-bold uppercase tracking-[0.13em] ${subtle} mb-3.5`}>
              {title}
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link}>
                  
                   <a href="#"
                    className={`text-sm transition-colors duration-150 ${linkCls}`}
                  >
                    {link}
                    {link === newBadge && (
                      <span className="ml-1.5 text-[10px] font-semibold bg-indigo-600 text-white px-1.5 py-0.5 rounded align-middle">
                        New
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div className={`border-t ${divider} mx-8`} />

      {/* ── Bottom bar ── */}
      <div className="max-w-6xl mx-auto px-8 py-5 flex flex-wrap items-center justify-between gap-3">
        <p className={`text-xs ${subtle}`}>
          © {new Date().getFullYear()} Alex Morgan. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className={`text-xs ${subtle}`}>Available for new projects</span>
        </div>

        <div className="flex gap-4">
          {["Privacy", "Terms", "Colophon"].map((l) => (
            <a key={l} href="#" className={`text-xs transition-colors duration-150 ${bottomLink}`}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}