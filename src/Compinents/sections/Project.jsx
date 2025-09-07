// import { RevealOnScroll } from "../RevealOnScroll";

// export const Project = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             Featured Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
//               <h3 className="text-xl font-bold mb-2">
//                 Loan Application System :
//               </h3>
//               <p className="text-gray-400 mb-4">
//                 Developed a role-based loan management web application for users, managers, and admins with secure
//                 authentication and access control.
//                 Built a multi-step loan application form with real-time validation, document uploads, and progress tracking.Implemented manager dashboards for application review, approval/rejection, and admin controls for manager
//                 onboarding.
//                 Integrated Firebase for authentication, Firestore database, and real-time status updates.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {[
//                   "React",
//                   "Node.js",
//                   "Express",
//                   " MongoDB",
//                   "REST APIs",
//                   "JWT",
//                 ].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between item-center">
//                 <a
//                   href="https://loan-application-system-nu.vercel.app/"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Projects➡
//                 </a>
//               </div>
//             </div>
//             {/* ---------------Second Project */}
//             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
//               <h3 className="text-xl font-bold mb-2">
//                 Food Donation and Distribution System :
//               </h3>
//               <p className="text-gray-400 mb-4">
//                 Developed a role-based web app for donors, recipients, and
//                 volunteers to manage food donations in real time.Implemented
//                 secure authentication, real-time database integration, and
//                 location tracking for efficient pickup and delivery.Built
//                 features like donation requests, status updates, and user
//                 dashboards to streamline food distribution and reduce wast.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React", " Supabase", "REST APIs"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between item-center">
//                 <a
//                   href="https://food-rescue-smart-food-distribution.vercel.app/ "
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Projects➡
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };


import { RevealOnScroll } from "../RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your project screenshots
import loan1 from "../../assets/project_img/loanapp1.jpg";
import loan2 from "../../assets/project_img/admindashboard.jpg";
import loan3 from "../../assets/project_img/managerdashbord.jpg";
import loan4 from "../../assets/project_img/signup.jpg";
import food1 from "../../assets/project_img/Project2/FoodHome.jpg";
import food2 from "../../assets/project_img/Project2/Register.jpg";
import food3 from "../../assets/project_img/Project2/Receiptent_Profile.png";
import food4 from "../../assets/project_img/Project2/Receptant_Receive_Food.png";
import food5 from "../../assets/project_img/Project2/VolunteerProfile.png";
import food6 from "../../assets/project_img/Project2/Volunterdeshbord.png";

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
            {/* Loan Application System */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              {/* Project Images */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                spaceBetween={10}
                slidesPerView={1}
                className="mb-4 rounded-lg"
              >
                <SwiperSlide>
                  <img
                    src={loan1}
                    alt="Loan Project Screenshot 1"
                    className="w-full h-56 object-cover rounded-lg border border-white/10"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={loan2}
                    alt="Loan Project Screenshot 2"
                    className="w-full h-56 object-cover rounded-lg border border-white/10"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={loan3}
                    alt="Loan Project Screenshot 3"
                    className="w-full h-56 object-cover rounded-lg border border-white/10"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={loan4}
                    alt="Loan Project Screenshot 4"
                    className="w-full h-56 object-cover rounded-lg border border-white/10"
                  />
                </SwiperSlide>
              </Swiper>

              <h3 className="text-xl font-bold mb-2">
                Loan Application System :
              </h3>
              <p className="text-gray-400 mb-4 text-left leading-relaxed max-w-prose hyphens-auto">
  Developed a role-based loan management web application with secure
  authentication, access control, and real-time updates. The system includes
  a multi-step loan application form with validation, document uploads, and
  progress tracking. Managers can review, approve, or reject applications,
  while admins handle manager onboarding. Firebase Authentication and
  Firestore are integrated to ensure data security and live status updates.
</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
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
                  href="https://loan-application-system-nu.vercel.app/"
                  className="text-blue-400 hover:text-blue-200 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project ➡
                </a>
                <a
                  href="https://github.com/ASHOK-MOHANTA/Loan-Application-System"
                  className="text-blue-400 hover:text-blue-200 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link ➡
                </a>
              </div>
            </div>

            {/* Food Donation System */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              {/* Project Images */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                spaceBetween={10}
                slidesPerView={1}
                className="mb-4 rounded-lg"
              >
                <SwiperSlide>
                  <img
                    src={food1}
                    alt="Food Donation Project Screenshot 1"
                    className="w-full h-56 object-cover rounded-lg border border-white/10"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={food2}
                    alt="Food Donation Project Screenshot 2"
                    className="w-full h-56 object-cover rounded-lg border border-white/10"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={food3}
                    alt="Food Donation Project Screenshot 2"
                    className="w-full h-56 object-cover rounded-lg border border-white/10"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={food4}
                    alt="Food Donation Project Screenshot 2"
                    className="w-full h-56 object-cover rounded-lg border border-white/10"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={food5}
                    alt="Food Donation Project Screenshot 2"
                    className="w-full h-56 object-cover rounded-lg border border-white/10"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={food6}
                    alt="Food Donation Project Screenshot 2"
                    className="w-full h-56 object-cover rounded-lg border border-white/10"
                  />
                </SwiperSlide>
              </Swiper>

              <h3 className="text-xl font-bold mb-2">
                Food Donation and Distribution System :
              </h3>
              <p className="text-gray-400 mb-4 text-left leading-relaxed max-w-prose hyphens-auto">
                Developed a role-based web app for donors, recipients, and
                volunteers to manage food donations in real time. Implemented
                secure authentication, real-time database integration, and
                location tracking for efficient pickup and delivery. Built
                features like donation requests, status updates, and user
                dashboards to streamline food distribution and reduce waste.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Supabase", "REST APIs"].map((tech, key) => (
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project ➡
                </a>
                <a
                  href="https://github.com/ASHOK-MOHANTA/Food-Rescue-Smart-Food-Distribution-and-Donation-System"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project ➡
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
