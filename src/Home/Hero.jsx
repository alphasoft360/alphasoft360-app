import React, { useMemo, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Resend } from 'resend';

// High-quality software company themed images from Unsplash
const allHeroImages = [
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1581090700227-f7a447b9d577?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=2000&h=1200&fit=crop",
];

const Hero = () => {
  const [refreshSeed, setRefreshSeed] = useState(0);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  useEffect(() => {
    setRefreshSeed(Math.random());
  }, []);

  const heroImages = useMemo(() => {
    const shuffled = [...allHeroImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [refreshSeed]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.from_name ||
      !formData.from_email ||
      !formData.from_phone ||
      !formData.message
    ) {
      toast.error("Please fill in all fields before submitting.");
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
          name: formData.from_name,
          email: formData.from_email,
          phone: formData.from_phone,
          message: formData.message,
          subject: 'New Appointment Request from AlphaSoft Website',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
        console.log("Response not ok:", response);
        const errorData = await response.json();
        console.error("Error data:", errorData);
      }

      console.log("SUCCESS!");
      toast.success("Email sent successfully!");
      setFormData({ from_name: "", from_email: "", from_phone: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send email. Please try again later.");
    }
  };

  return (
    <div>
      <Carousel className="hero-carousel" interval={5000} fade controls={false}>
        {heroImages.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero d-flex align-items-center"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
              }}
            >
              <Container>
                <Row className="align-items-center">
                  <Col md={6} className="text-white">
                    <h1 className="fw-bold">
                      IT Consulting Services For Your Business
                    </h1>
                    <p className="lead">
                      AlphaSoft360 is a leading technology solutions provider
                      company all over the world with over a decade of proven
                      expertise.
                    </p>
                  </Col>

                  <Col md={5} className="ms-auto">
                    <div
                      className="hero-form rounded-4 shadow p-4"
                      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                    >
                      <h4 className="fw-bold text-light mb-3">
                        Schedule Your Appointment
                      </h4>
                      <p className="text-light mb-4">
                        We are here to help you 24/7 with our experts
                      </p>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="E-Mail"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="number"
                            placeholder="Phone Number"
                            name="from_phone"
                            value={formData.from_phone}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Button type="submit" className="w-100 hero-submit-btn">
                          Submit Now
                        </Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Hero;
