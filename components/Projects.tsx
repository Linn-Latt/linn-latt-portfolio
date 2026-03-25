'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github, Database } from 'lucide-react'
import Image from 'next/image'
import {
    SiVuedotjs,
    SiTypescript,
    SiLaravel,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiNextdotjs,
    SiTailwindcss,
    SiChartdotjs,
    SiExpress,
    SiPrisma
} from 'react-icons/si'

interface Project {
    id: number
    title: string
    type: 'work' | 'personal'
    description: string
    image: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string | { label: string; url: string }[]
}

const projects: Project[] = [
    {
        id: 1,
        title: "Shwe Min",
        type: "work",
        description: "Clinic Laboratory Management System between clinics and labs. Streamlines lab tests, result delivery, and result management.",
        image: "/images/sm.png",
        technologies: ["Vue.js", "TypeScript", "Laravel"],
    },
    {
        id: 2,
        title: "Aung Pyi Hae",
        type: "work",
        description: "Multidomain system to manage warehouses across multiple locations.",
        image: "/images/aph.png",
        technologies: ["React", "TypeScript", "Laravel"],
    },
    {
        id: 3,
        title: "SafeSpace",
        type: "personal",
        description: "Mental Health Support Mobile App with role-based access for both mental health professionals and users.",
        image: "/images/ss.png",
        technologies: ["React Native", "TypeScript", "Laravel"],
        githubUrl: [
            { label: "Frontend", url: "https://github.com/Linn-Latt/safe-space-app" },
            { label: "Backend", url: "https://github.com/Linn-Latt/Safe-Space-API" }
        ]
    },
    {
        id: 4,
        title: "Portfolio Website",
        type: "personal",
        description: "Personal portfolio built with Next.js and TypeScript. Features responsive design, dark mode, and smooth animations.",
        image: "/images/p.png",
        technologies: ["React.js", "Next.js", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "https://github.com/Linn-Latt/linn-latt-portfolio"
    },
    {
        id: 5,
        title: "NoteIt",
        type: "personal",
        description: "A note-taking app where users can create notebooks, write and manage notes with a clean and organized interface.",
        image: "/images/noteit.png",
        technologies: ["React.js", "Next.js", "NeonDB", "Prisma"],
        liveUrl: "#",
        githubUrl: "https://github.com/Linn-Latt/noteit"
    },
];

// Technology icon mapping
const getTechIcon = (tech: string): React.ReactElement | null => {
    const iconMap: { [key: string]: React.ReactElement } = {
        'Vue.js': <SiVuedotjs className="w-4 h-4" />,
        'TypeScript': <SiTypescript className="w-4 h-4" />,
        'Laravel': <SiLaravel className="w-4 h-4" />,
        'React': <SiReact className="w-4 h-4" />,
        'React.js': <SiReact className="w-4 h-4" />,
        'React Native': <SiReact className="w-4 h-4" />,
        'Node.js': <SiNodedotjs className="w-4 h-4" />,
        'MongoDB': <SiMongodb className="w-4 h-4" />,
        'Next.js': <SiNextdotjs className="w-4 h-4" />,
        'Tailwind CSS': <SiTailwindcss className="w-4 h-4" />,
        'Chart.js': <SiChartdotjs className="w-4 h-4" />,
        'Express': <SiExpress className="w-4 h-4" />,
        'NeonDB': <Database className="w-4 h-4" />,
        'Prisma': <SiPrisma className="w-4 h-4" />,
    }
    return iconMap[tech] || null
}

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        )
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <section id="projects" className="min-h-screen py-10 px-10 md:px-0 max-w-4xl mx-auto scroll-mt-14">
            <div className="mb-4">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <p className="text-secondary">Here are some of my recent projects that showcase my skills and experience.</p>
            </div>

            {/* Mobile-first Slider */}
            <div className="relative">
                {/* Main Slider Container */}
                <div className="relative overflow-hidden">
                    {/* Slides */}
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projects.map((project) => (
                            <div key={project.id} className="w-full flex-shrink-0">

                                {/* Mobile Layout (default) */}
                                <div className="lg:hidden">
                                    <div className="px-4 pt-4">
                                        <div className="relative h-48 sm:h-72 w-full overflow-hidden rounded-2xl shadow-lg bg-[#f2f2f2] dark:bg-[#3c3939]">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                                            <span className="text-xs px-2 py-1 bg-primary text-secondary border border-gray-200 dark:border-gray-700 rounded-full">
                                                {project.type === 'work' ? 'Work Project' : 'Personal Project'}
                                            </span>
                                        </div>
                                        <p className="text-secondary text-justify mb-4 text-sm leading-relaxed">{project.description}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, index) => {
                                                const icon = getTechIcon(tech)
                                                return (
                                                    <span
                                                        key={index}
                                                        className="flex items-center gap-1 px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                                                        title={tech}
                                                    >
                                                        {icon}
                                                    </span>
                                                )
                                            })}
                                        </div>

                                        {/* Links */}
                                        {(project.liveUrl || project.githubUrl) && (
                                            <div className="flex gap-3">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        className="flex items-center gap-1 text-accent hover:opacity-80 text-sm"
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
                                                                className="flex items-center gap-1 text-accent hover:opacity-80 text-sm"
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
                                                            className="flex items-center gap-1 text-accent hover:opacity-80 text-sm"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Github size={14} />
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
                                    <div className="w-1/2 p-3">
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
                                            <span className="text-sm px-3 py-1 bg-primary text-secondary border border-gray-200 dark:border-gray-700 rounded-full">
                                                {project.type === 'work' ? 'Work Project' : 'Personal Project'}
                                            </span>
                                        </div>
                                        <p className="text-secondary text-justify mb-2 leading-relaxed">{project.description}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech, index) => {
                                                const icon = getTechIcon(tech)
                                                return (
                                                    <span
                                                        key={index}
                                                        className="flex items-center gap-1 pr-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                                                        title={tech}
                                                    >
                                                        {icon}
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
                <div className="flex justify-center items-center mt-6 gap-4">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                        aria-label="Previous project"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex gap-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentIndex
                                    ? 'bg-accent'
                                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                        aria-label="Next project"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    )
}