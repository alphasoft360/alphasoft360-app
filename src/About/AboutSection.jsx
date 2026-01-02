import React from 'react';
import About from '../assets/img/portrait-5.jpg'; // Ensure you have this image in the specified path

const AboutSection = () => {
  return (
    <section className="about-us-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="image-container">
              <img
                src={About} // Replace with your image URL
                alt="Smiling man and woman looking at a laptop"
                className="img-fluid rounded-circle"
              />
{/* '              <div className="bg-pattern-1"></div>
              <div className="bg-pattern-2"></div>' */}
            </div>
          </div>
          <div className="col-lg-6">
            <span className="about-us-tag">ABOUT US</span>
            <h2 className="section-title mt-2">
              Empowering Business Growth Through Innovative Technology
            </h2>
            <p className="lead mt-4">
             With extensive proven expertise in software development, our team excels in delivering high-performance web applications, IoT solutions, and seamless API integrations for clients across the globe. At our core, we prioritize innovation, scalability, and user-focused design — ensuring every digital product we create drives measurable results and long-term success for our partners.
            </p>
            <p className="mt-3">
             We stand firmly against complacency and compromise, driven by the belief that true progress emerges from clarity, integrity, and purpose. In a world often distracted by short-term gains, we remain focused on creating lasting impact through dedication, innovation, and thoughtful execution. Our vision isn’t built on convenience — it’s built on commitment: a commitment to excellence, continuous growth, and doing what’s right, even when it’s not easy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
