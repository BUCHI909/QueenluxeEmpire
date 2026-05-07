import servicesData from "./data/servicesData";
import "../styles/services.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

export default function Services() {
  return (
    <section className="queen-services section-dark" id="services">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h5 className="queen-subtitle">Our Services</h5>
          <h2 className="queen-title">
            Luxury Hair Services for <span>Every Queen</span>
          </h2>
          <p className="queen-text mt-3 mx-auto services-desc">
            Queenluxe Empire delivers premium hair services with elegance,
            flawless finishing, and long-lasting beauty.
          </p>
        </div>

        {/* Swiper Slider */}
        <div data-aos="zoom-in">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={25}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="queen-service-card">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-text">{service.desc}</p>

                  <a href="#booking" className="service-book">
                    Book Now →
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-5" data-aos="fade-up">
          <p className="queen-text">
            📍 Available in <span className="gold-text">Owerri</span> | Premium
            finishing, clean work and elegant styling.
          </p>
        </div>
      </div>
    </section>
  );
}