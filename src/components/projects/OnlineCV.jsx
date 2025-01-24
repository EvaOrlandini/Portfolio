import onlineCV from '../../assets/videos/CV_online.mp4';
import { Github, SquareArrowOutUpRight } from 'lucide-react'

const OnlineCV = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4 ">
        <div className="flex flex-row items-center gap-4">
          <h3 className="text-3xl font-bold dark:text-text-dark">Online CV</h3>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs max-md:hidden">HTML</span>
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs max-md:hidden">Sass</span>
            <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs max-md:hidden">JavaScript</span>
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href="http://cvproject.evaorlandini.com/"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-md shadow-input bg-primary-100 dark:bg-primary-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight className='text-white' />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-center mb-4">
        <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs md:hidden">HTML</span>
        <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs md:hidden">Sass</span>
        <span className="px-2 py-2 bg-gray-100 rounded-lg text-xs md:hidden">JavaScript JS</span>
      </div>
      <p className="mb-4 text-sm max-md:text-xs dark:text-text-dark">Virtual showcase created during my self-taught apprenticeship as a practical project. This website acts as an online CV, reflecting my creative universe and demonstrating my web development skills.
      </p>
      <p className="mb-4 text-sm max-md:text-xs dark:text-text-dark">I created V1 and V2, each with its own design. Both versions of the site incorporate advanced features, such as full responsiveness for an optimal experience on all devices, a contact form for easy communication, and an intuitive menu for easy navigation.</p>
      <div className="mb-4">
        <video
          className="w-full object-cover rounded-md"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={onlineCV} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </div>
  );
};

export default OnlineCV;
