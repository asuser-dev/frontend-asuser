import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-icon">
          <Link to="/">asuser </Link>
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
