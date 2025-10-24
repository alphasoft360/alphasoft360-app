import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import ngbng from "../assets/img/ngbng.png";
import teamMembers from "./teamData.js";


const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="container">
        <div className="row justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="col col-lg-4 col-md-6 mb-4">
              <Link to={`/team/${member.id}`} className="team-card-link">
                <div className="team-card text-center">
                  <div
                    className="team-img-wrapper"
                    style={{ backgroundImage: `url(${ngbng})` }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-img"
                    />
                  </div>
                  <h5 className="team-name">{member.name}</h5>
                  <p className="team-role">{member.role}</p>

                  {/* Social Links */}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
