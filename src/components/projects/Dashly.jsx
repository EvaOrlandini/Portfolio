import dashlyVideo from '../../assets/videos/dashly.mp4';
import { Github, SquareArrowOutUpRight } from 'lucide-react'

const Dashly = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-6 ">
        <div className="flex flex-row items-center gap-4">
          <h3 className="text-3xl font-bold">Dashly</h3>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs">Ruby on Rails</span>
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs">Tailwind CSS</span>
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs">Stimulus JS</span>
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href="https://github.com/..."
            className="w-[35px] h-[35px] flex items-center justify-center rounded-md shadow-input bg-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className='text-white' />
          </a>
          <a
            href="https://demo..."
            className="w-[35px] h-[35px] flex items-center justify-center rounded-md shadow-input bg-primary-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight className='text-white' />
          </a>
        </div>
      </div>
      <p className="mb-4 text-sm">Developed in two weeks by a team of five during Le Wagon training, Dashly showcases my role as a Full-Stack Developer and Front-End Lead, as well as my ability to collaborate and meet tight deadlines.      </p>
      <p className="mb-4 text-sm">Dashly is a sleek app that centralizes key metrics into one dashboard. I designed and implemented a modern interface using TailwindCSS. The site is optimized for desktop due to time constraints.</p>
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
