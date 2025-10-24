import React from "react";
import { MdLocationOn, MdCall, MdEmail, MdAccessTime } from "react-icons/md";
import Logo from "../assets/img/AlphaSoft_logo1.png"; // Adjust the path as needed

const Footer = () => {
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
                    onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Main%20Pakavenue%20Road%2C%20Sahiwal%2C%2057000%2C%20Pakistan", "_blank")}
                    style={{ cursor: "pointer" }}
                    className="footer-link"
                  >
                    Main Pakavenue Rd, Sahiwal, 57000, Pakistan
                  </span>
                </li>
                <li>
                  <MdCall />{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://wa.me/923704857471", "_blank");
                    }}
                  >
                    +92 3704857471
                  </a>
                </li>
                <li>
                  <MdEmail />{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://mail.google.com/mail/?view=cm&fs=1&to=alphasoft360@gmail.com", "_blank");
                    }}
                    className="footer-link"
                  >
                    alphasoft360@gmail.com
                  </a>
                </li>
                <li>
                  <MdAccessTime /> <span>Opening Hours: 10:00 - 18:00</span>
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
      `}</style>
    </footer>
  );
};

export default Footer;
