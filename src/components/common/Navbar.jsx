import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import '../../styles/scss/style.scss'

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-full px-32 h-20 flex justify-between max-md:px-8 items-center  dark:bg-text">

      {/* Name */}
      <p className="logo">Eva Orlandini<span className='text-primary text-6xl dark:text-primary-dark' >.</span></p>

      {/* Menu burger icon */}
      <div className="md:hidden max-md:order-last">
        <div
          onClick={toggleMenu}
          className="ml-4 text-black focus:outline-none"
        >
          {/* Icone du menu burger */}
          <svg className="w-8 h-8 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </div>
      </div>

      <div className='flex flex-row gap-9'>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4">
        <a href="#about" className="text-xl mx-4 text-text font-normal dark:text-text-dark hover:text-primary-100 dark:hover:text-primary-dark">About</a>
        <a href="#projects" className="text-xl mx-4 text-text font-normal dark:text-text-dark hover:text-primary-100 dark:hover:text-primary-dark">Projects</a>
        <a href="#contact" className="text-xl mx-4 text-text font-normal dark:text-text-dark hover:text-primary-100 dark:hover:text-primary-dark">Contact</a>
      </div>

      {/* Mobile menu */}
      <div
        className="slide flex bg-primary-100 dark:bg-primary-dark flex-col gap-6 pt-20 justify-start items-center z-10 w-full h-full md:hidden"
        data-open={isOpen}
      >
        <div
          onClick={toggleMenu}
          className='absolute top-6 right-8 text-white dark:text-text'>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </div>
        <a onClick={toggleMenu} href="#about" className="text-3xl mx-4 text-text-dark dark:text-text font-bold">About</a>
        <a onClick={toggleMenu} href="#projects" className="text-3xl mx-4 text-text-dark dark:text-text font-bold">Projects</a>
        <a onClick={toggleMenu} href="#contact" className="text-3xl mx-4 text-text-dark dark:text-text font-bold">Contact</a>
      </div>

      {/* Theme Controller */}
      <label className="theme-controller">
        <div className="theme-controller__container">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            className="theme-controller__input"
          />
          <div className="theme-controller__background"></div>
          <div
            className={`theme-controller__toggle ${
              theme === 'dark' ? 'theme-controller__toggle--dark' : ''
            }`}
          >
            {theme === 'dark' ? (
              <Moon className="theme-controller__icon theme-controller__icon--dark" />
            ) : (
              <Sun className="theme-controller__icon theme-controller__icon--light" />
            )}
          </div>
        </div>
      </label>

      </div>

    </div>
  )
}

export default Navbar
