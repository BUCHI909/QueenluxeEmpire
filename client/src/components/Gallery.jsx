import { useState } from "react";
import "../styles/gallery.css";

import galleryData from "./data/galleryData";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="queen-gallery" id="gallery">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h5 className="queen-subtitle">Our Gallery</h5>
          <h2 className="queen-title">
            Beautiful <span className="gold-text">Transformations</span>
          </h2>
          <p className="queen-text mt-3 mx-auto gallery-desc">
            Take a look at some of our luxury wig styling, revamping, and bridal
            installations done with elegance and perfection.
          </p>
        </div>

        {/* Swiper Gallery */}
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
            {galleryData.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="queen-gallery-card"
                  onClick={() => setSelectedImg(item.img)}
                  data-bs-toggle="modal"
                  data-bs-target="#queenGalleryModal"
                >
                  <img src={item.img} alt="gallery" />
                  <div className="queen-gallery-overlay">
                    <span>View</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="queenGalleryModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content queen-modal">
            <div className="modal-header border-0">
              <h5 className="modal-title text-light">Queenluxe Gallery</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {selectedImg && (
                <img
                  src={selectedImg}
                  alt="preview"
                  className="img-fluid rounded-4"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}