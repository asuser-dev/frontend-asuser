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
        "Agente que busca en la zona de Google Maps que elijas con el tipo de establecimiento que desees y ofrece tu producto. Ideal para aumentar tus ventas y presencia en el mercado.",
    },
    {
      id: 3,
      title: "Agent Turnero",
      description:
        "Agente que maneja los turnos de tu comercio. Optimiza la gestión de turnos y mejora la experiencia de tus clientes con este sistema inteligente.",
    },
    {
      id: 4,
      title: "E-learning",
      description:
        "Plataforma e-learning para tu academia. Ofrece cursos en línea, gestiona estudiantes y recursos educativos de manera eficiente y escalable.",
    },
  ];

  return (
    <section className="products-section">
      <h1>Productos</h1>
      <h2>Preparados para entregar en una semana</h2>
      <div className="products-container">
        {products.map((product) => (
          <article key={product.id} className="product-item">
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SectionProducts;
