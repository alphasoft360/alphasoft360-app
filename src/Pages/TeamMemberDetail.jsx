import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowLeft,
  FaGithub,
  FaStackOverflow,
  FaWhatsapp,
} from "react-icons/fa";
import teamMembers from "../Team/teamData";
import "../Team/Team.css";
import IdCard3D from "../components/IdCard3D";
import { createBusinessWhatsAppLink } from "../utils/whatsappUtils";

const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="container text-center py-5">
        <h2>Team Member Not Found</h2>
        <Link to="/team" className="btn btn-primary mt-3">
          Back to Team
        </Link>
      </div>
    );
  }

  return (
    <div className="team-member-detail bg-light">
      {/* ===== Back Link ===== */}
      <section className="container py-4">
        <Link to="/team" className="btn mb-4">
          <FaArrowLeft className="me-2" /> Back to Team
        </Link>
      </section>

      {/* ===== Profile Section ===== */}
      <section className="container team-profile-section p-4 bg-white shadow-sm rounded-3 mb-5">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-lg-3 text-center mb-4 mb-lg-0">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-circle profile-photo shadow-sm"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>

          {/* Middle: Info */}
          <div className="col-lg-4">
            <h6 className="text-uppercase fw-semibold mb-1">{member.role}</h6>
            <h2 className="fw-bold mb-3">{member.name}</h2>
            <p className="text-muted mb-3" style={{ maxWidth: "600px" }}>
              {member.bio}
            </p>

            <div className="contact-details mb-3 ">
              <p className="mb-2">
                <FaEnvelope className="me-2" />
                <a href={`mailto:${member.contact.email}`}>
                  {member.contact.email}
                </a>
              </p>
              {member.contact.phone && (
                <p className="mb-2">
                  <FaPhoneAlt className="me-2" />
                  <a 
                    href={createBusinessWhatsAppLink(member.contact.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-success text-decoration-none"
                  >
                    {member.contact.phone}
                  </a>
                </p>
              )}
              <p>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="me-2 fs-4" />
                </a>
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="me-2 fs-4" />
                </a>
                <a
                  href={member.socials.stackoverflow}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaStackOverflow className="me-2 fs-4" />
                </a>
              </p>
            </div>
          </div>

          {/* Right: 3D ID Card */}
          <div className="col-lg-5">
            <IdCard3D member={member} />
          </div>
        </div>
      </section>

      {/* ===== Biography + Skills ===== */}
      <section className="container pb-5">
        <div className="row">
          {/* Biography */}
          <div className="col-lg-6 mb-4">
            <h4 className="fw-bold mb-3">Biography</h4>
            {member.biography.map((para, index) => (
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
            <h4 className="fw-bold mb-3">Professional Skills</h4>
            {member.skills.map((skill, index) => (
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

export default TeamMemberDetail;
