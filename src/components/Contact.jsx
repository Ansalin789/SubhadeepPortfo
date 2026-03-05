import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="mt-24 bg-[#191919] py-16 px-6">
      <div className="max-w-5xl mx-auto text-white">
        <h2 className="text-xl font-semibold mb-6 font-pop">Contact</h2>

        {/* Email */}
        <div className="flex items-center gap-3 text-gray-300 mb-6">
          <FaEnvelope className="text-gray-400" />
          <a
            href="mailto:subhadeep.n3@gmail.com"
            className="hover:text-white transition font-pop"
          >
            subhadeep.n3@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 bg-[#0077B5] rounded-md hover:scale-110 transition"
        >
          <FaLinkedin className="text-white text-xl" />
        </a>
      </div>
    </section>
  );
}
