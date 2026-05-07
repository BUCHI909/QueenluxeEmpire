// About.jsx
import "../styles/about.css";

export default function About() {
  return (
    <section className="queen-about" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Text */}
          <div className="col-lg-6" data-aos="fade-right">
            <h5 className="queen-subtitle">About Us</h5>
            <h2 className="queen-title">
              Luxury Hair Services in <span>Owerri</span>
            </h2>

            <p className="queen-text mt-4">
              Queenluxe👑 Empire is a luxury hair brand in Owerri, known for
              delivering flawless hair transformations. We specialize in wig
              installation, wig styling, revamping, ventilation, closure filling,
              hair coloring, and bridal installations.
            </p>

            <p className="queen-text">
              Our goal is simple: to make every queen feel confident, classy,
              and elegant. We believe hair is not just beauty — it is identity,
              confidence, and royalty.
            </p>

            <div className="queen-about-box mt-4">
              <div className="queen-box-item">
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </div>

              <div className="queen-box-item">
                <h4>Premium</h4>
                <p>Luxury Styling</p>
              </div>

              <div className="queen-box-item">
                <h4>Neat</h4>
                <p>Finishing Touch</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="queen-about-image">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
                alt="Queenluxe Hair"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}