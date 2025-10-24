import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: "SILVER",
      price: billingCycle === 'monthly' ? "$29.99" : "$299.99",
      period: billingCycle === 'monthly' ? "Monthly Package" : "Yearly Package",
      features: [
        "Basic Web Application",
        "Admin Dashboard",
        "Responsive Design",
        "Email & Phone Support",
        "1 Month Free Maintenance"
      ],
      recommended: false,
      savings: ""
    },
    {
      name: "GOLD",
      price: billingCycle === 'monthly' ? "$39.99" : "$399.99",
      period: billingCycle === 'monthly' ? "Monthly Package" : "Yearly Package",
      features: [
        "Advanced Web Application",
        "2 Mobile Apps (iOS & Android)",
        "Database Integration",
        "Priority Email & Phone Support",
        "3 Months Free Maintenance"
      ],
      recommended: true,
      savings: "Save 15%"
    },
    {
      name: "PLATINUM",
      price: billingCycle === 'monthly' ? "$79.99" : "$799.99",
      period: billingCycle === 'monthly' ? "Monthly Package" : "Yearly Package",
      features: [
        "Enterprise Software Solution",
        "3 Cross-Platform Apps",
        "Advanced Analytics & Reporting",
        "24/7 Premium Support",
        "6 Months Free Maintenance"
      ],
      recommended: false,
      savings: "Save 20%"
    }
  ];

  return (
    <section className="pricing-page">
      <Container className="PricingSection">
        <div className="text-center mb-5">
          <p className="text-primary">Pricing</p>
          <h1 className="display-4 fw-bold">AlphaSoft Pricing Plans</h1>
          <div className="divider mx-auto my-4"></div>
          <p className="lead text-muted">Choose the plan that works best for your needs</p>

          {/* Billing Toggle */}
          <div className="billing-toggle my-4">
            <Button
              variant={billingCycle === 'monthly' ? 'primary' : 'outline-primary'}
              onClick={() => setBillingCycle('monthly')}
              className="me-2"
            >
              Monthly Billing
            </Button>
            <Button
              variant={billingCycle === 'yearly' ? 'primary' : 'outline-primary'}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly Billing
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <Row className="justify-content-center">
          {pricingPlans.map((plan, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card
                className={`h-100 pricing-card ${plan.recommended ? 'highlight-card' : ''}`}
              >
                {/* Recommended label */}
                {plan.recommended && (
                  <div className="recommended-badge">Most Popular</div>
                )}

                {/* Discount Savings */}
                {plan.savings && (
                  <Badge bg="success" className="savings-badge">{plan.savings}</Badge>
                )}

                <Card.Body className="text-center p-4">
                  {/* Badge top-left */}
                  <span className={`plan-badge plan-${plan.name.toLowerCase()}`}>
                    {plan.name}
                  </span>

                  {/* Logo */}
                  <div className="plan-logo mb-3">
                    <i className={`fas fa-crown fa-3x ${plan.name.toLowerCase()}-icon`}></i>
                  </div>

                  {/* Price */}
                  <div className="price my-3">
                    <span className="display-4 fw-bold">{plan.price}</span>
                    <div className="period text-muted">{plan.period}</div>
                  </div>

                  {/* Features */}
                  <ul className="list-unstyled my-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        <span className="feature-check">✓</span> {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.recommended ? "light" : "outline-primary"}
                    className="w-100 mt-3"
                  >
                    BUY NOW
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default PricingSection;