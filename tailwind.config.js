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
        'primary': {
          DEFAULT: '#FD4D21',
          dark: '#8944ce',
          100: {
            DEFAULT: '#FD4D21',
            dark: '#8944ce'
          },
          200: {
            DEFAULT: '#FD4D21',
            dark: '#8944ce'
          }
        },
        'background': {
          DEFAULT: '#1A1A1A',
          dark: '#ffffff',
        },
        'text': {
          DEFAULT: '#1A1A1A',
          dark: '#ffffff',
        },
        'secondary': {
          DEFAULT: '#64748b',
          dark: '#94a3b8',
        },
        'accent': {
          DEFAULT: '#f59e0b',
          dark: '#fbbf24',
        }
      }
    }
  },
  plugins: [],
}
