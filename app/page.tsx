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

  const [aboutFinished, setAboutFinished] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    setMounted(true);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !aboutFinished) return;

    setShowProjects(false);
    setShowContact(false);

    const timer1 = setTimeout(() => setShowProjects(true), 300);
    const timer2 = setTimeout(() => setShowContact(true), 700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isMobile, aboutFinished]);

  if (!mounted) return null;

  return (
    <main
      className={`
        transition-all duration-500 ease-in-out
        ${isMobile
          ? "bg-white text-[#343131] dark:bg-[#343131] dark:text-[#FAF6F0]"
          : "h-screen overflow-hidden bg-white text-[#343131] dark:bg-[#343131] dark:text-[#FAF6F0]"
        }
      `}
    >
      <NavBar onNavigate={setActiveSection} isMobile={isMobile} />

      {isMobile ? (
        <>
          <div className="transition-all duration-500 opacity-100 translate-y-0">
            <About onFinish={() => setAboutFinished(true)} />
          </div>

          {showProjects && (
            <>
              <div className="mx-10 border-t md:hidden my-2 transition-all duration-500 opacity-100" />
              
              <div className="transition-all duration-500 opacity-100 translate-y-0">
                <Projects />
              </div>
            </>
          )}

          {showContact && (
            <>
              <div className="mx-10 border-t md:hidden my-2 transition-all duration-500 opacity-100" />
              
              <div className="transition-all duration-500 opacity-100 translate-y-0">
                <Contact />
              </div>
            </>
          )}
        </>
      ) :  (
        <div className="h-screen flex items-center justify-center lg:pl-32">
          {activeSection === 'about' && <About />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'contact' && <Contact />}
        </div>
      )}
    </main>
  )
}