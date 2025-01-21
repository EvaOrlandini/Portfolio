import "../styles/hero.css";
import lineArt from "../assets/images/lineart.png"; // Import direct du SVG
import { ReactComponent as Exclam } from "../assets/icons/exclam.svg";
import { ReactComponent as Flame} from "../assets/icons/flame.svg";
import { ReactComponent as Hand } from "../assets/icons/hand.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as Heart2 } from "../assets/icons/heart2.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { ReactComponent as Star2 } from "../assets/icons/star2.svg";
import { ReactComponent as Sun } from "../assets/icons/sun.svg";

const Hero = () => {
  const theme = localStorage.getItem('theme') || 'light';

  return (
    <div className="hero mb-44 max-md:mb-20">
      <div className="hero-content flex flex-row items-center w-9/12 max-md:flex-col mx-auto mt-32">
        <div className="w-6/12 max-md:w-full max-md:p-0">
          <h1 className="text-5xl max-md:text-4xl font-bold leading-tight text-text dark:text-text-dark">
            Hello, I'm a <span className="highlight-text">full-stack</span>
            web developer
          </h1>
          <p className="py-6 text-text dark:text-text-dark max-md:text-sm">
          I combine creativity and technical expertise to craft seamless, user-friendly websites. Passionate about bringing ideas to life through clean, modern code.
          </p>
          <button className="btn btn-primary border-1 border-primary-100 dark:border-primary-dark bg-transparent dark:text-text-dark">
            Download my CV
          </button>
          <button className="btn btn-primary bg-gray-200 ml-6">
            Contact me
          </button>
        </div>

        <div className="w-6/12 relative max-md:hidden">
          <img
            src={lineArt}
            alt="hero"
            className="h-[450px] mx-auto dark:opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
