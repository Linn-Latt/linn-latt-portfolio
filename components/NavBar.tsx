'use client'

import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { ArrowDownToLine, FolderOpenDot, Mail, User } from 'lucide-react'

interface NavBarProps {
  onNavigate: (section: string) => void
  isMobile: boolean
}

export function NavBar({ onNavigate, isMobile }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#343131] border-b border-gray-200 dark:border-gray-800 lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-semibold">Linn Latt</h1>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="border-t border-gray-200 text-center dark:border-gray-800 bg-white dark:bg-[#343131]">
            <ul className="py-2">
              <li>
                {isMobile ? (
                  <a
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    About
                  </a>
                ) : (
                  <button
                    onClick={() => { onNavigate('about'); setIsOpen(false); }}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    About
                  </button>
                )}
              </li>
              <li>
                {isMobile ? (
                  <a
                    href="#projects"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Projects
                  </a>
                ) : (
                  <button
                    onClick={() => { onNavigate('projects'); setIsOpen(false); }}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Projects
                  </button>
                )}
              </li>
              <li>
                {isMobile ? (
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Contact
                  </a>
                ) : (
                  <button
                    onClick={() => { onNavigate('contact'); setIsOpen(false); }}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Contact
                  </button>
                )}
              </li>
              <li>
                <a href="/pdf/LinnLattWinWin.pdf" download className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <ArrowDownToLine />
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-[calc(50%-496px)] top-1/2 -translate-y-1/2 z-50">
        <nav className="flex flex-col gap-1 py-3 bg-white dark:bg-[#292727] border border-gray-200 dark:border-black rounded-2xl shadow-xl">
          <button
            onClick={() => onNavigate('about')}
            className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="About"
          >
            <User />
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="Projects"
          >
            <FolderOpenDot />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="Contact"
          >
            <Mail />
          </button>

          <div className="h-px bg-gray-200 dark:bg-gray-800 my-1" />

          <a
            href="/pdf/LinnLattWinWin.pdf"
            download
            className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="Download Resume"
          >
            <ArrowDownToLine />
          </a>

          <div className="mt-1 px-1">
            <ThemeToggle />
          </div>
        </nav>
      </aside>

      {/* Mobile spacer */}
      <div className="h-14 lg:hidden" />
    </>
  )
}
