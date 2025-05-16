import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Obtene las últimas novedades</h4>
        <div className="subscribe-container">
          <input type="email" placeholder="Ingresa tu email*" />
          <button>Suscribite</button>
        </div>
        <p>Mantente informado sobre las últimas novedades de tecnología.</p>
      </div>
      <div className="midFooter">
        <h1>ASUSER</h1>
        <p>Siempre un paso adelante.</p>
        <p>© 2025 Asuser. Todos los derechos reservados.</p>
      </div>
      <div className="rightFooter">
        <h4>Enlaces</h4>
        <ul>
          <li>Nosotros</li>
          <li>Contactanos</li>
          <li>Referencias</li>
          <li>Defensa al consumidor</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
