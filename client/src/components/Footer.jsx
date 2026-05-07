import "../styles/footer.css";
import { FaWhatsapp, FaTiktok, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="queen-footer">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-4" data-aos="fade-up">
            <h3 className="footer-brand">Queenluxe👑 Empire</h3>
            <p className="footer-text">
              Where elegance reigns. We provide luxury hair services including
              wig installation, revamping, ventilation, closure filling, hair
              coloring, and bridal glam.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="150">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#booking">Booking</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <h5 className="footer-title">Contact</h5>

            <p className="footer-contact">
              <FaMapMarkerAlt className="footer-icon" /> Owerri, Nigeria
            </p>

            <p className="footer-contact">
              <FaPhoneAlt className="footer-icon" /> +234 811 293 5410
            </p>

            <div className="footer-socials">
              <a
                href="https://wa.me/2348112935410"
                target="_blank"
                rel="noreferrer"
                className="footer-social whatsapp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="footer-social tiktok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-line" />

        {/* Copyright */}
        <div className="text-center">
          <p className="footer-copy">
            © {new Date().getFullYear()} Queenluxe👑 Empire. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}