import type { Config } from 'tailwindcss'
const defaultTheme = import('tailwindcss/defaultTheme')

export default <Partial<Config>>{
  darkMode: 'class', // Enable dark mode using the 'dark' class
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      colors: {
        nuclear: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e6fe',
          300: '#7cd4fd',
          400: '#36bffa',
          500: '#0ca7eb',
          600: '#008bd1',
          700: '#016aa3',
          800: '#065a86',
          900: '#0b4b6f',
          950: '#072f4a',
        },
        heroic: {
          black: '#000000', // Dark background color
          uranium: '#fefadc', // Thematic background color
          cherenkov: '#20C8FB', // Primary highlight color
          navy: '#1A74E2', // Secondary accent color
          raisin: '#1F2123', // Subtle section backgrounds
          lightgray: '#D3D3D3', // Text color for readability
        },
      },
      // backgroundImage: {
      //   'hero-pattern': "url('/images/bg/mt-diablo-1920x455.jpg')",
      //   'regular-pattern': "url('/images/WoN-title-banner-v3.jpg')",
      // },
      fontFamily: {
        // Add futuristic fonts for headings and body text
        heading: ['Orbitron', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        'body-serif': ['RobotoSerif', 'serif'],
        'heading-serif': ['Chonburi', 'serif'],
        'heading-slab': ['RobotoSlab', 'sans-serif'],
        cursive: ['Playwrite'],
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      boxShadow: {
        // Add glowing effects for hover states
        cherenkov: '0 0 10px #20C8FB',
      },
    },
  },
}
