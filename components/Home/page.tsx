import About from './About/page'
import Hero from './Hero/page'
import Services from './Services/page'

const Home = () => {
  return (
    <div className="overflow-hidden">
       <Hero/>
       <About/>
       <Services/>
    </div>
  )
}

export default Home
