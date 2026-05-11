import "../styles/Contact.css";
import bg from "../assets/home-bg.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="contact-overlay"></div>

      <section className="contact-hero">
        <h1>Contactez-nous</h1>

        <p>
          Prêt à booster votre business ? Remplissez le formulaire ou
          contactez-nous directement.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-form">
          <h2>Contact</h2>

          <p>
            Parlez-nous de votre projet, on vous répond rapidement avec une
            solution adaptée.
          </p>

          <form>
            <div className="input-group">
              <input type="text" placeholder="Nom complet" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="E-mail" />
            </div>

            <div className="input-group">
              <input type="tel" placeholder="Téléphone" />
            </div>

            <button type="submit" className="send-btn">
              Envoyer →
            </button>

            <small>
              En envoyant ce formulaire, vous acceptez notre politique de
              confidentialité.
            </small>
          </form>
        </div>

        <div className="contact-infos">
          <div className="info-card">
            <FaPhoneAlt />
            <h3>Téléphone</h3>
            <p>+212 6 00 00 00 00</p>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <h3>E-mail</h3>
            <p>contact@enosagency.com</p>
          </div>
        </div>
      </section>

      <section className="contact-social">
        <h2>Suivez-nous</h2>

        <p>Retrouvez-nous sur les réseaux sociaux.</p>

        <div className="social-icons">
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </section>
    </div>
  );
}
