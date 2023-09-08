import Hero from './components/Hero'
import Feature from './components/Feature'
import Trust from './components/Trust'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Feature />
      <Trust/>
      <Footer/>
    </div>
  )
}
