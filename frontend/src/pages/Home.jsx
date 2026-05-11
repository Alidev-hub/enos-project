import { Link } from "react-router-dom";

import "../styles/home.css";

import bg from "../assets/home-bg.png";
import logo from "../assets/logo.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import cardBg from "../assets/cardbaground.png";
import marketingIcon from "../assets/iconecard1.png";
import brandingIcon from "../assets/iconecard2.png";
import webIcon from "../assets/iconecard3.png";

const serviceCards = [
  {
    title: "Marketing Digital",
    text: "Ads, SEO, branding, web",
    icon: marketingIcon,
  },
  {
    title: "Branding & Design",
    text: "Ciblage précis et analytics",
    icon: brandingIcon,
  },
  {
    title: "Développement Web",
    text: "Stratégies adaptées",
    icon: webIcon,
  },
];

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay"></div>

      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="title-main">Boostez votre business</span>

            <span className="line-two">
              <span className="title-with">avec</span>
              <img src={logo} alt="ENOS" className="logo-inline" />
              <span className="title-agency">Agency</span>
            </span>
          </h1>

          <div className="hero-subtitle">
            <p>
              Agence digitale experte en
              <img src={icon1} alt="" className="hero-icon icon1" />
            </p>

            <p>
              <img src={icon2} alt="" className="hero-icon icon2" />
              marketing, branding et web.
            </p>
          </div>

          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">
              Nos Services →
            </Link>

            <Link to="/about" className="btn-secondary">
              À propos de nous →
            </Link>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <h2 className="services-title">
          Pourquoi choisir
          <img src={logo} alt="ENOS" className="logo-inline-small" />
          Agency ?
        </h2>

        <div className="cards">
          {serviceCards.map((card) => (
            <article
              className="card"
              key={card.title}
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <div className="card-overlay"></div>

              <img src={card.icon} alt="" className="card-icon" />

              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
