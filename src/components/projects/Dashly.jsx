import dashlyVideo from '../../assets/videos/dashly.mp4';
import { Github, SquareArrowOutUpRight } from 'lucide-react'

const Dashly = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4 ">
        <div className="flex flex-row items-center gap-4">
          <h3 className="text-3xl font-bold dark:text-text-dark">Dashly</h3>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs max-md:hidden">Ruby on Rails</span>
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs max-md:hidden">Tailwind CSS</span>
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs max-md:hidden">Stimulus JS</span>
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href="https://github.com/EvaOrlandini/Dashly"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-md shadow-input bg-black dark:bg-text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className='text-white dark:text-text' />
          </a>
          <a
            href="http://www.dashlyapp.me/"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-md shadow-input bg-primary-100 dark:bg-primary-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight className='text-white' />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-center mb-4">
        <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs md:hidden">Ruby on Rails</span>
        <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs md:hidden">Tailwind CSS</span>
        <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs md:hidden">Stimulus JS</span>
      </div>
      <p className="mb-4 text-sm max-md:text-xs dark:text-text-dark">Developed in two weeks by a team of five during Le Wagon training, Dashly showcases my role as a Full-Stack Developer and Front-End Lead, as well as my ability to collaborate and meet tight deadlines.      </p>
      <p className="mb-4 text-sm max-md:text-xs dark:text-text-dark">Dashly is a sleek app that centralizes key metrics into one dashboard. I designed and implemented a modern interface using TailwindCSS. The site is optimized for desktop due to time constraints.</p>
      <div className="mb-4">
        <video
          className="w-full object-cover rounded-md"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={dashlyVideo} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </div>
  );
};

export default Dashly;
