import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceLogos from "./components/ExperienceLogos";
import Projects from "./components/Projects";
import ExperienceSection from "./components/ExperienceSection";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#161513] text-white">
      <div className="p-2 rounded-xl">
        <Navbar />
      </div>      <Hero />
      <ExperienceLogos />
      <Projects />
      <ExperienceSection />
      <Contact />
    </div>
  );
}

export default App;
