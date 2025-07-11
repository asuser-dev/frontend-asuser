import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleConsumerDefenseClick = () => {
    window.open(
      "https://www.argentina.gob.ar/economia/industria-y-comercio/defensadelconsumidor",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Obtené las últimas novedades</h4>
        <div className="subscribe-container">
          <input type="email" placeholder="Ingresá tu email*" />
          <button>Suscribite</button>
        </div>
        <p>Mantenete informado sobre las últimas novedades de tecnología.</p>
      </div>
      <div className="midFooter">
        <h1>ASUSER</h1>
        <p>Siempre un paso adelante.</p>
        <p>© 2025 Asuser. Todos los derechos reservados.</p>
      </div>
      <div className="rightFooter">
        <h4>Enlaces</h4>
        <ul>
          <li onClick={handleContactClick} style={{ cursor: "pointer" }}>
            Contactanos
          </li>
          <li
            onClick={handleConsumerDefenseClick}
            style={{ cursor: "pointer" }}
          >
            Defensa al consumidor
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
