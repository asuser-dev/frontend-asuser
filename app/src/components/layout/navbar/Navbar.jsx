import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../../authContext/authContext.jsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { token, userData, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-icon">
          <Link to="/">asuser </Link>
        </div>
        <div className="navbar-buttons">
          {token && (
            <Link to="/services">
              <button className="nav-button">Servicios</button>
            </Link>
          )}

          {token && userData?.role === "admin" && (
            <Link to="/admin">
              <button className="nav-button">Panel</button>
            </Link>
          )}

          <Link to="/contact">
            <button className="nav-button">Contacto</button>
          </Link>

          <div className="user-menu-container">
            <button className="user-icon-button" onClick={toggleMenu}>
              <FaUser />
            </button>
            {open && (
              <div onClick={toggleMenu}>
                {token ? (
                  <button className="nav-button" onClick={handleLogout}>
                    Cerrar Sesión
                  </button>
                ) : (
                  <>
                    <Link to="/login">
                      <button className="nav-button">Iniciar Sesión</button>
                    </Link>
                    <Link to="/register">
                      <button className="nav-button">Registrarse</button>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
