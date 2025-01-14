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
  return (
    <div className="hero mb-44">
      <div className="hero-content flex flex-row items-center w-9/12 mx-auto mt-32">
        <div className="w-6/12 pr-6">
          <h1 className="text-5xl font-bold leading-tight text-black">
            Hey, I'm a <span className="highlight-text">front-end</span>
            developer
          </h1>
          <p className="py-6 text-black dark:text-white">
            After 5 years of studies and several diplomas in business, I decided
            to move towards my true passion: creating. I challenged myself to
            become a self-taught web designer and front-end developer.
          </p>
          <button className="btn btn-primary border-1 border-primary-100">
            Download my CV
          </button>
          <button className="btn btn-primary bg-gray-200 ml-6">
            Contact me
          </button>
        </div>

        <div className="w-6/12 relative">
        {/* <Exclam className="draw w-[70px] h-auto absolute top-24 right-20"/>
        <Flame className="draw w-[50px] h-auto absolute top-32 left-16"/>
        <Hand className="draw w-[36px] h-auto absolute bottom-28 right-24"/>
        <Heart className="draw w-[40px] h-auto absolute bottom-40 left-20"/>
        <Heart2 className="draw w-[40px] h-auto absolute top-4 right-36"/>
        <Star className="draw w-[45px] h-auto absolute top-48 right-20"/>
        <Star2 className="draw w-[50px] h-auto absolute top-8 left-28"/>
        <Sun className="draw w-[50px] h-auto absolute bottom-16 left-24"/> */}
        <img src={lineArt} alt="hero" className="h-[450px] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
