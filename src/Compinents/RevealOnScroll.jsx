import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" } // smoother trigger
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal w-full max-w-screen-xl mx-auto px-3 sm:px-4 md:px-6 overflow-x-hidden"
    >
      {children}
    </div>
  );
};
