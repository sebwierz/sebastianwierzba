import Layout from './components/Layout'
import Carousel from './components/Carousel'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'


import './App.css'

function App() {

  return (
    <div className="App">
      <Layout>
        <Carousel/>
        <AboutMe/>
        <Contact/>
      </Layout>
    </div>
  )
}

export default App
