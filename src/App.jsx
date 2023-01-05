import Layout from './components/Layout'
import CarouselSection from './components/CarouselSection'
import AboutMeSection from './components/AboutMeSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'


import './App.css'

function App() {

  return (
    <div className="App">
      <Layout>
        <CarouselSection/>
        <AboutMeSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ExperienceSection/>
        <ContactSection/>
      </Layout>
    </div>
  )
}

export default App
