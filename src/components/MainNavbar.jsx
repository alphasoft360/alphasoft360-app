
import { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/img/AlphaSoft_logo.png";

const MainNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showContactOffcanvas, setShowContactOffcanvas] = useState(false);

  const handleCallClick = () => {
    window.open("https://wa.me/923704857471", "_blank");
  };

  return (
    <>
      {/* ===== Top Info Bar ===== */}
      <div className="bg-light py-2 border-bottom">
        <Container>
          <Row className="align-items-center text-center text-lg-start gy-2">
            <Col lg={4} md={12} className="d-none d-lg-block">
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start navbar-social">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
               
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </Col>

            <Col
              lg={8}
              md={12}
              className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-3"
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.google.com/maps/search/?api=1&query=Main%20Pakavenue%20Road%2C%20Sahiwal%2C%2057000%2C%20Pakistan", "_blank");
                }}
                className="text-decoration-none text-primary small d-flex align-items-center me-2 top-link d-none d-lg-flex"
                style={{ cursor: "pointer" }}
              >
                <FaMapMarkerAlt size={20} className=" me-2" />
                Main Pakavenue Road, Sahiwal, 57000, Pakistan
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=alphasoft360@gmail.com", "_blank");
                }}
                className="text-decoration-none text-primary small d-flex align-items-center top-link"
              >
                <FaEnvelope size={20} className=" me-2" />
               alphasoft360@gmail.com
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://wa.me/923704857471", "_blank");
                }}
                className="text-decoration-none text-primary small d-flex align-items-center phone-link"
              >
                <FaPhone className="text-primary me-2" />
                +92 3704857471
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ===== Navbar ===== */}
      <Navbar bg="primary" variant="dark" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" width={120} />
          </Navbar.Brand>

          {/* Custom Toggle Button */}
          <Button
            variant="outline-light"
            className="d-lg-none border-0"
            onClick={() => setShowOffcanvas(true)}
          >
            ☰
          </Button>

          {/* Desktop Menu */}
          <Nav className="ms-auto d-none d-lg-flex align-items-center">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-white">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/team" className="text-white">
              Team
            </Nav.Link>
            <Nav.Link as={Link} to="/FAQ" className="text-white">
              FAQs
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">
              Contact
            </Nav.Link>
            <Button
              variant="outline-light"
              className="ms-3 call-button text-light phone-button"
              onClick={handleCallClick}
            >
              <FaPhone size={30} />
            </Button>
          </Nav>


        </Container>{""}  </Navbar>

      {/* ===== Offcanvas Menu for Mobile ===== */}
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        className="offcanvas-navbar"
      >
        <Offcanvas.Header className="position-relative">
          <Offcanvas.Title>
            <img src={logo} alt="logo" width={100} />
          </Offcanvas.Title>
          <Button
            variant="outline-light"
            className="border-0 position-absolute top-0 end-0 mt-2 me-2"
            onClick={() => setShowOffcanvas(false)}
          >
            <FaTimes size={20} />
          </Button>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column text-center">
            <Nav.Link as={Link} to="/" onClick={() => setShowOffcanvas(false)}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => setShowOffcanvas(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              onClick={() => setShowOffcanvas(false)}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/FAQ"
              onClick={() => setShowOffcanvas(false)}
            >
              FAQs
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/team"
              onClick={() => setShowOffcanvas(false)}
            >
              Team
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => setShowOffcanvas(false)}
            >
              Contact
            </Nav.Link>

            <Button
              variant="outline-light"
              className="mt-4 phone-button-mobile"
              onClick={handleCallClick}
            >
              <FaPhone className="me-2" /> Call Us
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <style>{`
        .top-link:hover {
          font-weight: bold;
        }
      `}</style>
      <Offcanvas show={showContactOffcanvas} onHide={() => setShowContactOffcanvas(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <p><FaMapMarkerAlt className="me-2" /> Pak Avenue Sahiwal Punjab Pakistan</p>
            <p><FaEnvelope className="me-2" /> info@yourmail.com</p>
            <p><i className="bi bi-telephone me-2"></i> +0123 456 7890</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>


    </>
  );
};

export default MainNavbar;
