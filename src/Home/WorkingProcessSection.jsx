// src/components/WorkingProcessSection.js
import React from 'react';
import { Link } from "react-router-dom";
const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="process-step">
      <h3>{number}.</h3>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const WorkingProcessSection = () => {
  return (
    <div className="working-process-container">
      {/* Left Section: Title and Contact Us button */}
      <div className="process-left-panel">
        <p className="working-process-tag">WORKING PROCESS</p>
        <h2>
          Our Software Development Process - How AlphaSoft Delivers Excellence
        </h2>
        <Link  to="/contact"  className="learn-more-btn text-decoration-none">Contact Us</Link>
      </div>

      {/* Right Section: Numbered Steps */}
      <div className="process-right-steps">
        <ProcessStep
          number="1"
          title="Requirement Analysis"
          description="We thoroughly understand your business needs, gather detailed requirements, and define project scope to ensure a clear roadmap for success."
        />
        <ProcessStep
          number="2"
          title="Design & Planning"
          description="Our team creates comprehensive designs, architectures, and project plans, ensuring scalability, security, and alignment with your goals."
        />
        <ProcessStep
          number="3"
          title="Development"
          description="Using cutting-edge technologies and best practices, we build robust, efficient software solutions tailored to your specifications."
        />
        <ProcessStep
          number="4"
          title="Testing & Deployment"
          description="Rigorous testing ensures quality and reliability. We handle seamless deployment and provide ongoing support for optimal performance."
        />
      </div>
    </div>
  );
};

export default WorkingProcessSection;