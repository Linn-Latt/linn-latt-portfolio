import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: {
          light: '#343131',    // Dark text for light mode
          dark: '#FAF6F0',     // Light text for dark mode
        },
        secondary: {
          light: '#6b7280',    // Gray text for light mode  
          dark: '#d1d5db',     // Light gray text for dark mode
        },
        accent: {
          light: '#C07F00',    // Orange accent for light mode
          dark: '#EEDF7A',     // Yellow accent for dark mode
        },
        background: {
          light: '#ffffff',    // White background for light mode
          dark: '#343131',     // Dark background for dark mode
        }
      }
    },
  },
  plugins: [],
}

export default config