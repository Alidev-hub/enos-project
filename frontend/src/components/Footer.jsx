import "../styles/footer.css";
import bg from "../assets/home-bg.png";
import logo from "../assets/logo.png";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <footer
            className="footer"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className="footer-overlay"></div>

            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo-line">
                        <img src={logo} alt="ENOS" className="footer-logo" />
                        <span className="agency">Agency</span>
                    </div>

                    <p>
                        Agence digitale experte en marketing, branding et développement web.
                        Transformons vos idées en succès digital.
                    </p>

                    <div className="footer-socials">
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

                </div>

                <div className="footer-column">
                    <h3>Navigation</h3>
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/team">Team</a>
                    <a href="/about">About</a>
                </div>

                <div className="footer-column">
                    <h3>Services</h3>
                    <a href="/services">Marketing Digital</a>
                    <a href="/services">Branding & Design</a>
                    <a href="/services">Développement Web</a>
                    <a href="/services">Stratégie Growth</a>
                </div>

                <div className="footer-column footer-contact">
                    <h3>Contact</h3>
                    <a href="mailto:contact@enosagency.com">contact@enosagency.com</a>
                    <a href="tel:+212600000000">+212 6 00 00 00 00</a>
                    <a href="/contact" className="footer-button">Get Started →</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 ENOS Agency. Tous droits réservés.</p>

                <div>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </footer>
    );
}
