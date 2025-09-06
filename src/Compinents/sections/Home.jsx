// import { RevealOnScroll } from "../RevealOnScroll";
// import Profile from "../../assets/Hero2.jpg";

// export const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-20 text-white overflow-x-hidden"
//     >
//       {/* Left Content */}
//       <RevealOnScroll>
//         <div className="text-center lg:text-left max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
//           <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-snug sm:leading-tight">
//             Hi, I'm Ashok Mohanta
//           </h1>
//           <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8">
//             I'm a passionate Full-Stack Developer dedicated to building reliable,
//             scalable, and user-centric web applications. I enjoy turning ideas
//             into functional solutions that blend performance, clean code, and
//             seamless user experiences.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
//             <a
//               href="#projects"
//               className="bg-blue-500 text-white py-2 px-5 sm:px-6 rounded font-medium text-sm sm:text-base transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
//             >
//               View Projects
//             </a>
//             <a
//               href="#contact"
//               className="border border-blue-500/50 text-blue-500 py-2 px-5 sm:px-6 rounded font-medium text-sm sm:text-base transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </RevealOnScroll>

//       {/* Right Hero Image */}
//       <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
//         <div
//           className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-90 xl:h-90
//           rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 
//           p-[4px] sm:p-[6px] shadow-[0_0_30px_rgba(59,130,246,0.6)]"
//         >
//           <img
//             src={Profile}
//             alt="Hero"
//             className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-gray-900"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };




import { RevealOnScroll } from "../RevealOnScroll";
import Profile from "../../assets/Hero2.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 xs:px-5 sm:px-6 lg:px-20 text-white overflow-x-hidden"
    >
      {/* Left Content */}
      <RevealOnScroll>
        <div className="text-center lg:text-left max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold mb-4 sm:mb-6 
            bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent 
            leading-snug xs:leading-snug sm:leading-tight"
          >
            Hi, I'm Ashok Mohanta
          </h1>

          <p
            className="text-gray-200 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
            mb-6 sm:mb-8"
          >
            I'm a passionate Full-Stack Developer dedicated to building reliable,
            scalable, and user-centric web applications. I enjoy turning ideas
            into functional solutions that blend performance, clean code, and
            seamless user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-2 px-5 xs:px-6 rounded font-medium text-sm xs:text-base transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-2 px-5 xs:px-6 rounded font-medium text-sm xs:text-base transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Right Hero Image */}
      <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
        <div
          className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-90 xl:h-90
          rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 
          p-[3px] xs:p-[4px] sm:p-[6px] shadow-[0_0_30px_rgba(59,130,246,0.6)]"
        >
          <img
            src={Profile}
            alt="Hero"
            className="w-full h-full object-cover rounded-full border-2 xs:border-3 sm:border-4 border-gray-900"
          />
        </div>
      </div>
    </section>
  );
};
