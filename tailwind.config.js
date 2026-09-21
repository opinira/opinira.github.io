/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F5F1E8',
          muted: '#ECE5D8',
          card: '#FFFFFF',
          border: 'rgba(20, 43, 74, 0.1)',
        },
        navy: {
          DEFAULT: '#142B4A',
          royal: '#142B4A',
          deep: '#0E1E34',
          muted: '#2D4566',
          slate: '#486581',
          surface: '#1E3C66',
          card: '#FFFFFF',
          elevated: '#244574',
          border: 'rgba(20, 43, 74, 0.1)',
        },
        ivory: {
          DEFAULT: '#F5F1E8',
          light: '#FAF7F2',
          muted: '#ECE5D8',
          dark: '#E0D7C5',
        },
        bronze: {
          DEFAULT: '#A98252',
          light: '#C59F6E',
          dark: '#876337',
          glow: 'rgba(169, 130, 82, 0.25)',
        },
        softgray: {
          DEFAULT: '#486581',
          muted: '#627D98',
          dark: '#142B4A',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      aspectRatio: {
        '1/1': '1 / 1',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
