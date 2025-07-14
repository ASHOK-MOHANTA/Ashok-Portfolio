import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Virtual Health Consultation and Booking System ("Medicare") :
              </h3>
              <p className="text-gray-400 mb-4">
                Developed an accessible healthcare platform to streamline doctor
                consultations, especially for individuals in remote locations.
                "Medicare" enables users to search for and book appointments
                with doctors, make secure payments for virtual consultations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  " MongoDB",
                  "REST APIs",
                  "JWT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between item-center">
                <a
                  href="https://github.com/ASHOK-MOHANTA/Doctor-Bookcking-And-Consultation-Application"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Projects➡
                </a>
              </div>
            </div>
            {/* ---------------Second Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Food Donation and Distribution System :
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a role-based web app for donors, recipients, and
                volunteers to manage food donations in real time.Implemented
                secure authentication, real-time database integration, and
                location tracking for efficient pickup and delivery.Built
                features like donation requests, status updates, and user
                dashboards to streamline food distribution and reduce wast.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", " Supabase", "REST APIs"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between item-center">
                <a
                  href="https://food-rescue-smart-food-distribution.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Projects➡
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
