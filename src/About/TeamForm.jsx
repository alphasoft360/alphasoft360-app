// src/ServicesSection.jsx

import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import bgImage from "../assets/img/Services.jpeg";
import { toast } from 'react-toastify';
import { Resend } from 'resend';
import ReCAPTCHA from 'react-google-recaptcha';

const ServicesSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  });
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message ||
      !captchaToken
    ) {
      toast.error("Please fill in all fields and complete the CAPTCHA before submitting.");
      return;
    }

    console.log("Form data before sending:", formData);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          message: formData.message,
          subject: 'New Team Inquiry from AlphaSoft Website',
          token: captchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
        console.log("Response not ok:", response);
      }

      console.log("SUCCESS!");
      toast.success("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: ""
      });
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send email. Please try again later.");
    }
  };

  return (
  <>
    <section className="Services-section py-5">
      <Container fluid>
       <Row className="align-items-stretch">
  <Col md={5} className="no-gap">
            <div
              className="contact-image position-relative overflow-hidden h-100"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "380px",
              }}
            >
              {/* Overlay */}
              <div className="overlay position-absolute w-100 h-100 top-0 start-0 bg-dark bg-opacity-50"></div>
              {/* Play Button */}
              <div className="position-absolute top-50 start-50 translate-middle">
                <button className="play-btn rounded-circle d-flex align-items-center justify-content-center">
                  <FaPlay size={20} />
                </button>
              </div>
            </div>
          </Col>

          {/* Right Side - Gradient Form */}
 <Col md={7} className="no-gap">
            <div className="form-box p-4 text-white h-100 d-flex flex-column justify-content-center">
              <h6 className="fw-bold">GET IN TOUCH</h6>
              <h3 className="fw-bold mb-4">Fill The Form Below</h3>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      placeholder="E-Mail"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      required
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]{10,}"
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      type="url"
                      name="website"
                      placeholder="Your Website"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    required
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Your Message Here"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <ReCAPTCHA
                    sitekey="6LcUZ_srAAAAALB4Ag29qgOfZ3_-UXLLYUXPmDud"
                    onChange={(token) => setCaptchaToken(token)}
                  />
                </Form.Group>
                <Button type="submit" className="submit-btn px-4 py-2 fw-bold">
                  Submit Now
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
                </>
  );
};

export default ServicesSection;
