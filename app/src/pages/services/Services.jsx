import { useState, useEffect, Suspense } from "react";
import "./Services.css";

const UserServices = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [userData, setUserData] = useState({
    role: "",
    name: "",
    services: [],
  });
  const [ServiceComponent, setServiceComponent] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  const handleServiceClick = async (service) => {
    try {
      const module = await import(
        `../../components/servicesComponents/${service.component}.jsx`
      );
      setServiceComponent(() => module.default);
    } catch (error) {
      console.error(
        `No se pudo cargar el componente: ${service.component}`,
        error
      );
      setServiceComponent(() => () => <p>Error al cargar el componente.</p>);
    }
  };

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
          {userData.services.map((service) => (
            <li
              key={`service-${service.id}`}
              className="menu-item"
              onClick={() => handleServiceClick(service)}
              title={service.description}
            >
              <span className="menu-icon">🔧</span>
              {isMenuExpanded && (
                <span className="menu-label">{service.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="admin-content">
        {!ServiceComponent ? (
          <>
            <h2 className="content-title">Seleccione un servicio del menú</h2>
            {userData.services.length === 0 && (
              <p className="no-services-message">
                No tienes servicios asignados
              </p>
            )}
          </>
        ) : (
          <Suspense fallback={<p>Cargando...</p>}>
            <ServiceComponent />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default UserServices;
