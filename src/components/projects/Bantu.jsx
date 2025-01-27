import bantuVideo from '../../assets/videos/bantu.mp4';
import { Github, SquareArrowOutUpRight } from 'lucide-react'

const Bantu = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4 ">
        <div className="flex flex-row items-center gap-4">
          <h3 className="text-3xl font-bold dark:text-text-dark">Bantu</h3>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs max-md:hidden">Ruby on Rails</span>
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs max-md:hidden">Bootstrap</span>
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs max-md:hidden">Stimulus JS</span>
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href="https://github.com/..."
            className="w-[35px] h-[35px] flex items-center justify-center rounded-md shadow-input bg-black dark:bg-text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className='text-white dark:text-text' size={20}/>
          </a>

        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-center mb-4">
        <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs md:hidden">Ruby on Rails</span>
        <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs md:hidden">Bootstrap</span>
        <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs md:hidden">Stimulus JS</span>
      </div>
      <p className="mb-4 text-sm max-md:text-xs dark:text-text-dark">Built in one week by a team of five during Le Wagon training, Bantu highlights my role as a Full-Stack Developer and Front-End Lead, ensuring both functionality and an accessible interface.</p>
      <p className="mb-4 text-sm max-md:text-xs dark:text-text-dark">Bantu is a platform that connects visually impaired individuals in Bali with local service providers. I designed and built an intuitive, user-friendly front-end using Bootstrap, optimized for desktop use.</p>
      <div className="mb-4">
        <video
          className="w-full object-cover rounded-md"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bantuVideo} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </div>
  );
};

export default Bantu;
