export default function Hero() {
    return (
        <section className="text-center px-6 mt-6">
            <div className="flex justify-center mb-10">
                <div className="w-40 h-40 rounded-full p-1">
                    <img
                        src="/avatar.svg"
                        alt="subadeep"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>


            <h1 className="text-5xl font-light tracking-tight font-pop">
                Hi, I am{" "}
                <span className="bg-[linear-gradient(90deg,#FF8A63_0%,#FF5C8D_100%)] bg-clip-text text-transparent font-extrabold">
                    Subhad
                </span>
                <span className="bg-[linear-gradient(90deg,#FF5C8D_0%,#C13BFF_100%)] bg-clip-text text-transparent font-extrabold">
                    eep
                </span>
                <span className="bg-[linear-gradient(90deg,#C13BFF_0%,#A335FF_100%)] bg-clip-text text-transparent font-extrabold">
                    !
                </span>
            </h1>


            <p className="mt-4 text-gray-300 text-md font-medium font-pop">
                🚀 Building AI & Big Data Products with Purpose ❤️  </p>


            <p className="max-w-xl mx-auto text-base md:text-[14.5px] leading-8 mt-11 text-[#C5C5C5] font-pop">
                Senior Product & Data Leader with 9+ years of experience building, scaling, and governing AI-first products across MedTech, FinTech, EdTech, and large-scale consumer platforms. I specialize in translating complex data, ML, and regulatory constraints into clear product strategy, intuitive user experiences, and measurable business outcomes
            </p>

            <div className="flex justify-center gap-4 mt-8">
                <button
                    onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition font-pop"
                >
                    Get In Touch
                </button>

                <a
                    href="/cv.pdf"
                    download
                    className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition font-pop"
                >
                    Download CV
                </a>

            </div>
        </section>
    );
}
