import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="section-1">
        <h1>
          Transformamos tu visión en realidad: Agentes IA y software
          personalizado para impulsar tu negocio al éxito.
        </h1>
      </section>

      <section className="section-2">
        <div className="product-grid">
          <div className="product-card">
            <h3>Producto 1</h3>
            <p>Descripción breve del producto.</p>
          </div>
          <div className="product-card">
            <h3>Producto 2</h3>
            <p>Descripción breve del producto.</p>
          </div>
          <div className="product-card">
            <h3>Producto 3</h3>
            <p>Descripción breve del producto.</p>
          </div>
          <div className="product-card">
            <h3>Producto 4</h3>
            <p>Descripción breve del producto.</p>
          </div>
        </div>
      </section>

      <section className="section-3">
        <h2>Stacks Tecnológicos</h2>
        <div className="stack-grid">
          <div className="stack-card">JavaScript</div>
          <div className="stack-card">Python</div>
          <div className="stack-card">React</div>
          <div className="stack-card">Node.js</div>
          <div className="stack-card">PostgreSQL</div>
          <div className="stack-card">Docker</div>
          <div className="stack-card">GitHub Actions</div>
          <div className="stack-card">FastAPI</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
