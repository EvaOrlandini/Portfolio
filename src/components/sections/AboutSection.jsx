import "../../styles/scss/style.scss";
import checkIcon from "../../assets/icons/check.svg";

const About = () => {
  const softSkills = ["Fast learning", "Creativity", "Solving problems"];

  const hardSkills = {
    HTML5: "#E34F26",
    JavaScript: "#F7DF1E",
    CSS3: "#1572B6",
    React: "#61DAFB",
    Ruby: "#CC342D",
    Rails: "#CC0000",
    Sass: "#CC6699",
    TailwindCss: "#06B6D4",
    Bootstrap: "#7952B3",
    SQL: "#4169E1",
    Github: "#181717",
    Figma: "#F24E1E",
    Photoshop: "#31A8FF",
    Illustrator: "#FF9A00",
    "VS Code": "#007ACC",
  };

  return (
    <section id="about" className="section">
      <div className="container container--about">
        <h2 className="about__title heading--h2 title__highlight title__highlight--sm">
          About
        </h2>

        <p className="about__description paragraph paragraph--sm">
          My journey into web development is driven by a passion for the perfect
          combination of creativity and technical skills. With a master’s degree
          in digital marketing and experience in project management, I bring a
          dual expertise to the table. After teaching myself the fundamentals of
          coding, I further strengthened my skills through an intensive
          full-stack bootcamp. This blend of experiences has made me highly
          adaptable and ready to tackle diverse challenges, transforming ideas
          into impactful digital solutions.
        </p>

        <div className="about__skills-soft">
          {softSkills.map((skill) => (
            <span className="soft-skills">
              <img src={checkIcon} alt="check" className="soft-skills__icon" />
              <p className="soft-skills__text">{skill}</p>
            </span>
          ))}
        </div>

        <div className="about__skills-hard">
          {Object.entries(hardSkills).map(([skill, color]) => (
            <div
              key={skill}
              className="badge badge--lg animation--float"
              style={{ "--hover-color": color }}
            >
              <i
                className={`badge__icon devicon-${skill
                  .toLowerCase()
                  .replace(/\s/g, "")}-plain`}
              ></i>
              <p className="badge__text">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
