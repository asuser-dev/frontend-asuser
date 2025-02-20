import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-icon">
          <Link to="/">
            <img
              src="/src/assets/iconRobot.png"
              alt="#"
              className="iconRobot"
            />
          </Link>
        </div>
        <div className="navbar-buttons">
          <Link to="/contact">
            <button className="nav-button">Contacto</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
