import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import FAQ_IMG from "../assets/img/Faq.image.jpeg";

const FaqPage = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* Left Column for Image */}
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="circular-image-container">
            <img
              src={FAQ_IMG}
              alt="FAQ-IMAGE"
              className="img-fluid rounded-circle"
            />
          </div>
        </Col>

        {/* Right Column for FAQs */}
        <Col md={6}>
          <div className="faq-section p-4">
            <h5 className="text-primary text-uppercase mb-2">FAQs</h5>
            <h2 className="mb-4 fw-bold">
              Frequently Asked Questions About Our Software House
            </h2>

            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What services does our software house provide?
                </Accordion.Header>
                <Accordion.Body>
                  We offer custom software development, web and mobile
                  applications, software consulting, and maintenance services
                  tailored to your business needs.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Which technologies do you specialize in?
                </Accordion.Header>
                <Accordion.Body>
                  Our expertise includes React, Angular, Node.js, Python, Java,
                  cloud services like AWS and Azure, and databases such as
                  MySQL, MongoDB, and PostgreSQL.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How long does a typical project take?
                </Accordion.Header>
                <Accordion.Body>
                  Project timelines vary depending on complexity, but we follow
                  agile methodologies to deliver iterative progress and ensure
                  timely completion.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  What technologies do you use?
                </Accordion.Header>
                <Accordion.Body>
                  We work with modern stacks like React, Node.js, and cloud
                  services to build scalable solutions tailored to client needs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Do you provide post-launch support and maintenance?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. After deployment we offer ongoing support, regular
                  updates, and maintenance plans to ensure your website or
                  application remains secure, fast, and fully functional.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  How do you ensure the security of our projects?
                </Accordion.Header>
                <Accordion.Body>
                  Security is paramount. We implement best practices including
                  secure coding standards, regular security audits, encryption,
                  and compliance with industry standards like GDPR and HIPAA
                  where applicable.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Can you work with our existing systems or databases?
                </Accordion.Header>
                <Accordion.Body>
                  Absolutely. We specialize in integrations and can seamlessly
                  connect with your current infrastructure, APIs, databases, or
                  third-party services to enhance functionality without disrupting
                  existing operations.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  What is your pricing model?
                </Accordion.Header>
                <Accordion.Body>
                  We offer flexible pricing based on project scope, including
                  fixed-price for well-defined projects, hourly rates for
                  ongoing development, and retainer models for long-term
                  partnerships. Contact us for a customized quote.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  How do you handle project communication and updates?
                </Accordion.Header>
                <Accordion.Body>
                  We maintain transparent communication through regular meetings,
                  progress reports, and collaborative tools like Slack, Jira,
                  and GitHub. You'll have direct access to the development team
                  and receive weekly updates on project milestones.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  Do you provide training for our team on the new software?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we offer comprehensive training sessions, documentation,
                  and handover processes to ensure your team is fully equipped
                  to manage and maintain the software post-delivery.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FaqPage;
