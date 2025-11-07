import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";
// import ReCAPTCHA from 'react-google-recaptcha';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);
  // const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      toast.error("Please fill all required fields correctly!");
      setValidated(true);
      return;
    }

    setValidated(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
      // !captchaToken
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    console.log("Form data before sending:", formData);

    toast.info("Submitting your request...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          message: formData.message,
          subject: 'New Contact Request from AlphaSoft Website',
          // token: captchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
        console.log("Response not ok:", response);
      }

      console.log("SUCCESS!");
      toast.success("✅ Email sent successfully!");
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
      toast.error("❌ Failed to send email. Please try again later.");
    }
  };

  return (
    <section className="contact-section py-5">
      <Container>
        <Row className="align-items-stretch">
          <Col md={5} className="mb-4">
            <div className="contact-info-box h-100 text-white p-4 rounded">
              <p className="small">LET'S TALK</p>
              <h3 className="fw-bold mb-4">Speak With Expert Engineers.</h3>

              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3">
                  <FaPhone size={30} />
                </div>
                <div>
                  <strong>Phone:</strong>
                  <p className="mb-0">+92 3704857471</p>
                </div>
              </div>

              <div
                className="d-flex align-items-center"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/search/?api=1&query=Main%20Pakavenue%20Road%2C%20Sahiwal%2C%2057000%2C%20Pakistan",
                    "_blank"
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <div className="icon-box me-3">
                  <FaMapMarkerAlt size={30} />
                </div>
                <div>
                  <strong>Address:</strong>
                  <p className="mb-0">
                    Main Pakavenue Road, Sahiwal, 57000, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={7}>
            <h6 className="text-primary">GET IN TOUCH</h6>
            <h3 className="fw-bold mb-4">Fill The Form Below</h3>

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
              {/* <Form.Group className="mb-3">
                <ReCAPTCHA
                  sitekey="6LcUZ_srAAAAALB4Ag29qgOfZ3_-UXLLYUXPmDud"
                  onChange={(token) => setCaptchaToken(token)}
                />
              </Form.Group> */}

              <Button type="submit" className="submit-btn px-4 py-2">
                Submit Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
