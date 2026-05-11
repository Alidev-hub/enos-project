import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Services.css";
import bg from "../assets/home-bg.png";

const packs = [
  {
    name: "Starter",
    fullName: "Starter Presence Pack",
    price: "2000 MAD",
    period: "Paiement unique",
    features: [
      "Création page professionnelle",
      "Optimisation informations",
      "2 designs prêts à poster",
      "1 vidéo business intro",
      "Visibilité locale",
      "Mini formation 30 min",
    ],
  },
  {
    name: "Growth",
    fullName: "Growth Focus Pack",
    price: "4200 MAD",
    period: "Par mois",
    features: [
      "5 posts / mois",
      "4 vidéos courtes",
      "Branding cohérent",
      "Optimisation visibilité",
      "Support interaction clients",
      "Résumé performance mensuel",
    ],
  },
  {
    name: "Web",
    fullName: "Web Advance Pack",
    price: "5500 - 8000 MAD",
    period: "Paiement unique",
    features: [
      "Analyse & planification",
      "Design validé",
      "Site responsive",
      "Intégration branding",
      "WhatsApp & formulaire",
      "SEO basique",
    ],
  },
];

const positions = [
  { left: "50%", top: "8%" },
  { left: "84%", top: "62%" },
  { left: "16%", top: "62%" },
];

export default function Services() {
  const [activePack, setActivePack] = useState(0);
  const selectedPack = packs[activePack];

  return (
    <div className="services-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="services-overlay"></div>

      <section className="services-section">
        <div className="services-heading">
          <h1>Choisissez votre pack</h1>
          <p>
            Des solutions adaptées à vos besoins pour propulser votre business.
          </p>
        </div>

        <div className="services-container">
          <div className="orbit-wrapper">
            <div className="orbit-ellipse"></div>
            <div className="orbit-dot"></div>

            {packs.map((pack, index) => (
              <button
                key={pack.name}
                className={`orbit-item ${activePack === index ? "selected" : ""}`}
                style={positions[index]}
                onClick={() => setActivePack(index)}
              >
                {pack.name}
              </button>
            ))}
          </div>

          <article className="pack-details">
            <h2>{selectedPack.fullName}</h2>

            <div className="price">
              {selectedPack.price}
              <span>{selectedPack.period}</span>
            </div>

            <ul>
              {selectedPack.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <Link to="/contact" className="pack-button">
              Commencer maintenant →
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
