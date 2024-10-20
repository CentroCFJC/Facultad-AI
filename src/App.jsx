import Accordion from './Acordion.jsx'
import './App.css'
import Header from './Header.jsx'
import InfoProyecto from './InfoProyecto.jsx'
import Reproductor from './Reproductor.jsx'
import Texto1 from './Texto1.jsx'
import Texto2 from './Texto2.jsx'
import ImageGallery from './ImageGallery.jsx'
import Fondo from './Fondo.jsx'
import ImageCarousel from './ImageCarousel.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
    <div className="background-container">
      <Header/>
      <Texto1/>
      <Reproductor/>
      <Accordion/>
      <Texto2 />
      <ImageCarousel />
      <ImageGallery />
      <Footer/>
      {/* <InfoProyecto/> */}
    </div> 
    </>
  )
}

export default App
