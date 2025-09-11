import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../../../authContext/authContext.jsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { token, userData, logout } = useAuth();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Cerrar menús al hacer clic fuera
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const closeAllMenus = () => {
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-icon">
          <Link to="/" onClick={closeAllMenus}>
            asuser
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-buttons desktop-nav">
          {token && (
            <Link to="/services">
              <button className="nav-button" onClick={closeAllMenus}>
                Servicios
              </button>
            </Link>
          )}

          {token && userData?.role === "admin" && (
            <Link to="/admin">
              <button className="nav-button" onClick={closeAllMenus}>
                Panel
              </button>
            </Link>
          )}

          <Link to="/contact">
            <button className="nav-button" onClick={closeAllMenus}>
              Contacto
            </button>
          </Link>

          <div className="user-menu-container" ref={menuRef}>
            <button
              className={`user-icon-button ${userMenuOpen ? "active" : ""}`}
              onClick={toggleUserMenu}
            >
              <FaUser />
            </button>

            {userMenuOpen && (
              <div className="user-menu-dropdown">
                {token ? (
                  <button className="user-menu-item" onClick={handleLogout}>
                    Cerrar Sesión
                  </button>
                ) : (
                  <>
                    <Link to="/login">
                      <button
                        className="user-menu-item"
                        onClick={closeAllMenus}
                      >
                        Iniciar Sesión
                      </button>
                    </Link>
                    <Link to="/register">
                      <button
                        className="user-menu-item"
                        onClick={closeAllMenus}
                      >
                        Registrarse
                      </button>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-menu-container">
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {mobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={closeAllMenus}>
              <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                <div className="mobile-menu-header">
                  <span>Menú</span>
                  <button className="mobile-menu-close" onClick={closeAllMenus}>
                    <FaTimes />
                  </button>
                </div>

                <div className="mobile-menu-items">
                  {token && (
                    <Link to="/services" className="mobile-menu-link">
                      <button
                        className="mobile-nav-button"
                        onClick={closeAllMenus}
                      >
                        Servicios
                      </button>
                    </Link>
                  )}

                  {token && userData?.role === "admin" && (
                    <Link to="/admin" className="mobile-menu-link">
                      <button
                        className="mobile-nav-button"
                        onClick={closeAllMenus}
                      >
                        Panel
                      </button>
                    </Link>
                  )}

                  <Link to="/contact" className="mobile-menu-link">
                    <button
                      className="mobile-nav-button"
                      onClick={closeAllMenus}
                    >
                      Contacto
                    </button>
                  </Link>

                  <div className="mobile-user-menu">
                    {token ? (
                      <button
                        className="mobile-nav-button logout-button"
                        onClick={handleLogout}
                      >
                        Cerrar Sesión
                      </button>
                    ) : (
                      <>
                        <Link to="/login" className="mobile-menu-link">
                          <button
                            className="mobile-nav-button"
                            onClick={closeAllMenus}
                          >
                            Iniciar Sesión
                          </button>
                        </Link>
                        <Link to="/register" className="mobile-menu-link">
                          <button
                            className="mobile-nav-button"
                            onClick={closeAllMenus}
                          >
                            Registrarse
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
