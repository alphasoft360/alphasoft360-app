import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaGlobe, FaHeadset } from "react-icons/fa";
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
    <>
    <section className="contact-section py-5">
      <Container>
        <Row className="align-items-stretch">
          <Col md={5} className="mb-4">
            <div className="contact-info-box h-100 text-white p-4 rounded">
              <p className="small text-center text-primary">LET'S TALK</p>
              <h3 className="fw-bold mb-4">Speak With Expert Engineers.</h3>

              <div className="contact-items">
                <div className="contact-item d-flex align-items-center mb-4">
                  <div className="icon-wrapper me-3">
                    <FaPhone className="contact-icon" />
                  </div>
                  <div>
                    <strong>Phone:</strong>
                    <p className="mb-0">+92 3704857471</p>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-center mb-4">
                  <div className="icon-wrapper me-3">
                    <FaEnvelope className="contact-icon" />
                  </div>
                  <div>
                    <strong>Email:</strong>
                    <p className="mb-0">info@alphasoft360.com</p>
                  </div>
                </div>

                <div
                  className="contact-item d-flex align-items-center mb-4"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=Main%20Pakavenue%20Road%2C%20Sahiwal%2C%2057000%2C%20Pakistan",
                      "_blank"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <div className="icon-wrapper me-3">
                    <FaMapMarkerAlt className="contact-icon" />
                  </div>
                  <div>
                    <strong>Address:</strong>
                    <p className="mb-0">
                      Main Pakavenue Road, Sahiwal, 57000, Pakistan
                    </p>
                  </div>
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

    {/* Map Section */}
    <section className="map-section">
      <Container fluid>
        <Row>
          <Col className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.2749498457!2d73.123456789!3d30.654321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM5JzA0LjAiTiA3M8KwMDgnMjUuMCJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AlphaSoft360 Office Location"
            />
          </Col>
        </Row>
      </Container>
    </section>

    {/* Additional Info Section */}
    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col lg={12}>
            <h2 className="fw-bold mb-3">Why Choose AlphaSoft360?</h2>
            <p className="text-muted">We deliver excellence in every project we undertake</p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <div className="feature-icon mb-3">
                <FaGlobe size={40} className="text-primary" />
              </div>
              <h5 className="fw-bold mb-3">Global Reach</h5>
              <p className="text-muted">Serving clients worldwide with cutting-edge technology solutions tailored to your business needs.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <div className="feature-icon mb-3">
                <FaHeadset size={40} className="text-primary" />
              </div>
              <h5 className="fw-bold mb-3">24/7 Support</h5>
              <p className="text-muted">Round-the-clock technical support to ensure your business operations run smoothly without interruption.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <div className="feature-icon mb-3">
                <FaClock size={40} className="text-primary" />
              </div>
              <h5 className="fw-bold mb-3">On-Time Delivery</h5>
              <p className="text-muted">Committed to delivering projects on time with exceptional quality and attention to detail.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <style>{`
      .contact-items {
        margin-top: 20px;
      }
      
      .contact-item {
        transition: all 0.3s ease;
        padding: 15px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .contact-item:hover {
        transform: translateX(10px);
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      }
      
      .icon-wrapper {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
      }
      
      .contact-item:hover .icon-wrapper {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
      }
      
      .contact-icon {
        color: white;
        font-size: 20px;
        transition: all 0.3s ease;
      }
      
      .contact-item:hover .contact-icon {
        transform: scale(1.2);
      }
      
      .contact-item strong {
        color: #ffffff;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .contact-item p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 14px;
        margin-top: 5px;
        transition: all 0.3s ease;
      }
      
      .contact-item:hover p {
        color: #ffffff;
      }
      
      @keyframes pulse {
        0% {
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        50% {
          box-shadow: 0 4px 25px rgba(102, 126, 234, 0.8);
        }
        100% {
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
      }
      
      .icon-wrapper {
        animation: pulse 2s infinite;
      }
      
      .contact-item:nth-child(2) .icon-wrapper {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        animation-delay: 0.2s;
      }
      
      .contact-item:nth-child(3) .icon-wrapper {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        animation-delay: 0.4s;
      }
      
      .contact-item:nth-child(4) .icon-wrapper {
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        animation-delay: 0.6s;
      }
      
      .contact-item:nth-child(5) .icon-wrapper {
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        animation-delay: 0.8s;
      }
      
      .map-section {
        padding: 0;
        margin: 0;
      }
      
      .feature-icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }
      
      .feature-icon:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }
      
      .feature-icon svg {
        transition: all 0.3s ease;
      }
      
      .feature-icon:hover svg {
        transform: scale(1.2);
      }
    `}</style>
    </>
  );
};

export default ContactSection;
