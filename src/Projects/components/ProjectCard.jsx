import React from "react";
import { Link } from "react-router-dom";
import { Card, Badge, Button } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card h-100 shadow border-0 rounded-4 overflow-hidden">
      <div className="project-image-container position-relative">
        <Card.Img
          src={project.image}
          alt={project.title}
          className="project-image w-100"
          style={{ objectFit: "cover", height: "220px", transition: "0.4s" }}
        />

        <div
          className="project-overlay position-absolute w-100 h-100 d-flex align-items-end p-3"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
          }}
        >
          <div className="tech-stack d-flex flex-wrap gap-2">
            {project.techStack?.slice(0, 3).map((tech, index) => (
              <Badge key={index} bg="light" text="dark" className="tech-tag">
                {tech}
              </Badge>
            ))}

            {project.techStack?.length > 3 && (
              <Badge bg="light" text="dark" className="tech-tag">
                +{project.techStack.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <Card.Body className="d-flex flex-column">
        <small className="text-primary fw-bold text-uppercase mb-1">
          {project.category}
        </small>

        <Card.Title className="fw-bold">{project.title}</Card.Title>

        <Card.Text className="text-muted flex-grow-1">
          {project.description}
        </Card.Text>

        <div className="mt-auto pt-3 d-flex justify-content-between align-items-center border-top">
          <Button
            as={Link}
            to={`/projects/${project.slug}`}
            variant="primary"
            className="px-3"
          >
            View Details
          </Button>

          <div className="text-end small">
            {project.duration && (
              <div className="fw-semibold text-primary">{project.duration}</div>
            )}

            {project.client && (
              <div className="fst-italic text-muted">{project.client}</div>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
