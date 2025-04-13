import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SectionServices.css";

const services = [
  {
    title: "Desarrollo de agentes IA",
    description:
      "Creamos soluciones de inteligencia artificial personalizadas, desde chatbots hasta sistemas de recomendación avanzados, para optimizar tus procesos y mejorar la experiencia del usuario.",
  },
  {
    title: "Desarrollo de apps webs",
    description:
      "Diseñamos y desarrollamos aplicaciones web modernas, escalables y seguras, utilizando las últimas tecnologías para garantizar un rendimiento óptimo.",
  },
  {
    title: "Desarrollo de software",
    description:
      "Ofrecemos soluciones de software a medida para empresas, desde aplicaciones de escritorio hasta sistemas empresariales complejos, adaptados a tus necesidades.",
  },
  {
    title: "Diseño UX",
    description:
      "Nos enfocamos en la experiencia del usuario, creando interfaces intuitivas y atractivas que mejoran la usabilidad y la satisfacción del cliente.",
  },
  {
    title: "Servicios Cloud",
    description:
      "Implementamos infraestructuras en la nube para mejorar la escalabilidad, garantizar la alta disponibilidad y reducir costos operativos.",
  },
  {
    title: "Servicios DevOps",
    description:
      "Adoptamos prácticas DevOps para optimizar la entrega de software, automatizar procesos y fomentar la colaboración entre desarrollo y operaciones.",
  },
  {
    title: "Servicio de marketing para webs",
    description:
      "Potenciamos tu presencia en línea con estrategias de marketing digital efectivas, incluyendo SEO, publicidad en redes sociales y análisis de datos.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const SectionServices = () => {
  return (
    <section className="section-2">
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
    </section>
  );
};

export default SectionServices;
