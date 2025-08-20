import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative px-6 lg:px-20"
    >
      {/* Left Content */}
      <RevealOnScroll>
        <div className="text-center lg:text-left z-10 flex-1  ">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi , I'm Ashok Mohanta
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            I'm a full stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and delightful user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 ml-7">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 ml-17">
            <a
              href="https://drive.google.com/file/d/1zKMZ3dXJlYLDDYVBurA78IUpebpDWkOn/view?usp=sharing"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Right Hero Image with Circle Frame */}
      <div className="flex-1 mt-10 lg:mt-0 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 p-[6px] shadow-[0_0_40px_rgba(59,130,246,0.4)]">
          <img
            src="Ashok Image.jpg"
            alt="Hero"
            className="w-full h-full object-cover rounded-full border-4 border-gray-900"
          />
        </div>
      </div>
    </section>
  );
};
