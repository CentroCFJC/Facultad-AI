import './Footer.css'; // Importamos los estilos

const Footer = () => {
  const redirectToFacebook = () => {
    window.open('https://www.facebook.com/udecaldas/', '_blank');
  };

  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/udecaldas/', '_blank')
  };

  const redirectToWeb = () => {
    window.open('https://www.ucaldas.edu.co/portal/', '_blank')
  };

  const redirecToSIG = () => {
    window.open('http://sig.ucaldas.edu.co/gestionDocumental/', '_blank')
  };

  const redirecToCampus = () => {
    window.open('https://virtual.ucaldas.edu.co/', '_blank')
  };

  const redirecToInge = () => {
    window.open('https://ingenierias.ucaldas.edu.co/', '_blank')
  };

  const redirecToDir = () => {
    window.open('https://www.google.com/maps/dir/5.0397184,-75.4712576/ucaldas/@5.0469285,-75.5012375,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8e476564a7bfefc7:0xc1e29e2ea369afb6!2m2!1d-75.4928883!2d5.0559546?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D','_blank')
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Sección izquierda */}
          <div className="left-section">
            <div className="white-box"></div>
            <h2 className="footer-title">Regístrate para<br />más información</h2>
          </div>

          {/* Sección derecha */}
          <div className="right-section">
            <div className="right-content">
              <h3 className="footer-subtitle">Universidad</h3>
              <p onClick={redirectToWeb} className='subtitle'>Portal Institucional</p>
              <p onClick={redirecToSIG} className='subtitle'>Sistema Integrado de Gestión</p>
              <p onClick={redirecToCampus} className='subtitle'>Campus Virtual</p>
            </div>
            <div className="right-content">
              <h3 className="footer-subtitle">Facultad</h3>
              <p onClick={redirecToInge} className='subtitle'>Página web</p>
              <p onClick={redirecToDir} className='subtitle'>Dirección</p>
              <p>Tel (606) 8781500</p>
              <p>atencionalciudadano@ucaldas.edu.co</p>
            </div>
          </div>
        </div>

        {/* Sección inferior */}
        <div className="footer-bottom">
          <img src='/logos.png' className='logos' alt='logos'/>
          <p className="footer-credit">Realizado por Centro de Ciencia Francisco José de Caldas</p>
          <div className="social-section">
            <p className="social-text">Visita nuestras redes sociales y nuestra web<br/>Facultad de Inteligencia Artificial e Ingenierías</p>
          </div>
          <div className="social-icons">
            <img src='/facebook-svgrepo-com.svg' className='icon' alt='Facebook' onClick={redirectToFacebook}/>
            <img src='/instagram-167-svgrepo-com.svg' className='icon' alt='Instagram' onClick={redirectToInstagram}/>
            <img src='/web-svgrepo-com.svg' className='icon' alt='Web' onClick={redirectToWeb}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
