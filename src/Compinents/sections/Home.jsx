import { RevealOnScroll } from "../RevealOnScroll";
import Profile from "../../assets/Ashok.jpg"; // renamed without space

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 relative px-4 sm:px-6 lg:px-20 overflow-x-hidden"
    >
      {/* Left Content */}
      <RevealOnScroll>
        <div className="text-center lg:text-left z-10 max-w-xl lg:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Ashok Mohanta
          </h1>
          <p className="text-gray-100 text-base sm:text-lg mb-8">
            I'm a full stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and delightful user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-6">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-2 px-5 sm:py-3 sm:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-2 px-5 sm:py-3 sm:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1K7DlNmBuQnj0uwmqjakMavSS_5U7qHki/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-5 sm:py-3 sm:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Right Hero Image with Circle Frame */}
      <div className="flex justify-center">
        <div className="relative w-40 h-40 sm:w-56 mb-20 sm:h-56 md:w-50 md:h-50 lg:w-[23rem] lg:h-[23rem] rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 p-[6px] shadow-[0_0_30px_rgba(59,130,246,0.6)]">
  <img
    src={Profile}
    alt="Hero"
    className="w-full h-full object-cover rounded-full border-4 border-gray-900"
  />
</div>
      </div>
    </section>
  );
};
