'use client'

import { useEffect, useState } from "react";

const intro = "Hi, I'm Linn Latt. I'm a Web Developer.";

export default function About() {
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex >= intro.length) return;

        const timeout = setTimeout(() => {
            setText(prev => prev + intro[charIndex]);
            setCharIndex(prev => prev + 1);
        }, 80);

        return () => clearTimeout(timeout);

    }, [charIndex]);

    return (
        <section id="about" className="min-h-screen p-10 max-w-4xl mx-auto scroll-mt-14">
            {/* Typing Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-10 min-h-[40px]">
                {text}
                <span className="animate-pulse">|</span>
            </h1>

            {/* About Content */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    I'm <strong>Linn Latt</strong>, a passionate Software Developer focused on
                    creating intuitive, user-friendly web applications. With a solid
                    foundation in front-end and back-end tools, I build clean, modern, and
                    responsive experiences that solve real problems and help users thrive.
                </p>
            </div>

            {/* Experience Section */}
            <div>
                <h2 className="text-3xl font-bold mb-6">Experience</h2>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="text-gray-600 dark:text-gray-400 md:w-48 flex-shrink-0">
                        2025 August - Present
                    </div>
                    <div>
                        <strong className="text-xl block mb-2">OJT Full-Stack Developer</strong>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">Min Shin Saw Co.Ltd</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores iste,
                            rerum ea ut aut et suscipit enim, voluptatum voluptatem doloremque,
                            omnis impedit porro odio vitae blanditiis. Quas, ipsum saepe. Rem!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}