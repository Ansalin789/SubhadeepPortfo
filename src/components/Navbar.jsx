export default function Navbar() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full flex justify-center py-6 text-sm tracking-wide bg-[#222222]">
      <div className="flex gap-10 text-white">
        <button onClick={() => scrollTo("home")} className="cursor-pointer hover:text-gray-300">Home</button>
        <button onClick={() => scrollTo("projects")} className="cursor-pointer hover:text-gray-300">Projects</button>
        <button onClick={() => scrollTo("experience")} className="cursor-pointer hover:text-gray-300">Experience</button>
        <button onClick={() => scrollTo("contact")} className="cursor-pointer hover:text-gray-300">Contact</button>
      </div>
    </nav>
  );
}