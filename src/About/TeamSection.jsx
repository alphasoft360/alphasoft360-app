import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const About_teamSliderSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive handling using media queries
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 992) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <section className="about_team-section py-5">
      <Container>
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold d-block mb-2">
            OUR ABOUT_TEAM
          </span>
          <h2 className="fw-bold text-white">Meet With IT Experts</h2>
          <p className="text-light small">
            The professionals behind our innovation and success
          </p>
        </div>

        <Slider {...settings}>
          {about_teamMembers.map((member, index) => (
            <div key={index} className="px-3">
              <div className="about_team-card bg-white text-center rounded shadow-sm p-4">
                <div className="position-relative d-inline-block mb-3">
                  <Link to={`/team/${member.id}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle about_team-img"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        border: "4px solid #0d6efd",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                </div>
                <h5 className="fw-bold mb-1">{member.name}</h5>
                <p className="text-primary small mb-3">{member.role}</p>

                <div className="d-flex justify-content-center gap-3">
                  <a href="#" className="social-icon">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="social-icon">
                    <FaInstagram />
                  </a>
                  <a href="#" className="social-icon">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-icon">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>

      <style>{`
        .about_team-section {
          background: linear-gradient(180deg, #071e83 0%, #00135c 100%);
        }

        .about_team-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 350px;
        }

        .about_team-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          background: linear-gradient(to right, #03228f 0%, #03228f 0%, #03228f 26%, #4e95ed 100%, #2989d8 100%, #207cca 100%, #0b70e1 100%) !important;
          color: white;
        }

        .about_team-card:hover h5,
        .about_team-card:hover p {
          font-weight: bold;
        }

        .social-icon {
          color: #0d6efd;
          font-size: 1rem;
          background: rgba(13, 110, 253, 0.1);
          padding: 10px;
          border-radius: 50%;
          transition: all 0.3s ease;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .social-icon:hover {
          background: linear-gradient(to right, #03228f 0%, #03228f 0%, #03228f 26%, #4e95ed 100%, #2989d8 100%, #207cca 100%, #0b70e1 100%);
          color: white;
          transform: translateY(-3px);
        }

        .slick-dots li button:before {
          color: #ffffff !important;
          font-size: 10px;
        }

        @media (max-width: 992px) {
          .about_team-section h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .about_team-section h2 {
            font-size: 1.6rem;
          }
          .about_team-card {
            min-height: 330px;
          }
        }

        @media (max-width: 576px) {
          .about_team-section h2 {
            font-size: 1.4rem;
          }
          .about_team-card {
            min-height: 310px;
          }
        }
      `}</style>
    </section>
  );
};

export default About_teamSliderSection;

