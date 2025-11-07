import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import person1 from "../assets/img/person1.jpg";
import person2 from "../assets/img/person2.jpg";
import person3 from "../assets/img/person3.jpg";

const AboutSection = () => {
  return (
    <section className="about-tech-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* ---------- Left: Image Collage with rotating bg ---------- */}
          <Col lg={6} className="position-relative mb-4 mb-lg-0">
            <div className="image-collage">
              <div className="bg-rotate"></div>

              <img
                src={person1}
                alt="Main team working"
                className="main-img rounded-4 shadow"
              />

              <img
                src={person2}
                alt="Team small 1"
                className="small-img2 img1 rounded-3 shadow"
              />
              <img
                src={person3}
                alt="Team small 3"
                className="small-img3 img3 rounded-3 shadow"
              />
            </div>
          </Col>

          {/* ---------- Right: Text & Progress Bars ---------- */}
          <Col lg={6}>
            <h6 className="text-primary text-uppercase fw-semibold mb-2">
              About Us
            </h6>
            <h2 className="fw-bold mb-3">
              We Are Increasing Business Success With Technology
            </h2>
            <p className="text-muted mb-4">
              Over 25 years working in IT services developing software
              applications and mobile apps for clients all over the world.
            </p>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Software Development</span>
                <span>92%</span>
              </div>
              <ProgressBar now={92} />
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>App Development</span>
                <span>90%</span>
              </div>
              <ProgressBar now={80} />
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>Web Development</span>
                <span>92%</span>
              </div>
              <ProgressBar now={92} />
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Artificial Intelligence</span>
                <span>95%</span>
              </div>
              <ProgressBar now={95} />
            </div>
            <Link to="/services" className="px-4 py-2 text-decoration-none rounded-pill learn-more-btn">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
