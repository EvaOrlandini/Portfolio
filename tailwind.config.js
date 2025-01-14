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
          100: '#FD4D21',
          200: '#ff6b47',
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
