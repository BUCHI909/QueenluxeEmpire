import "../styles/testimonials.css";
import testimonialsData from "./data/testimonialsData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="queen-testimonials section-dark" id="testimonials">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h5 className="queen-subtitle">Testimonials</h5>
          <h2 className="queen-title">
            What Our <span className="gold-text">Clients Say</span>
          </h2>
          <p className="queen-text mt-3 mx-auto testimonials-desc">
            Our queens love our work. Here are a few reviews from satisfied
            clients who experienced our luxury transformations.
          </p>
        </div>

        {/* Swiper */}
        <div data-aos="zoom-in">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={25}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="queen-review-card">
                  {/* Stars */}
                  <div className="queen-stars">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="queen-review-text">"{item.review}"</p>

                  {/* Name */}
                  <h5 className="queen-review-name">— {item.name}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}