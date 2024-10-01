import './Header.css'
import videofondo from './assets/Fondo_header_1.mp4';

function Header () {

    return (
        <div className="video-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={videofondo} type="video/mp4" />
            </video>
            <img src="./assets/BANNER INTRO FAC IA.png"></img>
        </div>
    )
}

export default Header