'use client'

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Database, Mic } from 'lucide-react';
import Image from 'next/image';
import {
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiPrisma,
    SiZod,
    SiHtml5,
    SiCss,
    SiJavascript,
} from 'react-icons/si';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string | { label: string; url: string }[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "NoteIt",
        description: "A note-taking application that allows users to create notebooks and write, organize, and manage notes through a clean and well-structured interface.",
        image: "/images/noteit.png",
        technologies: ["React.js", "Next.js", "NeonDB", "Prisma"],
        liveUrl: "https://noteit-opal.vercel.app/",
        githubUrl: "https://github.com/Linn-Latt/noteit"
    },
    {
        id: 2,
        title: "Shadcn Next Dashboard",
        description: "A modern admin dashboard boilerplate with authentication, role-based access control, and CRUD modules.",
        image: "/images/dashboardKit.png",
        technologies: ["React.js", "Next.js", "TypeScript", "Zod"],
        liveUrl: "",
        githubUrl: "https://github.com/Linn-Latt/shadcn-next-dashboard"
    },
    {
        id: 3,
        title: "Subtitle SDK",
        description: "A TypeScript subtitle SDK parse, edit, format, and convert between SRT, VTT, and TXT, plus transcribe audio via Groq Whisper.",
        image: "/images/subtitle.png",
        technologies: ["TypeScript", "Node.js", "Groq Whisper API"],
        liveUrl: "",
        githubUrl: "https://github.com/Linn-Latt/subtitle-sdk"
    },
    {
        id: 4,
        title: "Pixel Art Maker",
        description: "A lightweight browser-based pixel art editor that lets you create pixel art.",
        image: "/images/pixelArt.png",
        technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
        liveUrl: "https://pixel-art-maker.linnlatt-ww11.workers.dev/",
        githubUrl: "https://github.com/Linn-Latt/pixel-art-maker"
    },
];

// Technology icon mapping
const getTechIcon = (tech: string): React.ReactElement | null => {
    const iconMap: { [key: string]: React.ReactElement } = {
        'React.js': <SiReact className="w-4 h-4" />,
        'Next.js': <SiNextdotjs className="w-4 h-4" />,
        'TypeScript': <SiTypescript className="w-4 h-4" />,
        'Node.js': <SiNodedotjs className="w-4 h-4" />,
        'NeonDB': <Database className="w-4 h-4" />,
        'Prisma': <SiPrisma className="w-4 h-4" />,
        'Zod': <SiZod className="w-4 h-4" />,
        'Groq Whisper API': <Mic className="w-4 h-4" />,
        'HTML5': <SiHtml5 className="w-4 h-4" />,
        'CSS3': <SiCss className="w-4 h-4" />,
        'Vanilla JavaScript': <SiJavascript className="w-4 h-4" />,
    }
    return iconMap[tech] || null;
}

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    }

    return (
        <section id="projects" className="md:min-h-0 py-10 px-6 md:px-10 max-w-4xl mx-auto scroll-mt-14 w-full overflow-y-auto">
            <div className="mb-4">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <p className="text-secondary">Here are some of my recent projects that highlight my skills and hands-on experience.</p>
            </div>

            {/* Mobile-first Slider */}
            <div className="relative">
                {/* Main Slider Container */}
                <div className="relative overflow-hidden">
                    {/* Slides */}
                    <div
                        className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projects.map((project) => (
                            <div key={project.id} className="w-full flex-shrink-0">

                                {/* Mobile Layout (default) */}
                                <div className="lg:hidden">
                                    <div className="px-2 pt-4">
                                        <div className="relative h-52 sm:h-72 w-full overflow-hidden rounded-xl border border-gray-400/60 dark:border-white/10 bg-[#f5f5f5] dark:bg-[#2e2b2b] shadow-md">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="px-4 pt-5 pb-2">
                                        <h3 className="text-lg font-semibold tracking-tight text-primary mb-1.5">{project.title}</h3>
                                        <p className="text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {project.technologies.map((tech) => {
                                                const icon = getTechIcon(tech)
                                                return (
                                                    <span
                                                        key={tech}
                                                        className="flex items-center gap-1.5 px-2.5 py-1 border border-accent/20 text-accent text-xs rounded-md bg-accent/5"
                                                        title={tech}
                                                    >
                                                        {icon} <span>{tech}</span>
                                                    </span>
                                                )
                                            })}
                                        </div>

                                        {/* Links */}
                                        {(project.liveUrl || project.githubUrl) && (
                                            <div className="flex">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/10 transition-colors"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ExternalLink size={13} />
                                                        Live Demo
                                                    </a>
                                                )}
                                                {project.githubUrl && (
                                                    Array.isArray(project.githubUrl) ? (
                                                        project.githubUrl.map((repo) => (
                                                            <a
                                                                key={repo.label}
                                                                href={repo.url}
                                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent border border-accent/25 rounded-lg hover:bg-accent/10 transition-colors"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <Github size={13} />
                                                                {repo.label}
                                                            </a>
                                                        ))
                                                    ) : (
                                                        <a
                                                            href={project.githubUrl}
                                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/10 transition-colors"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Github size={13} />
                                                            Code
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden lg:flex rounded-lg">
                                    <div className="w-1/2 py-3">
                                        <div className="relative w-full h-70 overflow-hidden rounded-2xl shadow-lg bg-[#f2f2f2] dark:bg-[#3c3939]">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-1/2 p-8 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                                        </div>
                                        <p className="text-secondary text-justify mb-2 leading-relaxed">{project.description}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech) => {
                                                const icon = getTechIcon(tech)
                                                return (
                                                    <span
                                                        key={tech}
                                                        className="flex items-center gap-1 pr-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                                                        title={tech}
                                                    >
                                                        {icon} <span>{tech}</span>
                                                    </span>
                                                )
                                            })}
                                        </div>

                                        {/* Links */}
                                        {(project.liveUrl || project.githubUrl) && (
                                            <div className="flex gap-4">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        className="flex items-center gap-2 text-accent text-sm hover:opacity-80"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ExternalLink size={14} />
                                                        Live Demo
                                                    </a>
                                                )}
                                                {project.githubUrl && (
                                                    Array.isArray(project.githubUrl) ? (
                                                        project.githubUrl.map((repo) => (
                                                            <a
                                                                key={repo.label}
                                                                href={repo.url}
                                                                className="flex items-center gap-2 text-accent text-sm hover:opacity-80"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <Github size={14} />
                                                                {repo.label}
                                                            </a>
                                                        ))
                                                    ) : (
                                                        <a
                                                            href={project.githubUrl}
                                                            className="flex items-center gap-2 text-accent text-sm hover:opacity-80"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Github size={14} />
                                                            View Code
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Navigation: Prev + Dots + Next */}
                <div className="flex justify-center items-center mt-4 md:mt-6 gap-5">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-200"
                        aria-label="Previous project"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex gap-2 items-center">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ease-out ${index === currentIndex
                                    ? 'w-6 bg-accent'
                                    : 'w-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-200"
                        aria-label="Next project"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
}