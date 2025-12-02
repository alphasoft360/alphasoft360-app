import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCalendar,
  FaUser,
  FaClock,
} from "react-icons/fa";
import projectsData from "../data/projectsData";
import "../styles/projects.css";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail-container">
        <Container className="py-5">
          <div className="not-found text-center">
            <h2 className="mb-4">Project Not Found</h2>
            <p className="text-muted mb-4">
              The project you're looking for doesn't exist.
            </p>
            <Button
              as={Link}
              to="/projects"
              variant="primary"
              className="back-btn"
            >
              <FaArrowLeft className="me-2" /> Back to Projects
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      {/* Hero Section */}
      <div className="project-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <Container>
          <div className="hero-content">
            <Link
              to="/projects"
              className="back-link text-white text-decoration-none mb-4 d-inline-flex align-items-center"
            >
              <FaArrowLeft className="me-2" /> Back to Projects
            </Link>
            <div className="hero-info">
              <h1 className="display-3 fw-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="project-description lead text-white mb-4">
                {project.description}
              </p>
              <div className="project-meta d-flex flex-wrap gap-3">
                {project.client && (
                  <span className="meta-item text-white d-flex align-items-center">
                    <FaUser className="me-2" /> {project.client}
                  </span>
                )}
                {project.duration && (
                  <span className="meta-item text-white d-flex align-items-center">
                    <FaClock className="me-2" /> {project.duration}
                  </span>
                )}
                {project.completionDate && (
                  <span className="meta-item text-white d-flex align-items-center">
                    <FaCalendar className="me-2" />{" "}
                    {new Date(project.completionDate).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <div className="project-content py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="project-main d-flex flex-column gap-5">
                {/* Project Overview */}
                <section className="content-section">
                  <h2 className="h2 fw-bold mb-4">Project Overview</h2>
                  <div className="overview-content">
                    {project.overview.map((paragraph) => (
                      <p className="text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>

                {/* Features */}
                <section className="content-section">
                  <h2 className="h2 fw-bold mb-4">Key Features</h2>
                  <Row className="features-grid g-3">
                    {project.features.map((feature, index) => (
                      <Col key={index} md={6} lg={4}>
                        <div className="feature-item bg-white p-3 rounded shadow-sm d-flex align-items-center">
                          <div className="feature-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                            <i className="bi bi-check-lg"></i>
                          </div>
                          <span className="fw-medium">{feature}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </section>

                {/* Challenges & Solutions */}
                <section className="content-section">
                  <h2 className="h2 fw-bold mb-4">Challenges & Solutions</h2>
                  <Row className="challenges-solutions g-4">
                    <Col md={6}>
                      <Card className="challenges h-100">
                        <Card.Body className="p-4">
                          <h3 className="h5 fw-bold mb-3">🔍 Challenges</h3>
                          <ul className="list-unstyled">
                            {project.challenges.map((challenge, index) => (
                              <li
                                key={index}
                                className="mb-2 ps-3 border-start border-danger border-2"
                              >
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card className="solutions h-100">
                        <Card.Body className="p-4">
                          <h3 className="h5 fw-bold mb-3">✅ Solutions</h3>
                          <ul className="list-unstyled">
                            {project.solutions.map((solution, index) => (
                              <li
                                key={index}
                                className="mb-2 ps-3 border-start border-success border-2"
                              >
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </section>
              </div>
            </Col>

            <Col lg={4}>
              <div className="project-sidebar d-flex flex-column gap-4">
                {/* Project Image */}
                <Card className="project-image-card">
                  <Card.Img src={project.image} alt={project.title} />
                </Card>

                {/* Tech Stack */}
                <Card className="tech-stack-card">
                  <Card.Body className="p-4">
                    <h3 className="h5 fw-bold mb-3">Technologies Used</h3>
                    <div className="tech-list d-flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <Badge key={index} bg="primary" className="tech-item">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>

                {/* Links */}
                <Card className="links-card">
                  <Card.Body className="p-4">
                    <h3 className="h5 fw-bold mb-3">Project Links</h3>
                    <div className="project-links d-flex flex-column gap-2">
                      {project.liveDemo && (
                        <Button
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="success"
                          className="link-btn live-demo"
                        >
                          <FaExternalLinkAlt className="me-2" /> Live Demo
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="dark"
                          className="link-btn github"
                        >
                          <FaGithub className="me-2" /> View Code
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>

                {/* Quick Stats */}
                <Card className="stats-card">
                  <Card.Body className="p-4">
                    <h3 className="h5 fw-bold mb-3">Project Stats</h3>
                    <Row className="stats-grid g-3">
                      <Col xs={4}>
                        <div className="stat-item text-center p-2 bg-light rounded">
                          <div className="stat-number fw-bold text-primary">
                            {project.features.length}
                          </div>
                          <div className="stat-label small text-muted text-uppercase">
                            Features
                          </div>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="stat-item text-center p-2 bg-light rounded">
                          <div className="stat-number fw-bold text-primary">
                            {project.techStack.length}
                          </div>
                          <div className="stat-label small text-muted text-uppercase">
                            Technologies
                          </div>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="stat-item text-center p-2 bg-light rounded">
                          <div className="stat-number fw-bold text-primary">
                            {project.challenges.length}
                          </div>
                          <div className="stat-label small text-muted text-uppercase">
                            Challenges
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProjectDetail;
