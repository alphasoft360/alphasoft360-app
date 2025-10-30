import React, { useState } from "react";
import { MdLocationOn, MdCall, MdEmail, MdAccessTime } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from 'react-toastify';
import Logo from "../assets/img/AlphaSoft_logo1.png"; // Adjust the path as needed
import contactData from "../data/contactData";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!newsletterEmail) {
      toast.error("Please enter your email address.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.info('Subscribing to newsletter...');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: newsletterEmail,
          subject: 'Newsletter Subscription from AlphaSoft Website',
          message: `New newsletter subscription request from: ${newsletterEmail}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      toast.success('✅ Successfully subscribed to newsletter!');
      setNewsletterEmail('');
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      toast.error('❌ Failed to subscribe. Please try again.');
    }
  };

  return (
    <footer id="rs-footer" className="rs-footer">
      <div
        className="footer-top"
        style={{
          background: "linear-gradient(180deg, #061b6b 0%, #000a33 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <div className="container">
          <div className="row">
            {/* Logo & About */}
            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
              <div className="footer-logo mb-30">
                <a href="/">
                  <img src={Logo} alt="logo" className="img-fluid" />
                </a>
              </div>
              <p className="pb-30">
                AlphaSoft is a leading software development company specializing
                in custom web applications, mobile apps, and cloud solutions. We
                deliver high-quality software that helps businesses thrive in
                the digital age.
              </p>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
              <h3 className="widget-title">IT Services</h3>
              <ul className="site-map">
                <li>
                  <a href="/software-development">Software Development</a>
                </li>
                <li>
                  <a href="/web-development">Web Development</a>
                </li>
                <li>
                  <a href="/app-development">App Development</a>
                </li>
                <li>
                  <a href="/cloud-and-devops">Cloud and DevOps</a>
                </li>
                <li>
                  <a href="/product-design">Product Development</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
              <h3 className="widget-title">Contact Info</h3>
              <ul className="address-widget">
                <li>
                  <MdLocationOn />{" "}
                  <span
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`, "_blank")}
                    style={{ cursor: "pointer" }}
                    className="footer-link"
                  >
                    {contactData.address}
                  </span>
                </li>
                <li>
                  <MdCall />{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`https://wa.me/${contactData.whatsappNumber}`, "_blank");
                    }}
                  >
                    {contactData.phone}
                  </a>
                </li>
                <li>
                  <MdEmail />{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contactData.email}`, "_blank");
                    }}
                    className="footer-link"
                  >
                    {contactData.email}
                  </a>
                </li>
                <li>
                  <MdAccessTime /> <span>{contactData.openingHours}</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-12 col-sm-12">
              <h3 className="widget-title">Newsletter</h3>
              <p className="widget-desc">
                Subscribe to our newsletter and stay updated with the latest
                news & offers.
              </p>
              <div className="newsletter-section">
                <form onSubmit={handleNewsletterSubmit} className="email-form">
                  <div className="email-container">
                    <input
                      type="email"
                      placeholder="Enter your email to subscribe"
                      className="email-input"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="send-btn">
                      <FaPaperPlane />
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row y-middle">
            <div className="col-lg-6 text-right md-mb-10 order-last">
              <ul className="copy-right-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/faq">FAQs</a>
                </li>
                 <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="copyright">
                <p>
                  © {new Date().getFullYear()} All Rights Reserved. Developed by{" "}
                  AlphaSoft360
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          font-weight: bold;
        }
        .newsletter-section {
          margin-top: 15px;
        }
        .email-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .email-container {
          display: flex;
          align-items: center;
          background: #fff;
          border-radius: 50px;
          padding: 5px;
          width: 320px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        .email-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 10px 15px;
          font-size: 14px;
          border-radius: 50px;
          background: transparent;
          color: #333;
        }
        .email-input::placeholder {
          color: #666;
          opacity: 1;
        }
        .send-btn {
          background: linear-gradient(135deg, #005bea 0%, #00c6fb 100%);
          border: none;
          color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
        }
        .send-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 10px rgba(0, 91, 234, 0.4);
        }

        @media (max-width: 768px) {
          .email-container {
            width: 280px;
          }
          .email-input {
            font-size: 13px;
            padding: 8px 12px;
          }
          .send-btn {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
