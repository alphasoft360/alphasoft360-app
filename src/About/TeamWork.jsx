import React from 'react';
import { Link } from 'react-router-dom';
import teamMembers from '../Team/teamData.js';

const TeamWorkSection = () => {
  return (
    <section className="working-process-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="process-tag">TEAM</span>
          <h2 className="section-title mt-3">Our Team</h2>
        </div>
        <div className="row justify-content-center">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="process-step-card text-center">
                <div className="process-image-wrapper">
                  <Link to={`/team/${member.id}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-fluid rounded-circle process-image"
                    />
                  </Link>
                  {/* Decorative dashed circle */}
                  <div className="dashed-circle"></div>
                  {/* Blue circles */}
                  <div className="blue-circle circle-1"></div>
                  <div className="blue-circle circle-2"></div>
                </div>
                <h5 className="step-title mt-4">{member.name}</h5>
                <p className="step-description mt-2">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamWorkSection;