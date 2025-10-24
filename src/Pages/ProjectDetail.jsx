import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import projectsData from "../Home/projectsData";
import "../Home/Projects.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container text-center py-5">
        <h2>Project Not Found</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail bg-light">
      {/* ===== Back Link ===== */}
      <section className="container py-4">
        <Link to="/" className="btn project-back-btn">
          <FaArrowLeft className="me-2" /> Back to Projects
        </Link>
      </section>

      {/* ===== Project Header ===== */}
      <section className="container project-header-section p-4 bg-white shadow-sm rounded-3 mb-5">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={project.img}
              alt={project.title}
              className="rounded shadow-sm"
              style={{ width: "100%", maxWidth: "400px", height: "250px", objectFit: "cover" }}
            />
          </div>

          {/* Right: Info */}
          <div className="col-lg-7">
            <p className="text-primary fw-semibold mb-2">{project.category}</p>
            <h2 className="fw-bold mb-3">{project.title}</h2>
            <p className="text-muted mb-4" style={{ maxWidth: "600px" }}>
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* ===== Project Overview + Technologies ===== */}
      <section className="container pb-5">
        <div className="row">
          {/* Project Overview */}
          <div className="col-lg-7 mb-4">
            <h4 className="fw-bold mb-3">Project Overview</h4>
            {project.overview.map((para, index) => (
              <p
                key={index}
                className="text-muted mb-3"
                style={{ lineHeight: "1.8" }}
              >
                {para}
              </p>
            ))}

            {/* Features */}
            <h5 className="fw-bold mb-3 mt-4">Key Features</h5>
            <div className="row">
              {project.features.map((feature, index) => (
                <div key={index} className="col-md-6 mb-2">
                  <div className="d-flex align-items-center">
                    <span className="badge bg-primary me-2">✓</span>
                    <span className="text-muted">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="col-lg-5">
            <h4 className="fw-bold mb-3">Technologies Used</h4>
            {project.technologies.map((tech, index) => (
              <div key={index} className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold">{tech.name}</span>
                  <span>{tech.percentage}%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${tech.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
