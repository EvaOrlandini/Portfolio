import Navbar from '../components/common/Navbar'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import { ProjectsSection } from '../components/sections/projects/ProjectsSection'
import ContactSection from '../components/sections/ContactSection'

const Home = () => {
  return (
      <div>
        <Navbar/>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
  )
}

export default Home
