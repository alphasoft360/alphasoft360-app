// src/Home/ContactSection.jsx
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import personImage from "../assets/img/contact-us.jpg";
import contactData from "../data/contactData";


// Stat Card with CountUp
const StatCard = ({ value, label, isVisible }) => {
  // Separate numeric part and suffix (like "k" or "+")
  const numberPart = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  return (
    <div className="stat-card text-center">
      <h3>
        {isVisible ? (
          <CountUp end={numberPart} duration={2.5} suffix={suffix} />
        ) : (
          "0"
        )}
      </h3>
      <p>{label}</p>
    </div>
  );
};

const ContactSection = () => {
  // Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Run only once
    threshold: 0.3, // Trigger when 30% visible
  });

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .throbbing-heartbeat {
            animation: throb 1s infinite;
            color: red;
          }
          @keyframes throb {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `,
        }}
      />
      <div className="contact-section-container ">
        {/* Main Content */}
        <div className="contact-main-content">
          

          {/* Right: Contact Info */}
          <div className="contact-info">
            <div className="phone-icon-circle">
              <a
              className="bg-light rounded-5"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(`https://wa.me/${contactData.whatsappNumber}`, "_blank");
                }}
              >
                <FaPhone className="throbbing-heartbeat" />
              </a>
            </div>
            <p className="call-us-text">CHAT WITH US 24/7</p>
            <p className="phone-number">
              <a
                href={`https://wa.me/${contactData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                {contactData.phone}
              </a>
            </p>
            <p className="contact-description">
              Have any idea or project in your mind? Chat with us on WhatsApp or schedule an
              appointment. Our representative will reply to you shortly.
            </p>

            {/* Additional Contact Methods */}
            <div className="additional-contact-methods">
              <div
                className="contact-method"
                onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contactData.email}`, "_blank")}
                style={{ cursor: "pointer" }}
              >
                <FaEnvelope size={30} className="me-2" />
                <div>
                  <p className="contact-method-title">Email Us</p>
                  <p className="contact-method-detail">{contactData.email}</p>
                </div>
              </div>
              <div
                className="contact-method"
                onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Main%20Pakavenue%20Road%2C%20Sahiwal%2C%2057000%2C%20Pakistan", "_blank")}
                style={{ cursor: "pointer" }}
              >
                <FaMapMarkerAlt size={30}  className="me-3" />
                <div>
                  <p className="contact-method-title">Our Location</p>
                  <p className="contact-method-detail">
                    Main Pakavenue Road, Sahiwal, 57000, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <a
              className="btn btn-lg text-light lets-talk-button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                  window.open(`https://wa.me/${contactData.whatsappNumber}`, "_blank");
              }}
            >
              Let's Chat
            </a>
          </div>
          {/* Left: Image + Idea Bubble */}
          <div className="image-and-bubble">
            <img
              src={personImage}
              alt="Businessman"
              className="contact-person-image"
            />
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar-wrapper mb-5" ref={ref}>
          <div className="stats-bar text-primary">
            <StatCard value="60k" label="Happy Clients" isVisible={inView} />
            <StatCard value="40+" label="Companies" isVisible={inView} />
            <StatCard value="250+" label="Projects Done" isVisible={inView} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
