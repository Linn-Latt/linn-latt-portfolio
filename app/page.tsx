'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { NavBar } from "@/components/NavBar";
import { useEffect, useState } from "react";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [])

  return (
    <main className={isMobile ? "bg-white text-[#343131] dark:bg-[#343131] dark:text-[#FAF6F0]" : "h-screen overflow-hidden bg-white text-[#343131] dark:bg-[#343131] dark:text-[#FAF6F0]"}>
      <NavBar onNavigate={setActiveSection} isMobile={isMobile} />

      {isMobile ? (
        <>
          <About />
          <Projects />
          <Contact />
        </>
      ) : (
        <div className="lg:pl-32">
          {activeSection === 'about' && <About />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'contact' && <Contact />}
        </div>
      )}
    </main>
  )
}