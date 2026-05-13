// Policy.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/policy.css";

export default function Policy() {
  const policies = [
    "A booking fee is required to secure your appointment slot.",
    "Your booking fee is strictly non-refundable once your appointment is confirmed.",
    "You may reschedule your appointment once, provided you notify us at least 24 hours before your scheduled time.",
    "If you cancel your appointment with less than 24 hours notice, a cancellation fee of 50% of the appointment cost will be charged.",
    "If you do not show up to your appointment with no communication (No-Show), the full appointment cost will be charged.",
    "Late arrival beyond 15 minutes may attract an extra fee or lead to cancellation depending on availability.",
    "Clients are advised to come with clean hair or wig properly prepared for the service to avoid delays.",
    "Full service payment must be completed before or immediately after service is rendered.",
    "By booking with Queenluxe Empire, you agree to these policies and understand that they are set in place to protect both parties.",
  ];

  return (
    <section className="queen-policy" id="policy">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="queen-policy-title">Booking Policy</h2>
          <p className="queen-policy-subtitle">
            Please read our booking policy carefully before confirming your
            appointment.
          </p>
        </div>

        {/* Policy Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="queen-policy-box"
        >
          <ul className="queen-policy-list">
            {policies.map((policy, index) => (
              <li key={index}>{policy}</li>
            ))}
          </ul>

          <div className="queen-policy-note">
            <strong>Important:</strong> These rules help us provide the best
            service experience and protect both the client and the brand.
          </div>

          <div className="queen-policy-closing">
            Thank you so much for understanding and respecting my time. 👑✨
          </div>
        </motion.div>
      </div>
    </section>
  );
}