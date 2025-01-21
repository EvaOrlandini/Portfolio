import "../styles/about.css";
import checkIcon from "../assets/icons/check.svg";

const About = () => {
  return (
    <div id="about" className="mx-28 max-md:mx-0 flex flex-col items-center mb-36 max-md:mb-20">
      <h2 className="highlight-text-small text-text text-4xl max-md:text-3xl font-bold mb-14 max-md:mb-6 dark:text-text-dark">
        About
      </h2>
      <p className="text-center leading-relaxed max-md:leading-relaxed max-md:text-xs text-sm  w-8/12 dark:text-text-dark">
      My journey into web development is driven by a passion for the perfect combination of creativity and technical skills. With a master’s degree in digital marketing and experience in project management, I bring a dual expertise to the table. After teaching myself the fundamentals of coding, I further strengthened my skills through an intensive full-stack bootcamp. This blend of experiences has made me highly adaptable and ready to tackle diverse challenges, transforming ideas into impactful digital solutions.
      </p>
      <div className="flex flex-row max-md:flex-col my-12 max-md:my-10 gap-x-16 justify-center content-start flex-wrap">
        <span className="flex flex-row items-center justify-center max-md:mb-6">
          <img
            src={checkIcon}
            alt="check"
            className="w-[36px] h-auto mr-2 check-icon max-md:w-[28px]"
          />
          <p className="text-text text-xl max-md:text-lg font-bold dark:text-text-dark">Fast learning</p>
        </span>
        <span className="flex flex-row items-center justify-center max-md:mb-6">
          <img
            src={checkIcon}
            alt="check"
            className="w-[36px] h-auto mr-2 check-icon max-md:w-[28px]"
          />
          <p className="text-text text-xl max-md:text-lg font-bold dark:text-text-dark">Creativity</p>
        </span>
        <span className="flex flex-row items-center justify-center max-md:mb-6">
          <img
            src={checkIcon}
            alt="check"
            className="w-[36px] h-auto mr-2 check-icon max-md:w-[28px]"
          />
          <p className="text-text text-xl max-md:text-lg font-bold dark:text-text-dark">Solving problems</p>
        </span>
      </div>

      <div className="w-full max-md:w-10/12 mt-6 max-md:mt-0 flex flex-row gap-10 max-md:gap-6 justify-center content-start flex-wrap">
        {/* HTML */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FFF4E6] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-html5-plain text-gray-600 group-hover:text-[#E34F26] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">HTML</p>
        </div>

        {/* JavaScript */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FFF8E1] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-javascript-plain text-gray-600 group-hover:text-[#F7DF1E] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">JavaScript</p>
        </div>

        {/* CSS */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E3F2FD] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-css3-plain text-gray-600 group-hover:text-[#1572B6] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">CSS</p>
        </div>

        {/* React */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E1F5FE] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-react-original text-gray-600 group-hover:text-[#61DAFB] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">React</p>
        </div>

        {/* Ruby */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FFEBEE] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-ruby-plain text-gray-600 group-hover:text-[#CC342D] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">Ruby</p>
        </div>

        {/* Ruby on Rails */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FFEBEE] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-rails-plain text-gray-600 group-hover:text-[#CC0000] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">Ruby on Rails</p>
        </div>

        {/* Sass */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FCE4EC] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-sass-original text-gray-600 group-hover:text-[#CC6699] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">Sass</p>
        </div>

        {/* Tailwind */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E0F7FA] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-tailwindcss-plain text-gray-600 group-hover:text-[#06B6D4] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">Tailwind</p>
        </div>

        {/* Bootstrap */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#F3E5F5] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-bootstrap-plain text-gray-600 group-hover:text-[#7952B3] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">Bootstrap</p>
        </div>

        {/* SQL */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E1F5FE] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-postgresql-plain text-gray-600 group-hover:text-[#4169E1] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">SQL</p>
        </div>

        {/* Github */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#F5F5F5] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-github-original text-gray-600 group-hover:text-[#181717] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">Github</p>
        </div>

        {/* Figma */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#F3E5F5] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-figma-plain text-gray-600 group-hover:text-[#F24E1E] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">Figma</p>
        </div>

        {/* Photoshop */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E3F2FD] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-photoshop-plain text-gray-600 group-hover:text-[#31A8FF] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">Photoshop</p>
        </div>

        {/* Illustrator */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FBE9E7] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-illustrator-plain text-gray-600 group-hover:text-[#FF9A00] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">Illustrator</p>
        </div>

        {/* VS Code */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E3F2FD] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-vscode-plain text-gray-600 group-hover:text-[#007ACC] transition-colors duration-200"></i>
          <p className="font-medium text-md max-md:text-xs">VS Code</p>
        </div>
      </div>
    </div>
  );
};

export default About;
