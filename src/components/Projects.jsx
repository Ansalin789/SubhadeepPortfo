"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";


import "swiper/css";
import "swiper/css/navigation";

export default function ProjectsSection() {
  const projects = [
    {
      title: "CHESS BOT AI",
      img: "/project-thumbnail-1.svg",
    },
    {
      title: "STOCK BOT AI",
      img: "/project-thumbnail-2.svg",
    },
    {
      title: "AI HEALTH ASSISTANT",
      img: "/project-thumbnail-1.svg",
    },
  ];

  return (
    <section className="mt-20 text-center">
      <h2 className="text-4xl font-pop md:text-5xl font-extrabold bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent mb-12">
        PROJECTS
      </h2>

      <div className="relative w-[90%] md:w-[70%] lg:w-[55%] mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".proj-next",
            prevEl: ".proj-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] group shadow-lg">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-[#2a2a2a] p-3 text-left">
                  <p className="text-[8px] font-bold font-pop text-gray-300">CLICK HERE TO VISIT</p>
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-bold font-pop">{p.title}</h3>
                    <span className="text-white text-lg"><GoArrowUpRight /></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT ARROW */}
        <button className="prev-btn absolute -left-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20">
          <FaCircleLeft />
        </button>

        {/* RIGHT ARROW */}
        <button className="next-btn absolute -right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20">
          <FaCircleRight />
        </button>
      </div>
    </section>
  );
}

