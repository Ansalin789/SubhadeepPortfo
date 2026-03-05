export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-6 text-sm tracking-wide bg-[#222222]">
      <div className="flex gap-10 text-[#fff]">
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Home</a>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Projects</a>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Experience</a>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Contact</a>
      </div>
    </nav>
  );
}
