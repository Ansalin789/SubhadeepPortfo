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
            className="absolute w-6 h-6 md:w-10 md:h-10"
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

  return (
    <section className="py-24 md:py-40 text-center">

      <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent mb-20">
        EXPERTISE IN
      </h2>

      <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">

        {/* Orbit Borders */}
        <div className="absolute w-[120px] h-[120px] md:w-[180px] md:h-[180px] border border-white/10 rounded-full"></div>
        <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] border border-white/10 rounded-full"></div>
        <div className="absolute w-[320px] h-[320px] md:w-[460px] md:h-[460px] border border-white/10 rounded-full"></div>

        {/* Rings */}
        <OrbitRing items={ring1} radius={60} duration={20} />
        <OrbitRing items={ring2} radius={110} duration={30} />
        <OrbitRing items={ring3} radius={160} duration={40} />

        {/* Center */}
        <div className="absolute flex items-center justify-center">

          <div className="absolute w-24 h-24 md:w-40 md:h-40 rounded-full bg-white/20 blur-3xl animate-pulse"></div>

          <h1 className="text-white text-xs md:text-sm tracking-widest font-bold">
            Expertise in
          </h1>

        </div>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>

      </div>
    </section>
  );
}