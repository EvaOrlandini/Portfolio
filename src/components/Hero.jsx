import "../styles/hero.css";
import { Download, Send } from 'lucide-react';
import { saveAs } from 'file-saver';
import lineArt from "../assets/images/lineart.png"; // Import direct du SVG
import { ReactComponent as Exclam } from "../assets/icons/exclam.svg";
import { ReactComponent as Flame} from "../assets/icons/flame.svg";
import { ReactComponent as Hand } from "../assets/icons/hand.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as Heart2 } from "../assets/icons/heart2.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { ReactComponent as Star2 } from "../assets/icons/star2.svg";
import { ReactComponent as Sun } from "../assets/icons/sun.svg";
import { ReactComponent as Arrow17 } from "../assets/icons/arrow-17.svg";

const Hero = () => {
  const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/files/CV_EVA_ORLANDINI_2025.pdf`;
    saveAs(fileUrl, 'CV_EVA_ORLANDINI_2025.pdf');
  };

  return (
    <div className="hero mb-20 max-md:mb-20">
      <div className="hero-content flex flex-row items-center w-9/12 max-md:flex-col mx-auto mt-20">
        <div className="w-6/12 max-md:w-full max-md:p-0">
          <h1 className="text-5xl max-md:text-4xl font-bold leading-tight text-text dark:text-text-dark">
            Hello, I'm a <span className="highlight-text">full-stack</span>
            web developer
          </h1>
          <p className="py-6 text-text dark:text-text-dark max-md:text-sm">
            I combine creativity and technical expertise to craft seamless, user-friendly websites. Passionate about bringing ideas to life through clean, modern code.
          </p>
          <div className="flex flex-row max-md:flex-col max-md:items-start gap-4">
            <button
              onClick={handleDownload}
              className="btn btn-primary border-[1px] text-text hover:bg-primary-100 hover:text-white dark:bg-background dark:hover:bg-primary-dark border-primary-100 dark:border-primary-dark bg-transparent dark:text-text-dark inline-flex items-center gap-2"
            >
              Download my CV
            </button>
            <a
              href="#contact"
              className="btn btn-primary bg-gray-200 text-text hover:bg-black hover:text-white inline-flex items-center justify-center gap-2"
            >
              Contact me
            </a>
          </div>
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
