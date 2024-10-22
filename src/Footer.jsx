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
              <p>Portal Institucional</p>
              <p>Sistema Integrado de Gestión</p>
              <p>Campus Virtual</p>
            </div>
            <div className="right-content">
              <h3 className="footer-subtitle">Facultad</h3>
              <p>Página web</p>
              <p>Dirección</p>
              <p>Teléfono</p>
              <p>Correo electrónico</p>
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
