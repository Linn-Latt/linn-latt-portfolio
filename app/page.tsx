'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { NavBar } from "@/components/NavBar";
import { useEffect, useState } from "react";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    setMounted(true);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [])

  if (!mounted) return null;

  return (
    <main className={isMobile ? "bg-white text-[#343131] dark:bg-[#343131] dark:text-[#FAF6F0]" : "h-screen overflow-hidden bg-white text-[#343131] dark:bg-[#343131] dark:text-[#FAF6F0]"}>
      <NavBar onNavigate={setActiveSection} isMobile={isMobile} />

      {isMobile ? (
        <>
          <About />
          {/* Mobile Divider */}
          <div className="my-2 mx-10 border-t md:hidden"></div>

          <Projects />
          {/* Mobile Divider */}
          <div className="my-2 mx-10 border-t md:hidden"></div>

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