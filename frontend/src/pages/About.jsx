import "../styles/About.css";

import bg from "../assets/home-bg.png";
import logo from "../assets/logo.png";

export default function About() {
  return (
    <section className="about-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="about-overlay"></div>

      <div className="about-content">
        <h1>À propos de nous</h1>

        <p className="about-subtitle">
          L'agence à votre écoute pour transformer vos idées en succès digital
        </p>

        <div className="about-brand">
          <img src={logo} alt="ENOS" />
          <span>Agency</span>
        </div>

        <p className="about-description">
          Chez{" "}
          <span className="inline-brand">
            <img src={logo} alt="ENOS" />
            <span>Agency</span>
          </span>
          , nous sommes passionnés par le digital. Notre mission : propulser
          votre entreprise vers de nouveaux sommets en vous offrant des solutions
          innovantes et sur-mesure.
        </p>
      </div>
    </section>
  );
}
