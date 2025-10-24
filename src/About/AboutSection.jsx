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
              We Are Increasing Business Success With Technology
            </h2>
            <p className="lead mt-4">
              Over 25 years working in IT services developing software
              applications and mobile apps for clients all over the world.
            </p>
            <p className="mt-3">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee the pain and
              trouble that are bound to ensue; and equal blame belongs to those
              who fail in their duty through weakness of will, which is the same
              as saying.
            </p>
            <button className="btn btn-primary mt-4">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
