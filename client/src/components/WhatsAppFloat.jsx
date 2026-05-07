import "../styles/whatsappfloat.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2348112935410"
      target="_blank"
      rel="noreferrer"
      className="queen-whatsapp-float"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}