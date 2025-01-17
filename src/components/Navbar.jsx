import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import '../styles/navbar.css'

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="h-20 flex justify-between items-center mx-24">
      <p className="name text-3xl font-bold dark:text-text-dark">Eva Orlandini<span className='text-primary text-6xl dark:text-primary-dark' >.</span></p>
      <div className='flex flex-row gap-9'>
      <div className="flex gap-4">
        <a href="#about" className="text-xl mx-4 text-text font-normal dark:text-text-dark">About</a>
        <a href="#projects" className="text-xl mx-4 text-text font-normal dark:text-text-dark">Projects</a>
        <a href="#contact" className="text-xl mx-4 text-text font-normal dark:text-text-dark">Contact</a>
      </div>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            className="sr-only"
          />
          <div className="block h-8 w-14 rounded-full bg-[#E5E7EB] dark:bg-gray-600"></div>
          <div
            className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition transform duration-200 ease-in-out ${
              theme === 'dark' ? 'translate-x-6' : ''
            }`}
          >
            {theme === 'dark' ? (
              <Moon className="h-4 w-4 text-blue-400" />
            ) : (
              <Sun className="h-4 w-4 text-yellow-400" />
            )}
          </div>
        </div>
      </label>
      </div>
    </div>
  )
}

export default Navbar
