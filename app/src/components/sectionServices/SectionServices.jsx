import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SectionServices.css";

const services = [
  {
    title: "Desarrollo de Aplicaciones Web",
    description:
      "Creamos plataformas web rápidas, intuitivas y adaptables a cualquier dispositivo. Diseño y desarrollo unificados para garantizar una experiencia fluida, alto rendimiento y máxima accesibilidad para todos los usuarios.",
  },
  {
    title: "Desarrollo de Software a Medida",
    description:
      "Soluciones empresariales personalizadas que simplifican procesos complejos. Combinamos funcionalidad avanzada con interfaces intuitivas, asegurando que cada herramienta sea fácil de adoptar por equipos y clientes.",
  },
  {
    title: "Diseño UX/UI Centrado en Resultados",
    description:
      "No solo diseñamos interfaces atractivas, sino que optimizamos cada interacción basándonos en datos reales de usuarios. Investigación continua, pruebas de usabilidad y adaptación progresiva para maximizar engagement.",
  },
  {
    title: "Infraestructura Cloud y Escalabilidad",
    description:
      "Implementamos entornos flexibles y seguros que crecen con tu negocio. Garantizamos alta disponibilidad, velocidad consistente y actualizaciones sin interrupciones para experiencias siempre fluidas.",
  },
  {
    title: "Estrategias de Marketing Digital",
    description:
      "Enfoque integral: desde la arquitectura técnica de tu plataforma hasta el recorrido del usuario. Optimizamos conversiones mediante análisis de comportamiento y personalización inteligente.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
      },
    },
  ],
};

const SectionServices = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Nuestros Servicios</h2>
        <p className="services-subtitle">
          Soluciones tecnológicas para impulsar tu negocio
        </p>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div className="service-item" key={index}>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="btn-ver-mas">Ver más &gt;&gt;</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
