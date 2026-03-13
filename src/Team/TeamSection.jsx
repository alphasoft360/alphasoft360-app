import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import teamBg1 from "../assets/img/team1Bg.jpg";
import teamMembers from "./teamData.js";

const TeamCard = ({ member, isLeadership = false }) => (
  <Link to={`/team/${member.id}`} className="team-card-link">
    <div className={`team-card text-center ${isLeadership ? "leadership-card" : ""}`}>
      <div
        className="team-img-wrapper"
        style={{ backgroundImage: `url(${teamBg1})` }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="team-img"
        />
      </div>
      <h5 className="team-name">{member.name}</h5>
      <p className="team-role">{member.role}</p>

      <div className="social-links">
        {member.socials.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedinIn />
          </a>
        )}
        {member.socials.github && (
          <a
            href={member.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
        )}
        {member.socials.stackoverflow && (
          <a
            href={member.socials.stackoverflow}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaStackOverflow />
          </a>
        )}
      </div>
    </div>
  </Link>
);

const TeamSection = () => {
  const leadershipRoles = [
    "Founder & Chief Executive Officer (CEO) - Alphasoft360",
    "Chief Operations Officer(COO) - Alphasoft360",
  ];

  const employeeIds = [
    "maroof-sultan",
    "muhammad-shahbaz",
    "muazam-mughal",
    "ubaidullah",
  ];

  const leadership = teamMembers.filter((member) =>
    leadershipRoles.includes(member.role)
  );

  const employees = teamMembers.filter((member) =>
    employeeIds.includes(member.id)
  );

  const interns = teamMembers.filter((member) =>
    !leadershipRoles.includes(member.role) && !employeeIds.includes(member.id)
  );

  return (
    <div className="team-section">
      <div className="container">
        {/* Leadership Section */}
        {leadership.length > 0 && (
          <div className="team-group mb-5">
            <h3 className="section-title text-center mb-4">Leadership</h3>
            <div className="row justify-content-center">
              {leadership.map((member) => (
                <div
                  key={member.id}
                  className="col-lg-4 col-md-6 mb-4 leadership-col"
                >
                  <TeamCard member={member} isLeadership={true} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Employees Section */}
        {employees.length > 0 && (
          <div className="team-group mb-5">
            <h3 className="section-title text-center mb-4">Our Team</h3>
            <div className="row">
              {employees.map((member) => (
                <div
                  key={member.id}
                  className="col-lg-4 col-md-6 mb-4"
                >
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interns Section */}
        {interns.length > 0 && (
          <div className="team-group mb-5">
            <h3 className="section-title text-center mb-4">Interns</h3>
            <div className="row">
              {interns.map((member) => (
                <div
                  key={member.id}
                  className="col-lg-4 col-md-6 mb-4"
                >
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
