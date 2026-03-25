'use client'

import { useEffect, useState } from "react";

const intro = "Hi, I'm Linn Latt. I'm a Web Developer.";

export default function About() {
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showExperience, setShowExperience] = useState(false);

    useEffect(() => {
        if (charIndex >= intro.length) {
            setFinished(true);
            return;
        }

        const timeout = setTimeout(() => {
            setText(prev => prev + intro[charIndex]);
            setCharIndex(prev => prev + 1);
        }, 80);

        return () => clearTimeout(timeout);
    }, [charIndex]);

    useEffect(() => {
        if (finished) {
            const aboutTimer = setTimeout(() => {
                setShowAbout(true);
            }, 500);

            const experienceTimer = setTimeout(() => {
                setShowExperience(true);
            }, 1000);

            return () => {
                clearTimeout(aboutTimer);
                clearTimeout(experienceTimer);
            };
        }
    }, [finished]);

    return (
        <section id="about" className="min-h-screen py-10 px-10 md:px-0 max-w-4xl mx-auto scroll-mt-14">
            {/* Typing Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 min-h-[40px]">
                {text}
                <span className="animate-pulse">|</span>
            </h1>

            {finished && (
                <div className={`transition-opacity duration-700 ${finished ? "opacity-100" : "opacity-0"}`}>
                    {/* About Content */}
                    <div className={`mb-8 transition-all duration-1000 ${showAbout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        {/* <h2 className="text-3xl font-bold mb-4">About Me</h2> */}
                        <p className="text-secondary leading-relaxed text-justify">
                            I'm <strong>Linn Latt</strong>, a passionate Web Developer specializing in
                            <span className="text-accent cursor-pointer"> React </span>
                            and <span className="text-accent cursor-pointer">JavaScript</span>.
                            With a strong foundation in both front-end and back-end development and hands-on experience with
                            <span className="text-accent cursor-pointer"> Vue</span>,
                            <span className="text-accent cursor-pointer"> React</span>,
                            <span className="text-accent cursor-pointer"> TypeScript</span>, and
                            <span className="text-accent cursor-pointer"> Laravel</span>,
                            I build clean, scalable, and user-focused web applications that solve real-world problems.
                        </p>
                    </div>

                    {/* Mobile Divider */}
                    {/* <div className="my-6 border-t md:hidden"></div> */}

                    {/* Experience Section */}
                    <div className={`transition-all duration-1000 ${showExperience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        <h2 className="text-2xl font-bold mb-3">Experience</h2>
                        <div className="flex flex-col md:flex-row gap-3 md:gap-10">
                            <div className="text-secondary md:w-[25%] flex-shrink-0">
                                2025 August - 2026 February
                            </div>
                            <div className="md:w-[75%] text-justify">
                                <strong className="text-lg block mb-2">OJT Full-Stack Developer</strong>
                                <p className="text-secondary mb-2">Min Shin Saw Co.Ltd</p>
                                <ul className="text-secondary leading-relaxed">
                                    <li>- Built and enhanced dynamic admin dashboards, RESTful APIs, and CMS-driven website.</li>
                                    <li>- Contributed to scalable multi-domain systems and mobile API integrations across multiple projects.</li>
                                    <li>- Improved application performance through feature development, frontend implementation, and effective debugging.</li>
                                    <li>- Collaborated within team environments while maintaining and supporting live production systems.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}