import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// Import service icons
import icon1 from "../assets/img/1.png";
import icon2 from "../assets/img/2.png";
import icon3 from "../assets/img/3.png";
import icon4 from "../assets/img/4.png";
import icon5 from "../assets/img/5.png";
import icon6 from "../assets/img/6.png";
import icon7 from "../assets/img/7.png";
import icon8 from "../assets/img/8.png";
import icon9 from "../assets/img/9.png";
import icon10 from "../assets/img/10.png";
import icon11 from "../assets/img/11.png";
import icon12 from "../assets/img/12.png";

// Data for services
const services = [
  {
    id: "software-development",
    img: icon1,
    title: "App Development",
    description:
      "Comprehensive mobile application development services creating native, hybrid, and cross-platform apps for iOS and Android with modern technologies and best practices."
  },
  {
    id: "web-development",
    img: icon2,
    title: "Web Development",
    description:
      "Custom web application development using modern frameworks and technologies to create responsive, user-friendly websites and web platforms.",
  },
  {
    id: "ecommerce-solutions",
    img: icon3,
    title: "E-Commerce Solutions",
    description:
      "Complete e-commerce platform development with secure payment gateways, inventory management, and user-friendly shopping experiences to drive online sales.",
  },
  {
    id: "cloud-devops",
    img: icon4,
    title: "Cloud & DevOps",
    description:
      "Comprehensive cloud migration, infrastructure automation, and DevOps practices to accelerate development cycles and improve deployment reliability.",
  },
  {
    id: "real-estate-management-solutions",
    img: icon5,
    title: "Real Estate Management Solutions",
    description:
      "Comprehensive property management solutions to streamline real estate operations and enhance tenant experiences."
  },
   {
id: "lms-education-solutions",
img: icon6,
title: "LMS & Education Solutions",
description:
"Comprehensive learning management systems and educational technology solutions for modern education."
   },
   {
    id: "healthcare-management-systems",
    img: icon7,
    title: "Healthcare Management Systems",
    description:
      "Integrated healthcare solutions to improve patient care and streamline medical practice operations."
   },
   {
    id: "ai-powered-automation",
    img: icon8,
    title: "AI-Powered Automation",
    description:
      "Leverage artificial intelligence to automate processes, enhance decision-making, and drive business growth."
   },
   {
    id: "iot-apps",
    img: icon9,
    title: "IOT Apps",
    description:
      "Innovative Internet of Things solutions to connect devices, collect data, and enable smart automation."
   },
  {
    id: "product-design",
    img: icon10,
    title: "Product & Design",
    description:
      "Comprehensive product design services including UI/UX design, user research, prototyping, and brand identity to create intuitive and engaging digital products."
  },
  {
    id: "data-center",
    img: icon11,
    title: "Data Center",
    description:
      "Enterprise-grade data center solutions providing secure hosting, colocation, disaster recovery, and 24/7 monitoring for critical business infrastructure."
  },
  {
    id: "erp-crm-solutions",
    img: icon12,
    title: "ERP & CRM Solutions",
    description:
      "Comprehensive ERP and CRM solutions to streamline business operations, enhance customer relationships, and improve decision-making through integrated systems."
  }
];

const Services = () => {
  // Service Card Component
  const ServiceCard = ({ image, title, description, id }) => (
    <div className="feature-card">
      <div className="feature-card-inner">
        {/* Front (icon + title only) */}
        <div className="feature-card-front shadow-sm rounded text-center p-4 col-lg-4 col-md-6 col-sm-12">
          <img src={image} alt={title} width="60" height="60" />
          <h5 className="fw-bold mt-3">{title}</h5>
          <p className="mb-3 mt-2">{description}</p>
        </div>

        {/* Back (different content + button) */}
        <div className="feature-card-back shadow-sm rounded text-center p-4">
          <h5 className="fw-bold">{title}</h5>
          <p className="mb-3 mt-2">Discover how our {title.toLowerCase()} services can transform your business with cutting-edge solutions and expert support.</p>
          <Link to={`/services/${id}`} className="btn btn-light fw-bold">Learn More</Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white text-center my-5">
      <Container>
        {/* Section Title */}
        <Row className="justify-content-center text-center">
          <Col xs={10} md={6}>
            <small className="text-primary fw-bold">SERVICES</small>
            <h3 className="fs-2 fs-lg-3">
              AlphaSoft Offers Comprehensive IT Solutions and Software Development Services
            </h3>
            <div className="line mx-auto"></div>
          </Col>
        </Row>

        {/* Service Cards */}
        <Row className="mt-4 mt-md-5">
          {services.map((service, index) => (
            <Col sm={6} lg={4} className="mt-4" key={index}>
              <ServiceCard
                image={service.img}
                title={service.title}
                description={service.description}
                id={service.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
