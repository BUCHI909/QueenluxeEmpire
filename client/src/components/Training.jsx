// Training.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/training.css";

export default function Training() {
  const trainingPrograms = [
    {
      title: "Beginner Full Package (1 Month)",
      duration: "1 Month",
      price: "₦60,000",
      includes: [
        "Wig Styling",
        "Glueless Styling",
        "Wig Revamping",
        "Wig Installation",
        "Hair Treatment Basics",
      ],
      tag: "Beginner",
    },
    {
      title: "Professional Package (3 Months)",
      duration: "3 Months",
      price: "₦150,000",
      includes: [
        "Wig Styling (Advanced)",
        "Glueless Styling",
        "Wig Revamping (Pro Level)",
        "Wig Installation",
        "Client Handling & Branding",
      ],
      tag: "Professional",
    },
    {
      title: "Master Class Package (6 Months)",
      duration: "6 Months",
      price: "₦250,000",
      includes: [
        "Full Wig Mastery",
        "Glueless Styling Mastery",
        "Revamping & Restoration",
        "Professional Installation",
        "Business & Client Growth",
      ],
      tag: "Master Class",
    },
    {
      title: "Upgrade Class (2 Weeks)",
      duration: "2 Weeks",
      price: "₦25,000",
      includes: ["Skill Upgrade", "Speed Practice", "Professional Finishing"],
      tag: "Upgrade",
    },
    {
      title: "Advanced Upgrade (1 Month)",
      duration: "1 Month",
      price: "₦50,000",
      includes: ["Advanced Techniques", "Perfect Finishing", "Client Confidence"],
      tag: "Upgrade",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "",
    date: "",
    message: "",
  });

  const selectedProgram = trainingPrograms.find(
    (item) => item.title === formData.program
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "2348112935410";

    const programPrice = selectedProgram ? selectedProgram.price : "Not selected";
    const programDuration = selectedProgram
      ? selectedProgram.duration
      : "Not selected";

    const text = `Hello Queenluxe Empire 👑%0A%0A📌 QUEENLUXE ACADEMY TRAINING REGISTRATION%0A%0A👤 Name: ${formData.name}%0A📞 Phone: ${formData.phone}%0A🎓 Program: ${formData.program}%0A⏳ Duration: ${programDuration}%0A💰 Fee: ${programPrice}%0A📅 Preferred Start Date: ${formData.date}%0A📝 Message: ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="queen-training" id="training">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="queen-training-title">Queenluxe Academy</h2>
          <p className="queen-training-subtitle">
            Learn Wig Styling, Glueless Styling, Revamping, Installation & more.
            Choose a package that fits your growth.
          </p>
        </div>

        {/* Packages */}
        <div className="row g-4 mb-5">
          {trainingPrograms.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="queen-training-card"
              >
                <span className="queen-training-tag">{item.tag}</span>

                <h5 className="training-card-title">{item.title}</h5>
                <p className="training-card-duration">
                  Duration: <span>{item.duration}</span>
                </p>

                <h3 className="training-card-price">{item.price}</h3>

                <ul className="training-includes">
                  {item.includes.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="queen-training-form-box"
            >
              <h4 className="training-form-title">Register for Training</h4>
              <p className="training-form-subtitle">
                Fill in your details and submit. Your registration will be sent
                directly to WhatsApp.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control queen-training-input"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control queen-training-input"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="form-control queen-training-input"
                      required
                    >
                      <option value="">Select Training Package</option>
                      {trainingPrograms.map((item, index) => (
                        <option key={index} value={item.title}>
                          {item.title} - {item.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="form-control queen-training-input"
                      required
                    />
                  </div>

                  {/* Auto Price Display */}
                  {selectedProgram && (
                    <div className="col-12">
                      <div className="queen-training-fee-box">
                        <p>
                          <strong>Selected Package:</strong>{" "}
                          <span>{selectedProgram.title}</span>
                        </p>
                        <p>
                          <strong>Duration:</strong>{" "}
                          <span>{selectedProgram.duration}</span>
                        </p>
                        <p>
                          <strong>Training Fee:</strong>{" "}
                          <span>{selectedProgram.price}</span>
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="col-12">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control queen-training-input"
                      rows="4"
                      placeholder="Extra message (optional)"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn queen-training-btn w-100">
                      Submit Training Registration
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>

            <p className="training-note text-center mt-4">
              📌 Note: Makeup and Nails are not included in this training.
              Training fee must be paid before commencement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}