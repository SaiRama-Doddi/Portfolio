import About from './About/page'
import Contact from './Contact/page'
import Hero from './Hero/page'
import Services from './Services/page'
import Skills from './Skills/page'

const Home = () => {
  return (
    <div className="overflow-hidden">
       <Hero/>
       <About/>
       <Services/>
       <Skills/>
       <Contact/>
    </div>
  )
}

export default Home
