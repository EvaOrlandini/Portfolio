import dashlyVideo from '../../assets/videos/dashly.mp4';
import { Github, SquareArrowOutUpRight } from 'lucide-react'

const Bantu = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-6 ">
        <div className="flex flex-row items-center gap-4">
          <h3 className="text-3xl font-bold">Bantu</h3>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs">Ruby on Rails</span>
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs">Bootstrap</span>
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs">Stimulus JS</span>
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href="https://github.com/..."
            className="w-[36px] h-[36px] flex items-center justify-center rounded-md shadow-input bg-black hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className='text-white' />
          </a>
          <a
            href="https://demo..."
            className="w-[36px] h-[36px] flex items-center justify-center rounded-md shadow-input bg-primary-100 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight className='text-white' />
          </a>
        </div>
      </div>
      <p className="mb-4 text-sm">Built in one week by a team of five during Le Wagon training, Bantu highlights my role as a Full-Stack Developer and Front-End Lead, ensuring both functionality and an accessible interface.</p>
      <p className="mb-4 text-sm">Bantu is a platform that connects visually impaired individuals in Bali with local service providers. I designed and built an intuitive, user-friendly front-end using Bootstrap, optimized for desktop use.</p>
      <div className="relative w-full mb-4">
        <video
          className="w-full h-full object-cover rounded-lg"
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

export default Bantu;
