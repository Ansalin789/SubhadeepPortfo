export default function ExperienceSection() {
  const experiences = [
    {
      role: "Sr Product QA & Data Analyst",
      company: "BD",
      date: "Jan 2026 – Present",
      desc: "Leading Product QA for AI-enabled medical devices under FDA & ISO 13485; built automated data pipelines to track model drift; developed QMS platform that minimize clinical errors and strengthen safety profiles across product development lifecycle.  ",
      logo: "/experience-logo/bd.svg",
      logoClass: "w-20 h-20",

    },
    {
      role: "Product Manager",
      company: "NameScan",
      date: "Jun 2025 – Dec 2025",
      desc: "Scaled AI Media Summariser for AML/KYC compliance under SOC2, ISO 27001 & GDPR; orchestrated monolith-to-K8s migration; integrated CRM analytics + multi-currency Stripe payments resulting in 10% conversion lift; re-engineered subscription model that reduced 8% churn and 12% credits utilisation gain.",
      logo: "/experience-logo/image 1.svg",
      logoClass: "w-60 h-60",

    },
    {
      role: "Co-Founder",
      company: "Orbyte AI",
      date: "Jan 2025 – Jun 2025",
      desc: "Built 0-to-1 multilingual AI Tutor platform: productized research into interactive videobot with student analytics & gamification; engineered technical architecture + GTM strategy to ship market ready EdTech MVP.",
      logo: "/experience-logo/orbyt.svg",
      logoClass: "w-50 h-50",

    },
    {
      role: "Assistant Product Manager",
      company: "EY",
      date: "Sep 2024 – Dec 2024",
      desc: "Delivered MVP of a multilingual AI learning assistant for Macquarie University that boosted student pass rates +10%, lifted student engagement across cohorts, hit 92% NPS.",
      logo: "/experience-logo/image 2.svg",
      logoClass: "w-20 h-12",

    },
    {
      role: "Research Data Analyst",
      company: "MQ",
      date: "Jan 2026 – Sep 2024",
      desc: "Developed and implemented ML algorithms for audit models, achieving 30% increase in detection accuracy of greenwashing statements and reducing false positives by 25%, thereby significantly enhancing the verification process of environmental claims.",
      logo: "/experience-logo/image 3.png",
      logoClass: "w-20 h-12",

    },
    {
      role: "Assistant Product Manager",
      company: "EY",
      date: "Aug 2018 – Dec 2022",
      desc: "Led product strategy for Indane LPG app (140M+ users, 50+ regions); cut booking friction by 25%; drove 30% digital adoption; orchestrated automated workflows sustaining 3M+ daily transactions.",
      logo: "/experience-logo/image 4.svg",
      logoClass: "w-20 h-12",

    },
    {
      role: "Product Analyst",
      company: "IPSOS",
      date: "Jul 2017 – Jul 2017",
      desc: "Built ML demand-forecasting tools used by IKEA & Domino’s Pizza; mined Mixpannel/Metabase data to steer the UX roadmap; A/B tests lifted DAU, CTR, CVR.",
      logo: "/experience-logo/image 5.svg",
      logoClass: "w-20 h-12",

    },
  ];

  return (
    <section className="mt-24 text-white relative px-6">

      {/* Gradient Title */}
      <h2 className="text-4xl font-pop md:text-5xl font-extrabold text-center bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent mb-14">
        EXPERIENCE
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-14">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center shadow-lg">
            </div>

            {/* Role + Date */}
            <div className="flex justify-between flex-wrap">
              <h3 className="font-semibold text-lg text-white flex items-center gap-4 font-pop">
                {exp.role}

                {/* Fixed Logo Container */}
                <span className="w-32 h-20 flex items-center justify-center rounded-md">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className={`${exp.logoClass} object-contain`}
                  />
                </span>

              </h3>

              <span className="text-sm text-gray-400 font-pop">{exp.date}</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-2 leading-6 max-w-2xl font-pop">
              {exp.desc}
            </p>

            {/* Divider line */}
            {i !== experiences.length - 1 && (
              <div className="absolute left-[9px] top-7 h-full w-[2px] bg-gradient-to-b from-purple-500/40 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
