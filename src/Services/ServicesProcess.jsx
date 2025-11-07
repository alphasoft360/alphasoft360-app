// src/components/Servicesprocess2Section.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

// Step Card Component
const Process2Step = ({ number, title, description }) => {
  return (
    <div className="process2-step">
      <h3>{number}.</h3>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const Servicesprocess2 = () => {
  return (
    <Container fluid className="Services-process2">
      <Row className="w-100 m-0">
        {/* Left Section */}
        <Col lg={4} className="p-0">
          <div className="process2-left-panel">
            <p className="Services-process2-tag">Working Process</p>
            <h2>
              Our Services Delivery Process - How AlphaSoft Delivers Excellence
            </h2>
            <Link  to="/contact"  className="contact-us-button text-decoration-none">Contact Us</Link>
          </div>
        </Col>

        {/* Right Section */}
        <Col lg={8} className="p-0 d-flex align-items-center">
          <div className="process2-right-steps">
            <Process2Step
              number="1"
              title="Consultation & Assessment"
              description="We begin with a thorough consultation to understand your requirements, assess your current infrastructure, and identify the best solutions for your business needs."
            />
            <Process2Step
              number="2"
              title="Proposal & Planning"
              description="Our team develops a detailed proposal with project scope, timeline, and cost estimates. We create a comprehensive plan outlining deliverables and milestones."
            />
            <Process2Step
              number="3"
              title="Implementation & Development"
              description="Our skilled developers and engineers execute the project using industry best practices, ensuring quality, security, and scalability throughout the development process."
            />
            <Process2Step
              number="4"
              title="Testing & Deployment"
              description="Rigorous testing ensures the solution meets all requirements. We handle seamless deployment and provide training, documentation, and ongoing support."
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicesprocess2;
