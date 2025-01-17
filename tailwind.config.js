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
          DEFAULT: '#ffffff',
          dark: '#121212',
        },
        'text': {
          DEFAULT: '#333333',
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
