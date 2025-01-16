import "../styles/about.css";
import { ReactComponent as Check } from "../assets/icons/check.svg";

const About = () => {
  return (
    <div id="about" className="mx-28 flex flex-col items-center mb-36">
      <h2 className="highlight-text-small text-black text-4xl font-bold mb-14">
        About
      </h2>
      <p className="text-center text-sm w-9/12">
        Quisque vitae risus et elit aliquam laoreet. Maecenas ut eros id eros
        lacinia lacinia. Donec vel metus venenatis, accumsan lorem et, suscipit
        ipsum. Quisque accumsan lobortis enim, ut vehicula quam ornare sed. Cras
        et purus nec orci hendrerit porta vel vitae nulla. Nunc faucibus mi ac
        accumsan viverra. Proin viverra ante ac consequat semper. Phasellus quis
        nisi malesuada, pulvinar sem et, semper justo. Nulla facilisi. Aliquam
        facilisis mauris pharetra eros iaculis laoreet. In fringilla neque
        scelerisque, molestie erat feugiat, tempor nibh. Sed sed condimentum
        ante. Nulla nec varius est. Nam iaculis urna id pharetra sodales.
      </p>
      <div className="flex flex-row my-12 gap-x-16 justify-center content-start flex-wrap">
        <span className="flex flex-row items-center justify-center">
          <Check className="w-[36px] h-auto mr-2" />
          <p className="text-black text-xl font-bold">Fast learning</p>
        </span>
        <span className="flex flex-row items-center justify-center">
          <Check className="w-[36px] h-auto mr-2" />
          <p className="text-black text-xl font-bold">Creativity</p>
        </span>
        <span className="flex flex-row items-center justify-center">
          <Check className="w-[36px] h-auto mr-2" />
          <p className="text-black text-xl font-bold">Solving problems</p>
        </span>
      </div>

      <div className="w-full mt-6 flex flex-row gap-10 justify-center content-start flex-wrap">
        {/* HTML */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FFF4E6] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-html5-plain text-gray-600 group-hover:text-[#E34F26] transition-colors duration-200"></i>
          <p className="font-medium text-md">HTML</p>
        </div>

        {/* JavaScript */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FFF8E1] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-javascript-plain text-gray-600 group-hover:text-[#F7DF1E] transition-colors duration-200"></i>
          <p className="font-medium text-md">JavaScript</p>
        </div>

        {/* CSS */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E3F2FD] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-css3-plain text-gray-600 group-hover:text-[#1572B6] transition-colors duration-200"></i>
          <p className="font-medium text-md">CSS</p>
        </div>

        {/* React */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E1F5FE] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-react-original text-gray-600 group-hover:text-[#61DAFB] transition-colors duration-200"></i>
          <p className="font-medium text-md">React</p>
        </div>

        {/* Ruby */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FFEBEE] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-ruby-plain text-gray-600 group-hover:text-[#CC342D] transition-colors duration-200"></i>
          <p className="font-medium text-md">Ruby</p>
        </div>

        {/* Ruby on Rails */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FFEBEE] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-rails-plain text-gray-600 group-hover:text-[#CC0000] transition-colors duration-200"></i>
          <p className="font-medium text-md">Ruby on Rails</p>
        </div>

        {/* Sass */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FCE4EC] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-sass-original text-gray-600 group-hover:text-[#CC6699] transition-colors duration-200"></i>
          <p className="font-medium text-md">Sass</p>
        </div>

        {/* Tailwind */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E0F7FA] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-tailwindcss-plain text-gray-600 group-hover:text-[#06B6D4] transition-colors duration-200"></i>
          <p className="font-medium text-md">Tailwind</p>
        </div>

        {/* Bootstrap */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#F3E5F5] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-bootstrap-plain text-gray-600 group-hover:text-[#7952B3] transition-colors duration-200"></i>
          <p className="font-medium text-md">Bootstrap</p>
        </div>

        {/* SQL */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E1F5FE] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-postgresql-plain text-gray-600 group-hover:text-[#4169E1] transition-colors duration-200"></i>
          <p className="font-medium text-md">SQL</p>
        </div>

        {/* Github */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#F5F5F5] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-github-original text-gray-600 group-hover:text-[#181717] transition-colors duration-200"></i>
          <p className="font-medium text-md">Github</p>
        </div>

        {/* Figma */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#F3E5F5] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-figma-plain text-gray-600 group-hover:text-[#F24E1E] transition-colors duration-200"></i>
          <p className="font-medium text-md">Figma</p>
        </div>

        {/* Photoshop */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E3F2FD] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-photoshop-plain text-gray-600 group-hover:text-[#31A8FF] transition-colors duration-200"></i>
          <p className="font-medium text-md">Photoshop</p>
        </div>

        {/* Illustrator */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#FBE9E7] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-illustrator-plain text-gray-600 group-hover:text-[#FF9A00] transition-colors duration-200"></i>
          <p className="font-medium text-md">Illustrator</p>
        </div>

        {/* VS Code */}
        <div className="badge group w-fit h-fit flex flex-row items-center justify-center bg-gray-200 hover:bg-[#E3F2FD] px-3 py-1 rounded-md gap-3 transition-colors duration-200">
          <i className="devicon-vscode-plain text-gray-600 group-hover:text-[#007ACC] transition-colors duration-200"></i>
          <p className="font-medium text-md">VS Code</p>
        </div>
      </div>
    </div>
  );
};

export default About;
