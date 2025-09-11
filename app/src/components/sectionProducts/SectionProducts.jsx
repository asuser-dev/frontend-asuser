import "./SectionProducts.css";

const SectionProducts = () => {
  const products = [
    {
      id: 1,
      title: "Facturalo - Arca",
      description:
        "Facturador para ARCA. Simplifica y gestiona tus facturas de manera eficiente con esta herramienta diseñada para integrarse perfectamente con ARCA.",
    },
    {
      id: 2,
      title: "Agent Sales",
      description:
        "Sistema inteligente que identifica negocios potenciales en zonas específicas mediante Google Maps y realiza prospección comercial automatizada, ampliando tu base de clientes sin esfuerzo.",
    },
    {
      id: 3,
      title: "CRM para Agencia de Viajes",
      description:
        "Solución personalizada que centraliza la gestión de clientes, reservas y proveedores, aumentando la eficiencia operativa y mejorando la experiencia del cliente final.",
    },
    {
      id: 4,
      title: "Campus Virtual E-learning",
      description:
        "Plataforma educativa completa con aulas virtuales, seguimiento de progreso y herramientas interactivas, diseñada específicamente para academias que buscan digitalizar su enseñanza.",
    },
    {
      id: 5,
      title: "Transformación Digital Integral",
      description:
        "Paquete completo que incluye diseño web profesional, software de gestión a medida y estrategia de redes sociales, llevando a una empresa tradicional al éxito digital con presencia nacional.",
    },
    {
      id: 6,
      title: "Campañas Google Ads Efectivas",
      description:
        "Gestión profesional de publicidad digital con seguimiento en tiempo real y optimización constante, maximizando el retorno de inversión para nuestros clientes.",
    },
  ];

  return (
    <section className="products-section">
      <div className="products-header">
        <h1 className="products-main-title">
          Así estamos marcando el 2025: creaciones y soluciones
        </h1>
        <p className="products-subtitle">
          Innovación tangible que impulsa negocios hacia el futuro
        </p>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <article key={product.id} className="product-item">
            <div className="product-content">
              <div className="product-icon">
                <span>{product.id}</span>
              </div>
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SectionProducts;
