import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// Import service icons
import icon1 from "../assets/img/1.png";
import icon2 from "../assets/img/2.png";
import icon3 from "../assets/img/3.png";
import icon4 from "../assets/img/4.png";
import icon5 from "../assets/img/5.png";
import icon6 from "../assets/img/6.png";

// Data for services
const services = [
  {
    id: "software-development",
    img: icon1,
    title: "App Development",
    description:
      "Secure and scalable data center services offering advanced infrastructure management, ensuring peak performance and maximum uptime."
  },
  {
    id: "web-development",
    img: icon2,
    title: "Web Development",
    description:
      "Custom web application development using modern frameworks and technologies to create responsive, user-friendly websites and web platforms.",
  },
  {
    id: "analytic-solutions",
    img: icon3,
    title: "Analytic Solutions",
    description:
      "Advanced data analytics and business intelligence solutions to transform raw data into actionable insights for informed decision-making.",
  },
  {
    id: "cloud-devops",
    img: icon4,
    title: "Cloud & DevOps",
    description:
      "Comprehensive cloud migration, infrastructure automation, and DevOps practices to accelerate development cycles and improve deployment reliability.",
  },
  {
    id: "product-design",
    img: icon5,
    title: "Product & Design",
    description:
      "User-centered product design and UX/UI development services to create intuitive, engaging digital products that delight your customers.",
  },
  {
    id: "data-center",
    img: icon6,
     title: "Software Development",
    description:
      "Full-cycle software development services including custom applications, enterprise solutions, and system integrations tailored to your business needs.",
  },
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

        {/* Back (title + description + button) */}
        <div className="feature-card-back shadow-sm rounded text-center p-4">
          <h5 className="fw-bold">{title}</h5>
          <p className="mb-3 mt-2">{description}</p>
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
