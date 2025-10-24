import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";

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
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Software house team collaborating on a project"
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
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FaqPage;
