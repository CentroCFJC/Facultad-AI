import { useEffect } from 'react';
import './Header.css'
import videofondo from './assets/Fondo_header_1.mp4';
import anime from 'animejs';


function Header () {
    useEffect(() => {
        // Divide el texto en spans para que puedas animar cada letra
        const textWrapper = document.querySelector('.typewriter');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");;
    
        anime.timeline({ loop: false })
          .add({
            targets: '.typewriter .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 150,
            delay: (el, i) => 50 * i, // Controla la velocidad de escritura
          });
      }, []);

    return (
        <div className="video-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={videofondo} type="video/mp4" />
            </video>
            <h1 className="typewriter">
            Impulsamos el desarrollo 
            del país con la FACULTAD DE
            IA e Ingenierías
            </h1>
        </div>
    )
}

export default Header