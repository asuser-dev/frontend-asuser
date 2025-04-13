import { useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [activeOption, setActiveOption] = useState(null);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleOptionClick = (option) => {
    setActiveOption(option);
    console.log(`Opción seleccionada: ${option}`);
  };

  const menuOptions = [
    { id: "users", label: "Usuarios", icon: "👤" },
    { id: "companies", label: "Empresas", icon: "🏢" },
    { id: "services", label: "Reporte Servicios Disponibles", icon: "📊" },
    { id: "products", label: "Reporte Productos Disponibles", icon: "📦" },
  ];

  return (
    <div className="admin-container">
      <div
        className={`admin-sidebar ${isMenuExpanded ? "expanded" : ""}`}
        onMouseEnter={() => setIsMenuExpanded(true)}
        onMouseLeave={() => setIsMenuExpanded(false)}
      >
        <div className="sidebar-header">
          <h3>{isMenuExpanded ? "Panel Admin" : "☰"}</h3>
        </div>

        <ul className="sidebar-menu">
          {menuOptions.map((option) => (
            <li
              key={option.id}
              className={`menu-item ${
                activeOption === option.id ? "active" : ""
              }`}
              onClick={() => handleOptionClick(option.id)}
            >
              <span className="menu-icon">{option.icon}</span>
              {isMenuExpanded && (
                <span className="menu-label">{option.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="admin-content">
        <h2 className="content-title">
          {activeOption
            ? `Administración de ${
                menuOptions.find((o) => o.id === activeOption)?.label || ""
              }`
            : "Seleccione una opción del menú"}
        </h2>
        <div className="content-area">
          {activeOption && (
            <p>
              Contenido de{" "}
              {menuOptions.find((o) => o.id === activeOption)?.label} aparecerá
              aquí.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
