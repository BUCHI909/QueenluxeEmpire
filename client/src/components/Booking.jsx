import { useState } from "react";
import "../styles/booking.css";

import servicesData from "./data/servicesData";

export default function Booking() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const whatsappNumber = "2348112935410";

    const message = `Hello Queenluxe👑 Empire,%0A%0A
I would like to book an appointment.%0A%0A
👤 Full Name: ${formData.fullname}%0A
📞 Phone Number: ${formData.phone}%0A
💇 Service: ${formData.service}%0A
📅 Date: ${formData.date}%0A
⏰ Time: ${formData.time}%0A
📝 Note: ${formData.note}%0A%0A
📍 Location: Owerri`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="queen-booking" id="booking">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h5 className="queen-subtitle">Booking</h5>
          <h2 className="queen-title">
            Book Your <span className="gold-text">Appointment</span>
          </h2>
          <p className="queen-text mt-3 mx-auto booking-desc">
            Fill in your details and your booking request will be sent directly
            to Queenluxe Empire WhatsApp for confirmation.
          </p>
        </div>

        {/* Booking Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="zoom-in">
            <div className="queen-booking-card">
              <form onSubmit={handleBooking}>
                <div className="row g-4">
                  {/* Full Name */}
                  <div className="col-md-6">
                    <label className="form-label queen-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                      className="form-control queen-input"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <label className="form-label queen-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-control queen-input"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Service */}
                  <div className="col-md-6">
                    <label className="form-label queen-label">
                      Select Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="form-select queen-input"
                    >
                      <option value="">Choose a service</option>
                      {servicesData.map((service, index) => (
                        <option key={index} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div className="col-md-3">
                    <label className="form-label queen-label">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="form-control queen-input"
                    />
                  </div>

                  {/* Time */}
                  <div className="col-md-3">
                    <label className="form-label queen-label">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="form-control queen-input"
                    />
                  </div>

                  {/* Note */}
                  <div className="col-12">
                    <label className="form-label queen-label">
                      Additional Note (Optional)
                    </label>
                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      className="form-control queen-input"
                      placeholder="Any extra information you want to add..."
                      rows="4"
                    ></textarea>
                  </div>

                  {/* Button */}
                  <div className="col-12 text-center">
                    <button type="submit" className="btn queen-book-btn w-100">
                      Submit Booking to WhatsApp
                    </button>

                    <p className="queen-booking-note mt-3">
                      You will be redirected to WhatsApp for confirmation.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Extra Contact */}
        <div className="text-center mt-5" data-aos="fade-up">
          <p className="queen-text">
            📍 Located in <span className="gold-text">Owerri</span> | WhatsApp:{" "}
            <span className="gold-text">+234 811 293 5410</span>
          </p>
        </div>
      </div>
    </section>
  );
}