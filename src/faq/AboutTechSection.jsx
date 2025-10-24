import React from "react";
import { Container, Row, Col, ProgressBar, Button } from "react-bootstrap";

const AboutTechSection = () => {
  return (
    <section className="about-tech-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* ---------- Left: Image Collage with rotating bg ---------- */}
          <Col lg={6} className="position-relative mb-4 mb-lg-0">
            <div className="image-collage">
              <div className="bg-rotate"></div>

              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                alt="Main team working"
                className="main-img rounded-4 shadow"
              />

              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80"
                alt="Team small 1"
                className="small-img2 img1 rounded-3 shadow"
              />
             <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
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
              Over 25 years working in IT services developing software applications
              and mobile apps for clients all over the world.
            </p>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Software Development</span><span>92%</span>
              </div>
              <ProgressBar now={92} variant="primary" />
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Cyber Security</span><span>80%</span>
              </div>
              <ProgressBar now={80} variant="primary" />
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Artificial Intelligence</span><span>95%</span>
              </div>
              <ProgressBar now={95} variant="primary" />
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <span>Web Development</span><span>78%</span>
              </div>
              <ProgressBar now={78} variant="primary" />
            </div>

            <Button variant="primary" className="px-4 py-2 rounded-pill">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTechSection;
