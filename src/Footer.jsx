import './Footer.css'; // Importamos los estilos

const Footer = () => {
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
          <p className="footer-credit">Realizado por Centro de Ciencia Francisco José de Caldas</p>
          <div className="social-section">
            <p className="social-text">Visita nuestras redes sociales y nuestra web<br/>Facultad de Inteligencia Artificial e Ingenierías</p>
            <div className="social-icons">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
