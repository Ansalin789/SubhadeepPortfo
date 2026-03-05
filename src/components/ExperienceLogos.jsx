// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { FaCircleLeft,FaCircleRight } from "react-icons/fa6";


// import "swiper/css";
// import "swiper/css/navigation";

// export default function ExperienceLogos() {
//   const logos = [
// "/company_logos/aws.svg",
// "/company_logos/python.svg",
// "/company_logos/Azure.png",
// "/company_logos/figma.svg",
// "/company_logos/Group 132.svg",
// "/company_logos/postgresql.svg",
// "/company_logos/vscode.svg",
// "/company_logos/canva.svg",
// "/company_logos/streamlit.png",
// "/company_logos/Postman.png",
// "/company_logos/tableau.png",
// "/company_logos/n8n.png",
// "/company_logos/Power_Bi.png",
// "/company_logos/jira.png",
// "/company_logos/mongodb.svg",
//   ];

//   return (
//     <section className="mt-20 text-center justify-center">
//       <p className="text-[#C5C5C5] font-semibold mb-10 tracking-widest text-sm">
//         EXPERIENCE WITH
//       </p>

//       <div className="relative w-[50%] mx-auto px-16 pl-20">
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           navigation={{
//             nextEl: ".next-btn",
//             prevEl: ".prev-btn",
//           }}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//           spaceBetween={40}
//           breakpoints={{
//             320: { slidesPerView: 2 },
//             640: { slidesPerView: 3 },
//             1024: { slidesPerView: 5 },
//           }}
//         >
//           {logos.map((logo, i) => (
//             <SwiperSlide key={i} className="flex justify-center items-center">
//               <img src={logo} className="h-12 w-auto opacity-80" alt="logo" />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* LEFT BUTTON */}
//         <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20">
//           <span className="text-white text-lg"><FaCircleLeft /></span>
//         </button>

//         {/* RIGHT BUTTON */}
//         <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20">
//           <span className="text-white text-lg"><FaCircleRight /></span>
//         </button>
//       </div>
//     </section>
//   );
// }











import React from "react";

const OrbitRing = ({ items, radius, duration }) => {
  const angleStep = 360 / items.length;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        animation: `spin ${duration}s linear infinite`,
      }}
    >
      {items.map((logo, i) => {
        const angle = angleStep * i;

        return (
          <img
            key={i}
            src={logo}
            alt=""
            className="absolute w-10 h-10"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default function TechOrbit() {
  const ring1 = [
    "/company_logos/python.svg",
    "/company_logos/canva.svg",
    "/company_logos/Azure.png",
    "/company_logos/aws.svg",
  ];

  const ring2 = [
    "/company_logos/miro.svg",
    "/company_logos/postgresql.svg",
    "/company_logos/mongodb.svg",
    "/company_logos/Postman.png",
  ];

  const ring3 = [
    "/company_logos/figma.svg",
    "/company_logos/vscode.svg",
    "/company_logos/n8n.png",
    "/company_logos/tableau.png",
    "/company_logos/jira.png",
  ];

  return (<>
  <div className="p-[250px]">
    <h2 className="text-4xl font-pop md:text-5xl font-extrabold text-center bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent mb-[300px] -mt-20">
        EXPERTISE IN
      </h2>
  
    <div className="relative flex items-center justify-center">
      {/* Orbit Borders */}
      <div className="absolute w-[180px] h-[180px] border border-white/10 rounded-full"></div>
      <div className="absolute w-[320px] h-[320px] border border-white/10 rounded-full"></div>
      <div className="absolute w-[460px] h-[460px] border border-white/10 rounded-full"></div>

      {/* Rings */}
      <OrbitRing items={ring1} radius={90} duration={20} />
      <OrbitRing items={ring2} radius={160} duration={30} />
      <OrbitRing items={ring3} radius={230} duration={40} />

      {/* Center Text */}
<div className="absolute inset-0 flex items-center justify-center">

  {/* Glow */}
  <div className="absolute w-40 h-40 rounded-full bg-white/20 blur-3xl animate-pulse"></div>

  {/* Inner subtle glow */}
  <div className="absolute w-24 h-24 rounded-full bg-white/10 blur-xl"></div>

  {/* Text */}
      <h1 className="text-white p-10 text-xs tracking-widest font-bold">Expertise in</h1>


</div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

    </div>
    </div>
    </>
  );
}