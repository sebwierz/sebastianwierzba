import Layout from './components/Layout'
import CarouselSection from './components/CarouselSection'
import AboutMeSection from './components/AboutMeSection'
import ContactSection from './components/ContactSection'


import './App.css'

function App() {

  return (
    <div className="App">
      <Layout>
        <CarouselSection/>
        <AboutMeSection/>
        <ContactSection/>
      </Layout>
    </div>
  )
}

export default App
