import { useState } from "react";
import "./Services.css";

const UserServices = () => {
  const [activeService, setActiveService] = useState(null);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleServiceClick = (service) => {
    setActiveService(service);
    console.log(`Servicio seleccionado: ${service}`);
  };

  const serviceOptions = [{ id: "service1", label: "Servicio 1", icon: "🔧" }];

  return (
    <div className="admin-container">
      <div
        className={`admin-sidebar ${isMenuExpanded ? "expanded" : ""}`}
        onMouseEnter={() => setIsMenuExpanded(true)}
        onMouseLeave={() => setIsMenuExpanded(false)}
      >
        <div className="sidebar-header">
          <h3>{isMenuExpanded ? "Mis Servicios" : "☰"}</h3>
        </div>

        <ul className="sidebar-menu">
          {serviceOptions.map((service) => (
            <li
              key={service.id}
              className={`menu-item ${
                activeService === service.id ? "active" : ""
              }`}
              onClick={() => handleServiceClick(service.id)}
            >
              <span className="menu-icon">{service.icon}</span>
              {isMenuExpanded && (
                <span className="menu-label">{service.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="admin-content">
        <h2 className="content-title">
          {activeService
            ? `${
                serviceOptions.find((s) => s.id === activeService)?.label || ""
              }`
            : "Seleccione un servicio del menú"}
        </h2>
        <div className="content-area">
          {activeService === "service1" && (
            <div className="service-content">
              <h3>Detalles del Servicio 1</h3>
              <p>Contenido del servicio 1 aparecerá aquí.</p>
              <div className="service-features">
                <div className="feature-card">
                  <h4>Característica 1</h4>
                  <p>Descripción de la característica 1</p>
                </div>
                <div className="feature-card">
                  <h4>Característica 2</h4>
                  <p>Descripción de la característica 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserServices;
