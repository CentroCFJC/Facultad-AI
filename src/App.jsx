import Accordion from './Acordion.jsx'
import './App.css'
import Header from './Header.jsx'
import InfoProyecto from './InfoProyecto.jsx'
import Reproductor from './Reproductor.jsx'
import Texto1 from './Texto1.jsx'
import Texto2 from './Texto2.jsx'

function App() {

  return (
    <>
      <Header/>
      <Texto1/>
      <Reproductor/>
      <Accordion/>
      <Texto2 />
      <InfoProyecto/>
    </>
  )
}

export default App
