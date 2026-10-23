'use client'

import { useEffect, useState } from "react";

const intro = "Hi, I'm Linn Latt. I'm a Full Stack Developer.";

export default function About({ onFinish }: { onFinish?: () => void }) {
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [showAbout, setShowAbout] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const finished = charIndex >= intro.length;

    useEffect(() => {
        if (finished) return;

        const timeout = setTimeout(() => {
            setText(prev => prev + intro[charIndex]);
            setCharIndex(prev => prev + 1);
        }, 80);

        return () => clearTimeout(timeout);
    }, [charIndex, finished]);

    useEffect(() => {
        if (finished) {
            const aboutTimer = setTimeout(() => {
                setShowAbout(true);
            }, 500);

            const experienceTimer = setTimeout(() => {
                setShowExperience(true);

                onFinish?.();
            }, 1000);

            return () => {
                clearTimeout(aboutTimer);
                clearTimeout(experienceTimer);
            };
        }
    }, [finished]);

    return (
        <section id="about" className="md:min-h-0 pt-5 md:pt-10 pb-10 px-6 md:px-10 max-w-4xl mx-auto scroll-mt-14 w-full overflow-y-auto">

            {/* Inner container to control layout */}
            <div className="w-full">
                {/* Typing Title */}
                <div className="h-[80px] flex items-end">
                    <h1 className="text-xl md:text-4xl font-bold">
                        {text}
                        <span className="animate-pulse">|</span>
                    </h1>
                </div>

                <div className="mt-4 min-h-[430px]">
                    {finished && (
                        <div className={`transition-opacity duration-700 ${finished ? "opacity-100" : "opacity-0"}`}>
                            {/* About Content */}
                            <div className={`mb-8 transition-all duration-1000 ${showAbout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                                {/* <h2 className="text-3xl font-bold mb-4">About Me</h2> */}
                                <p className="text-secondary leading-relaxed">
                                    I'm <strong>Linn Latt</strong>, a full stack developer focused on
                                    <span className="text-accent cursor-pointer"> JavaScript</span> and
                                    <span className="text-accent cursor-pointer"> TypeScript</span>, building
                                    clean, user-focused web apps from front end to back end.
                                </p>
                            </div>

                            {/* Experience Section */}
                            <div className={`transition-all duration-1000 ${showExperience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                                <h2 className="text-2xl font-bold mb-4">Experience</h2>

                                {/* Experience Entry 1 */}
                                <div className="flex flex-col md:flex-row gap-1 md:gap-6 border-l-2 border-[var(--accent)] md:border-l-0 pl-4 md:pl-0 pb-5 md:pb-0 relative">
                                    {/* Timeline dot - mobile only */}
                                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[var(--accent)] md:hidden" />
                                    <div className="text-secondary md:w-[20%] flex-shrink-0">
                                        <span className="text-xs md:text-base font-medium tracking-wide uppercase md:normal-case md:tracking-normal">
                                            Aug 2025 - Feb 2026
                                        </span>
                                    </div>
                                    <div className="md:w-[80%] md:text-justify">
                                        <div className="text-lg block mb-1 md:flex justify-between">
                                            <strong>OJT + Junior Full-Stack Developer</strong>
                                            <p className="text-secondary text-sm md:text-base">Min Shin Saw Co.Ltd</p>
                                        </div>
                                        <ul className="text-secondary leading-relaxed text-sm md:text-base mt-1 space-y-1 md:space-y-0">
                                            <li>- Contribute to the Multi-Domain System, focusing on React API integration and API development.</li>
                                            <li>- Troubleshoot and resolve issues in the Clinic Management System.</li>
                                            <li>- Collaborated within team environments while maintaining live production systems.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Experience Entry 2 */}
                                <div className="flex flex-col md:flex-row gap-1 md:gap-6 mt-0 md:mt-4 border-l-2 border-[var(--accent)] md:border-l-0 pl-4 md:pl-0 relative">
                                    {/* Timeline dot - mobile only */}
                                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[var(--accent)] md:hidden" />
                                    <div className="text-secondary md:w-[20%] flex-shrink-0">
                                        <span className="text-xs md:text-base font-medium tracking-wide uppercase md:normal-case md:tracking-normal">
                                            Jun 2026 - Present
                                        </span>
                                    </div>
                                    <div className="md:w-[80%] md:text-justify">
                                        <div className="text-lg block mb-1 md:flex justify-between">
                                            <strong>Junior Web Developer</strong>
                                            <p className="text-secondary text-sm md:text-base">Brain Myanmar Co.Ltd</p>
                                        </div>
                                        <ul className="text-secondary leading-relaxed text-sm md:text-base mt-1 space-y-1 md:space-y-0">
                                            <li>- Contribute to database design, API development, and API integration for the Work Done Tracker project.</li>
                                            <li>- Contribute to maintaining and enhancing the Search System and related Admin Panel.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}