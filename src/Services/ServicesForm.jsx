// src/ServicesForm.jsx
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import bgImage from "../assets/img/Services.jpeg";
import { toast } from 'react-toastify';
import { Resend } from 'resend';
import ReCAPTCHA from 'react-google-recaptcha';

const ServicesForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      toast.error('Please fill all required fields correctly!');
      setValidated(true);
      return;
    }

    setValidated(true);

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

    toast.info('Submitting your request...');

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
          subject: 'New Service Request from AlphaSoft Website',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
        console.log("Response not ok:", response);
      }

      console.log("SUCCESS!");
      toast.success('Email sent successfully!');
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
      setValidated(false);
    } catch (error) {
      console.error("FAILED...", error);
      toast.error('Failed to send email. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="Services-section my-5">
        <Container>
          <Row className="align-items-stretch">
            {/* Left Side - Image */}
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
              <div className="form-box p-4 text-white h-100 d-flex flex-column justify-content-center p-5">
                <p>Let's Talk</p>
                <h3 className="fw-bold mb-4">Request a Free Quote</h3>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
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
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
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
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid phone number.
                      </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid">
                      Please provide your message.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <ReCAPTCHA
                      sitekey="your-recaptcha-site-key"
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

      <Container
        fluid
        className="my-5 p-5 rounded-3 text-white"
        style={{
          backgroundColor: "#000061",
        }}
      >
        {/* Overlay for readability */}
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "2rem",
            borderRadius: "15px",
          }}
        >
          <Row className="align-items-center text-center text-md-start">
            {/* Heading Column */}
            <Col xs={12} md={8} className="mb-3 mb-md-0">
              <h2 className="fw-bold display-6">
                Grow Your Business and Build Your Website or Software With Us.
              </h2>
            </Col>

            {/* Button Column */}
            <Col
              xs={12}
              md={4}
              className="d-flex justify-content-center justify-content-md-end"
            >
              <a href="#" className="btn btn-primary btn-lg px-4 py-2">
                Get in touch
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ServicesForm;
