import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setmenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Close Button */}
      <button
        onClick={() => setmenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl sm:text-4xl md:text-5xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Brand / Logo */}
      <a
        href="#Home"
        className="font-mono text-lg sm:text-xl md:text-2xl font-bold text-blue-500 mb-6"
      >
        Portfolio<span className="text-white">.</span>
      </a>

      {/* Navigation Links */}
      <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8">
        <a
          href="#home"
          onClick={() => setmenuOpen(false)}
          className={`text-lg sm:text-2xl md:text-3xl font-semibold text-white my-2 sm:my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
            `}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setmenuOpen(false)}
          className={`text-lg sm:text-2xl md:text-3xl font-semibold text-white my-2 sm:my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
            `}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setmenuOpen(false)}
          className={`text-lg sm:text-2xl md:text-3xl font-semibold text-white my-2 sm:my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
            `}
        >
          Projects
        </a>
        <a
          href="https://drive.google.com/file/d/1K7DlNmBuQnj0uwmqjakMavSS_5U7qHki/view?usp=sharing"
          onClick={() => setmenuOpen(false)}
          className={`text-lg sm:text-2xl md:text-3xl font-semibold text-white my-2 sm:my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
            `}
            target="_blank"
            rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={() => setmenuOpen(false)}
          className={`text-lg sm:text-2xl md:text-3xl font-semibold text-white my-2 sm:my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
            `}
        >
          Contact
        </a>
      </div>
    </div>
  );
};
