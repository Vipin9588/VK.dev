import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiCheckCircle,
  FiClock,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import logo from "../../assets/Img/logo.png";

const socialLinks = [
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/vipinkumar95",
    color: "hover:text-blue-400",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/Vipin9588",
    color: "hover:text-gray-300",
  },
  {
    icon: FiTwitter,
    label: "Twitter",
    href: "https://x.com/Vipinkumar__90",
    color: "hover:text-sky-400",
  },
  {
    icon: FiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/vip_code_in?igsh=amJxaXN2cW9tY3Z2",
    color: "hover:text-pink-400",
  },
];

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "vipinkumarak.@gmail.com",
    href: "mailto:hello@alexmorgan.dev",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "(+91) 9588738897",
    href: "tel:+919588738897",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Ambala city ,Haryana",
    href: "#",
  },
];

const availability = [
  { dot: "bg-emerald-400", text: "Available for freelance work" },
  { dot: "bg-amber-400", text: "Response within 24 hours" },
];

export default function ContactSection({ dark }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const user_id = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const API = import.meta.env.VITE_EMAILJS_API;
  const text = dark ? "text-white" : "text-zinc-900";
  const textMuted = dark ? "text-zinc-400" : "text-zinc-500";
  const cardbg = dark ? "bg-white/[0.03]" : "bg-zinc-50";
  const cardBorder = dark ? "border-white/[0.07]" : "border-zinc-300";
  const rowbg = dark ? "bg-white/[0.04]" : "bg-zinc-100";
  const rowBorder = dark ? "border-white/[0.06]" : "border-zinc-200";
  const iconbg = dark ? "bg-white/[0.05]" : "bg-zinc-100";
  const iconBorder = dark ? "border-white/[0.07]" : "border-zinc-200";
  const activeDotbg = dark ? "bg-[#0d0d12]" : "bg-white";

  const socialItem = dark
    ? "bg-white/[0.03] border-white/[0.06] text-zinc-500 hover:border-white/20 hover:bg-white/[0.06]"
    : "bg-zinc-100 border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:bg-zinc-200";
  const inputBase = `w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/40 placeholder-zinc-500 ${
    dark
      ? "bg-white/5 text-white border-white/[0.08]"
      : "bg-zinc-50 text-zinc-900 border-zinc-200"
  }`;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    if (!formData.email || !formData.message) return;
    e.preventDefault();
    console.log("form enetrree");
    const data = {
      service_id: service_id,
      template_id: template_id,
      user_id: user_id,
      template_params: {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    };

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.log("ERROR:", error.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      className={`font-Primary min-h-screen w-[97vw]  ${text} font-sans py-20 px-4 relative overflow-hidden`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto ">
        <div className="text-center mb-16">
          <span className="font-Secondary inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4 border border-violet-500/30 bg-violet-500/10 px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-900 animate-pulse" />
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4 font-Secondary">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-100 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p
            className={`${textMuted} text-base max-w-xl mx-auto leading-relaxed`}
          >
            Have a project in mind? I'd love to hear about it. Drop me a message
            and let's create something remarkable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div
              className={`rounded-2xl border ${cardBorder} ${cardbg} p-6 backdrop-blur-sm`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-xl font-bold">
                    <img src={logo} alt="" />
                  </div>
                  <span
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 ${activeDotbg}`}
                  />
                </div>
                <div>
                  <p className={`font-semibold ${text} text-sm`}>Alex Morgan</p>
                  <p className={`${textMuted} text-xs mt-0.5`}>
                    Full-Stack Designer &amp; Developer
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 mb-6">
                {availability.map((a, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 text-xs ${textMuted} ${rowbg} rounded-lg px-3 py-2.5 border ${rowBorder}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${a.dot} shrink-0`}
                    />
                    {a.text}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className={`flex items-center gap-3 group ${textMuted} hover:${text} transition-colors duration-150`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg ${iconbg} border ${iconBorder} flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all duration-200`}
                    >
                      <Icon size={13} className="text-blue-800" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-600 uppercase tracking-wide font-medium">
                        {label}
                      </p>
                      <p className="text-xs font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div
              className={`rounded-2xl border ${cardBorder} ${cardbg} p-5 backdrop-blur-sm`}
            >
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-4">
                Find me on
              </p>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border ${socialItem} ${color} transition-all duration-200 group`}
                  >
                    <Icon size={16} />
                    <span className="text-[9px] tracking-wide font-medium">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className={`rounded-2xl border ${cardBorder} ${dark ? "bg-gradient-to-br from-blue-900/20 to-indigo-900/20" : "bg-blue-50"} p-5 backdrop-blur-sm flex items-center gap-4`}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                <FiClock size={16} className="text-blue-600" />
              </div>
              <div>
                <p className={`${text} text-sm font-semibold`}>Fast Response</p>
                <p className={`${textMuted} text-xs mt-0.5`}>
                  Usually reply within a few hours
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div
              className={`rounded-2xl border ${cardBorder} ${cardbg} p-7 md:p-8 backdrop-blur-sm h-full`}
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-5">
                    <FiCheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h3 className={`text-xl font-bold ${text} mb-2`}>
                    Message Sent!
                  </h3>
                  <p className={`${textMuted} text-sm max-w-xs`}>
                    Thanks for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="flex flex-col gap-5 h-full"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="relative">
                      <label className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <FiUser
                          size={13}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none"
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused("")}
                          placeholder="John Doe"
                          required
                          className={`${inputBase} pl-9 ${focused === "name" ? "border-blue-500/50 bg-blue-500/5" : "focus:border-blue-500/30"}`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <FiMail
                          size={13}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused("")}
                          placeholder="john@example.com"
                          required
                          className={`${inputBase} pl-9 ${focused === "email" ? "border-blue-500/50 bg-violet-500/5" : "focus:border-blue-500/30"}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused("")}
                      placeholder="Project inquiry, collaboration..."
                      required
                      className={`${inputBase} ${focused === "subject" ? "border-blue-500/50 bg-blue-500/5" : "focus:border-blue-500/30"}`}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex-1 flex flex-col">
                    <label className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                      <span className="flex items-center gap-1.5">
                        <FiMessageSquare size={10} />
                        Message
                      </span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      placeholder="Tell me about your project, timeline, budget..."
                      required
                      rows={6}
                      className={`${inputBase} resize-none flex-1 ${focused === "message" ? "border-blue-500/50 bg-blue-500/5" : "focus:border-blue-500/30"}`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-900 text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-lg shadow-violet-900/30 hover:shadow-violet-900/50"
                  >
                    <FiSend
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                    Send Message
                  </button>

                  <p className="text-center text-[11px] text-zinc-600">
                    No spam, ever. Your info stays private.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
