import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/navbar.css";

// import your logo image (adjust path based on your project)
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top queen-navbar">
      <div className="container">

        {/* Brand */}
        <a className="navbar-brand queen-brand" href="/">
          <span className="brand-text">Queenluxe</span>

          <img
            src={logo}
            alt="Queenluxe Logo"
            className="brand-logo"
          />

          <span className="brand-text">Empire</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#queenNavbar"
          aria-controls="queenNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="queenNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 text-center">

            <li className="nav-item">
              <Link to="about" smooth duration={600} offset={-80} className="nav-link queen-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="services" smooth duration={600} offset={-80} className="nav-link queen-link">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link to="gallery" smooth duration={600} offset={-80} className="nav-link queen-link">
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link to="training" smooth duration={600} offset={-80} className="nav-link queen-link">
                Training
              </Link>
            </li>

            <li className="nav-item">
              <Link to="booking" smooth duration={600} offset={-80} className="nav-link queen-link">
                Booking
              </Link>
            </li>

          </ul>

          {/* Right Side Icons + Button */}
          <div className="d-flex justify-content-center align-items-center gap-3">

            <a
              href="https://wa.me/2348112935410"
              target="_blank"
              rel="noreferrer"
              className="queen-social whatsapp"
            >
              <FaWhatsapp size={18} />
            </a>

            <a
              href="https://www.tiktok.com/@styledbyqueen_"
              target="_blank"
              rel="noreferrer"
              className="queen-social tiktok"
            >
              <FaTiktok size={18} />
            </a>

            <Link
              to="booking"
              smooth
              duration={600}
              offset={-80}
              className="btn queen-book-btn d-none d-lg-inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}