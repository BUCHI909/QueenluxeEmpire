import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Training from "./components/Training"; 
import Policy from "./components/Policy";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Training />
      <Policy />
      <Booking />
      <Footer />
      <WhatsAppFloat />
      <ScrollTop />
      
    </>
  );
}