import dashlyVideo from '../assets/videos/dashly.mp4'
import bantuVideo from '../assets/videos/bantu.mp4'
import cvOnlineVideo from '../assets/videos/CV_online.mp4'
import retroGames from '../assets/videos/retro_games.mp4'

export const projectsData = [
  {
    id: 1,
    title: "Dashly",
    description1: `Developed in two weeks by a team of five during Le Wagon training, Dashly showcases my role as a Full-Stack Developer and Front-End Lead, as well as my ability to collaborate and meet tight deadlines.`,
    description2: `Dashly is a sleek app that centralizes key metrics into one dashboard. I designed and implemented a modern interface using TailwindCSS. The site is optimized for desktop due to time constraints.`,
    technologies: ["Ruby on Rails", "Tailwind CSS", "Stimulus JS"],
    video: dashlyVideo,
    githubUrl: "https://github.com/EvaOrlandini/Dashly",
    demoUrl: "http://www.dashlyapp.me/",
    lineWidth: "90", // Classe Tailwind pour la largeur de la ligne décorative
  },
  {
    id: 2,
    title: "Bantu",
    description1: "Built in one week by a team of five during Le Wagon training, Bantu highlights my role as a Full-Stack Developer and Front-End Lead, ensuring both functionality and an accessible interface.",
    description2: "Bantu is a platform that connects visually impaired individuals in Bali with local service providers. I designed and built an intuitive, user-friendly front-end using Bootstrap, optimized for desktop use.",
    technologies: ["Ruby on Rails", "Bootstrap", "Stimulus JS"],
    video: bantuVideo,
    githubUrl: "https://github.com/EvaOrlandini/Bantu",
    demoUrl: "",
    lineWidth: "120", // Classe Tailwind pour la largeur de la ligne décorative
  },
  {
    id: 3,
    title: "CV Online",
    description1: "Virtual showcase created during my self-taught apprenticeship as a practical project. This website acts as an online CV, reflecting my creative universe and demonstrating my web development skills.",
    description2: "I created V1 and V2, each with its own design. Both versions of the site incorporate advanced features, such as full responsiveness for an optimal experience on all devices, a contact form for easy communication, and an intuitive menu for easy navigation.",
    technologies: ["HTML", "Sass", "JavaScript"],
    video: cvOnlineVideo,
    githubUrl: "",
    demoUrl: "http://cvproject.evaorlandini.com/",
    lineWidth: "60", // Classe Tailwind pour la largeur de la ligne décorative
  },
  {
    id: 4,
    title: "Retro games",
    description1: "A small Ruby on Rails app featuring a collection of mini-games with a retro design. Built using Bootstrap for a classic pixel-art aesthetic and smooth responsiveness.",
    description2: "Play, compete, and enjoy a nostalgic arcade experience!",
    technologies: ["Ruby On Rails", "Bootstrap", "JavaScript"],
    video: retroGames,
    githubUrl: "https://github.com/EvaOrlandini/retro-games",
    demoUrl: "https://retro-games-pobw.onrender.com",
    lineWidth: "80", // Classe Tailwind pour la largeur de la ligne décorative
  },
]
