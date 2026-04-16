import CommentCard from "../../components/commentcard/CommentCard";
import InstagramCard from "../../components/Postcard/InstagramCard";
import resume from "../../assets/pdf/vipin___resume.pdf";
export default function AboutSection({ dark }) {
  return (
    <section className="font-Primary w-full min-h-scree px-6 lg:px-16 py-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-xl">
            <InstagramCard dark={dark} />
          </div>

          <div
            className={`${dark ? "text-white" : "bg-white  text-gray-600"} p-4 rounded-xl shadow-md max-w-sm`}
          >
            <p className=" text-sm">
              Passionate about building scalable and modern web applications
              with clean UI.
            </p>
          </div>
        </div>

        {/* 🔹 RIGHT SIDE (CONTENT) */}
        <div className="flex flex-col gap-6">
          <h2
            className={`text-4xl font-Secondary  ${dark ? "text-white" : "text-gray-900"}`}
          >
            About Me
          </h2>

          <p
            className={`${dark ? "text-gray-300" : "text-gray-600"} leading-relaxed  `}
          >
            I’m Vipin, a fullstack developer with experience in building modern
            web applications. I specialize in React, Node.js, and creating
            responsive, user-friendly interfaces.
          </p>

          <p
            className={`${dark ? "text-gray-300" : "text-gray-600"} leading-relaxed `}
          >
            I enjoy solving real-world problems and turning ideas into digital
            products. My goal is to deliver high-quality, performance-driven
            applications.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-4">
            <div
              className={`${dark ? "border border-gray-800" : "bg-white"} p-4 rounded-xl shadow text-center`}
            >
              <h3
                className={`text-2xl font-bold ${dark ? "text-gray-300" : "text-gray-900"}`}
              >
                5+
              </h3>
              <p className={`text-gray-500 text-sm`}>Projects</p>
            </div>

            <div
              className={`${dark ? "border  border-gray-800" : "bg-white"} p-4 rounded-xl shadow text-center`}
            >
              <h3
                className={`text-2xl font-bold ${dark ? "text-gray-300" : "text-gray-900"}`}
              >
                5+
              </h3>
              <p className={`text-gray-500 text-sm`}>Clients</p>
            </div>

            <div
              className={`${dark ? "border  border-gray-800" : "bg-white"} p-4 rounded-xl shadow text-center`}
            >
              <h3
                className={`text-2xl font-bold ${dark ? "text-gray-300" : "text-gray-900"}`}
              >
                1
              </h3>
              <p className={`text-gray-500 text-sm`}>Years Exp</p>
            </div>
          </div>

          <div className="mt-6">
            <CommentCard
              dark={dark}
              message="I'm BCA graduate and full-stack developer who crafts seamless digital experiences."
            />
          </div>

          <a href={resume} download>
            <button className="mt-6 w-fit px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
