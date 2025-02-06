import "../../styles/scss/style.scss";
import { saveAs } from "file-saver";
import lineArt from "../../assets/images/lineart.png";

const Hero = () => {
  const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/files/CV_EVA_ORLANDINI_2025.pdf`;
    saveAs(fileUrl, "CV_EVA_ORLANDINI_2025.pdf");
  };

  return (
    <section id="hero" className="section">
      <div className="container container--hero">
        <div className="hero__content">
          <h1 className="hero__title heading--h1">
            Hello, I'm a{" "}
            <span className="title__highlight title__highlight--lg">
              front-end
            </span>
            web developer
          </h1>
          <p className="hero__description paragraph paragraph--md py-6">
            I combine creativity and technical expertise to craft seamless,
            user-friendly websites. Passionate about bringing ideas to life
            through clean, modern code.
          </p>
          <div className="hero__buttons">
            <button onClick={handleDownload} className="btn btn--primary">
              Download my CV
            </button>
            <a href="#contact" className="btn btn--secondary">
              Contact me
            </a>
          </div>
        </div>

        <div className="hero__media">
          <img src={lineArt} alt="hero" className="hero__image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
