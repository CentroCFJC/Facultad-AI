import { useEffect, useRef } from 'react';
import './Header.css';
import videofondo from './assets/Fondo_header_Without_logo.mp4';
import anime from 'animejs';
import logoFacu from './assets/logo_FACIAING.png'

function Header() {
    const sidebarRef = useRef(null); // Crear referencia para la barra lateral
    useEffect(() => {
        // Divide el texto en spans para que puedas animar cada letra en cada línea
        const textWrapper = document.querySelectorAll('.typewriter div');
        textWrapper.forEach((line) => {
            line.innerHTML = line.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        });

        // Animación de la barra lateral
        anime({
            targets: sidebarRef.current,
            opacity: [0, 1], // Desde 0 a 1
            duration: 1000, // Duración de la animación
            easing: 'easeInOutQuad', // Easing de la animación
        });

        anime.timeline({ loop: false })
          .add({
            targets: '.typewriter .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 150,
            delay: (el, i) => 50 * i,
          });
    }, []);

    return (
        <div className="video-container">
            <img className="logoFacu" src={logoFacu}/>
            <video autoPlay loop muted playsInline className="background-video">
                <source src={videofondo} type="video/mp4" />
            </video>
            <div className="sidebar" ref={sidebarRef}></div>  
            <div className="typewriter-container" >
                <h1 className="typewriter">
                 
                    <div>Impulsamos el desarrollo</div>
                    <div>del país con la FACULTAD DE</div>
                    <div>IA e Ingenierías</div>
                </h1>
            </div>
        </div>
    );
}

export default Header;