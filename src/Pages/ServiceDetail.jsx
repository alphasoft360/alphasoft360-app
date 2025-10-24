import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import servicesData from "../Services/servicesData";
import "../Services/services.css";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="container text-center py-5">
        <h2>Service Not Found</h2>
        <Link to="/services" className="btn btn-primary mt-3 service-back-btn">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail bg-white">
      {/* ===== Back Link ===== */}
      <section className="container py-4">
        <Link to="/services" className="btn btn-primary mb-4 service-back-btn">
          <FaArrowLeft className="me-2" /> Back to Services
        </Link>
      </section>

      {/* ===== Profile Section ===== */}
      <section className="container service-profile-section p-4 bg-white shadow-sm rounded-3 mb-5">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-lg-3 text-center mb-4 mb-lg-0">
            <img
              src={service.img}
              alt={service.title}
              className="rounded-circle profile-photo shadow-sm"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>

          {/* Right: Info */}
          <div className="col-lg-9">
            <h2 className="fw-bold mb-3">{service.title}</h2>
            <p className="text-muted mb-3" style={{ maxWidth: "600px" }}>
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* ===== Biography + Skills ===== */}
      <section className="container pb-5">
        <div className="row">
          {/* Biography */}
          <div className="col-lg-6 mb-4">
            <h4 className="fw-bold mb-3">Service Overview</h4>
            {service.biography.map((para, index) => (
              <p
                key={index}
                className="text-muted mb-3"
                style={{ lineHeight: "1.8" }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Skills */}
          <div className="col-lg-6">
            <h4 className="fw-bold mb-3">Key Capabilities</h4>
            {service.skills.map((skill, index) => (
              <div key={index} className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${skill.percentage}%` }}
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

export default ServiceDetail;
