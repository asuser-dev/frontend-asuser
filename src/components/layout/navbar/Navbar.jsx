import { useAuth } from "../../../authContext/authContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../../authContext/authContext.jsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD
  const [showButtons, setShowButtons] = useState(false);
  const { userData, logout } = useAuth();
  const navigate = useNavigate();
=======
  const [open, setOpen] = useState(false);
  const { token, userData, logout } = useAuth();
>>>>>>> 4b6bf31 (last changes to push frontend)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

<<<<<<< HEAD
  const toggleButtons = () => {
    setShowButtons(!showButtons);
=======
  const toggleMenu = () => {
    setOpen(!open);
>>>>>>> 4b6bf31 (last changes to push frontend)
  };

  const handleLogout = () => {
    logout();
<<<<<<< HEAD
    navigate("/", { replace: true });
=======
    setOpen(false);
>>>>>>> 4b6bf31 (last changes to push frontend)
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-icon">
          <Link to="/">bookealo</Link>
        </div>
<<<<<<< HEAD

        <div className="navbar-main-buttons">
          {userData && (
            <Link to="/dashboard">
              <button className="nav-button">Dashboard</button>
            </Link>
          )}
=======
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

>>>>>>> 4b6bf31 (last changes to push frontend)
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

        <div className="navbar-dropdown">
          <button onClick={toggleButtons} className="icon-button">
            <img
              src="src/assets/contrasena.png"
              alt="Menú de usuario"
              className="userData-icon"
            />
          </button>

          {showButtons && (
            <div className="dropdown-menu">
              {userData ? (
                <>
                  <Link to="/profile">
                    <button className="dropdown-button">Perfil</button>
                  </Link>
                  <button
                    className="dropdown-button logout-button"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="dropdown-button">Iniciar sesión</button>
                  </Link>
                  <Link to="/register">
                    <button className="dropdown-button">Registrarse</button>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
