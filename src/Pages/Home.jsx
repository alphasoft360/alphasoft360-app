import React, { useEffect } from "react";
import "../Home/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../Home/Hero";
import AboutSection from "../Home/AboutSection";
import Services from "../Home/Services";
import ContactSection from "../Home/ContactSection";
import WorkingProcessSection from "../Home/WorkingProcessSection";
import Projects from "../Home/Projects";
// import Pricing from "../Home/pricing";
import Testimonials from "../Home/Testimonials";
import Blog from "../Home/Blog";
import PartnerSlider from "../Home/PartnerSlider";

function Home() {
  // Changed App to Home to match the export
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <PartnerSlider />
      <Services />
      <ContactSection />
      <WorkingProcessSection />
      <Projects />
      {/* <Pricing /> */}
      <Blog />
      <Testimonials />
    </>
  );
}

export default Home;
