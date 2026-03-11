'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
    {
        id: 1,
        title: "Shwe Min",
        description: "Clinic Laboratory Management System between clinics and labs. Streamlines lab tests, result delivery, and result management.",
        image: "/images/sm.png",
        technologies: ["Vue.js", "TypeScript", "Laravel"],
    },
    {
        id: 2,
        title: "Aung Pyi Hae",
        description: "Warehouse Management System ",
        image: "/images/aph.png",
        technologies: ["React", "TypeScript", "TanStack Router", "Laravel"],
    },
    {
        id: 3,
        title: "SafeSpace",
        description: "Mental Health Support Mobile App with ",
        image: "/images/ss.png",
        technologies: ["React", "Node.js", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "Personal portfolio built with Next.js and TypeScript. Features responsive design, dark mode, and smooth animations.",
        image: "/images/p.png",
        technologies: ["React.js", "Next.js", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 5,
        title: "Admin Dashboard",
        description: "Modern admin dashboard with interactive charts, analytics, and real-time data visualization.",
        image: "/images/imageTest.jfif",
        technologies: ["Vue.js", "Chart.js", "Express"],
        liveUrl: "#",
        githubUrl: "#"
    },
];

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
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <p className="text-secondary">Here are some of my recent projects that showcase my skills and experience.</p>
            </div>

            {/* Mobile-first Slider */}
            <div className="relative">
                {/* Main Slider Container */}
                <div className="relative overflow-hidden rounded-lg bg-[#fbf8f5] dark:bg-[#3c3939] shadow-lg">
                    {/* Slides */}
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projects.map((project) => (
                            <div key={project.id} className="w-full flex-shrink-0">
                                {/* Mobile Layout (default) */}
                                <div className="lg:hidden">
                                    {/* Image */}
                                    {/* <div className="relative h-48 w-full">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div> */}
                                    <div className="p-4 pb-0">
                                        <div className="relative h-52 w-full overflow-hidden rounded-md">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                                        <p className="text-secondary mb-4 text-sm leading-relaxed">{project.description}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3">
                                            <a
                                                href={project.liveUrl}
                                                className="flex items-center gap-1 text-accent hover:opacity-80 text-sm"
                                            >
                                                <ExternalLink size={14} />
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                className="flex items-center gap-1 text-accent hover:opacity-80 text-sm"
                                            >
                                                <Github size={14} />
                                                Code
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout */}
                                <div className="hidden lg:flex">
                                    {/* Image */}
                                    {/* <div className="relative w-1/2 h-80">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div> */}

                                    <div className="w-1/2 p-6">
                                        <div className="relative w-full h-72 overflow-hidden rounded-lg">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-1/2 p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold mb-3 text-primary">{project.title}</h3>
                                        <p className="text-secondary mb-6 leading-relaxed">{project.description}</p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-4">
                                            <a
                                                href={project.liveUrl}
                                                className="flex items-center gap-2 text-accent hover:opacity-80"
                                            >
                                                <ExternalLink size={16} />
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                className="flex items-center gap-2 text-accent hover:opacity-80"
                                            >
                                                <Github size={16} />
                                                View Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/3 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 
                               hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-lg 
                               transition-colors duration-200 z-10"
                    aria-label="Previous project"
                >
                    <ChevronLeft size={20} className="text-primary" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/3 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 
                               hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full shadow-lg 
                               transition-colors duration-200 z-10"
                    aria-label="Next project"
                >
                    <ChevronRight size={20} className="text-primary" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 gap-2">
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

                {/* Project Counter */}
                <div className="text-center mt-4">
                    <span className="text-secondary text-sm">
                        {currentIndex + 1} of {projects.length}
                    </span>
                </div>
            </div>
        </section>
    )
}
