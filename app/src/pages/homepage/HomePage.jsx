import SectionProducts from "../../components/sectionProducts/SectionProducts";
import SectionServices from "../../components/sectionServices/SectionServices";
import SectionStack from "../../components/sectionStack/SectionStack";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="section-1">
        <h1>asuser</h1>
        <h2>Potenciamos negocios con innovación tecnológica</h2>
      </section>

      <SectionServices></SectionServices>
      <SectionProducts></SectionProducts>
      <SectionStack></SectionStack>
    </div>
  );
};

export default HomePage;
