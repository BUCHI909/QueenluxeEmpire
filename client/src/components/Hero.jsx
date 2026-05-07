// Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="queen-hero">
      {/* Overlay */}
      <div className="queen-hero-overlay"></div>

      {/* Glow Effects */}
      <div className="queen-glow purple"></div>
      <div className="queen-glow gold"></div>

      {/* Hero Content */}
      <div className="container queen-hero-content">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9">
            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="queen-hero-title"
            >
              Queenluxe👑 Empire
            </motion.h1>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="queen-hero-slogan"
            >
              Where Elegance Reigns
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="queen-hero-text"
            >
              Luxury hair installation, wig styling, revamping, ventilation and
              bridal glam in Owerri — crafted for queens who deserve perfection.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="queen-hero-buttons"
            >
              <Link
                to="booking"
                smooth={true}
                duration={700}
                offset={-80}
                className="btn queen-btn-gold"
              >
                Book Appointment
              </Link>

              <a
                href="https://wa.me/2348112935410"
                target="_blank"
                rel="noreferrer"
                className="btn queen-btn-outline"
              >
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="queen-scroll-down"
            >
              <Link
                to="about"
                smooth={true}
                duration={700}
                offset={-80}
                className="scroll-text"
              >
                Scroll Down
              </Link>
              <div className="scroll-line"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}