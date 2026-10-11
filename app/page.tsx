'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { NavBar } from "@/components/NavBar";
import { useEffect, useState, useSyncExternalStore } from "react";

const subscribeToViewport = (callback: () => void) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};

const getIsMobile = () => window.innerWidth < 769;
const getServerIsMobile = () => false;

export default function Home() {
  const isMobile = useSyncExternalStore(subscribeToViewport, getIsMobile, getServerIsMobile);
  const [activeSection, setActiveSection] = useState('about');

  const [aboutFinished, setAboutFinished] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (!isMobile || !aboutFinished) return;

    const timer1 = setTimeout(() => setShowProjects(true), 300);
    const timer2 = setTimeout(() => setShowContact(true), 700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isMobile, aboutFinished]);

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
              <div className="mx-6 border-t md:hidden my-2 transition-all duration-500 opacity-50" />
              
              <div className="transition-all duration-500 opacity-100 translate-y-0">
                <Projects />
              </div>
            </>
          )}

          {showContact && (
            <>
              <div className="mx-6 border-t md:hidden my-2 transition-all duration-500 opacity-50" />
              
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