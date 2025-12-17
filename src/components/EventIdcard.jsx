import React, { useState, useRef, useEffect } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import logo from "../assets/img/AlphaSoft_logo.png";
import { createBusinessWhatsAppLink } from "../utils/whatsappUtils";
import { QRCodeSVG } from "qrcode.react";

const EventIdcard = ({ member }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const autoReturnTimeout = useRef(null);

  const handleMouseUp = () => {
    setIsDragging(false);
    // Auto return to natural position after 1 second
    autoReturnTimeout.current = setTimeout(() => {
      setRotation({ x: 0, y: 0 });
    }, 1000);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    // Auto return to natural position after 1 second
    autoReturnTimeout.current = setTimeout(() => {
      setRotation({ x: 0, y: 0 });
    }, 1000);
  };

  // Clear timeout if user starts dragging again
  const handleMouseDown = (e) => {
    if (autoReturnTimeout.current) {
      clearTimeout(autoReturnTimeout.current);
    }
    setIsDragging(true);
    setStartPos({ x: e.clientX - rotation.y, y: e.clientY - rotation.x });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newRotationY = e.clientX - startPos.x;
    const newRotationX = e.clientY - startPos.y;
    setRotation({
      x: newRotationX * 0.5,
      y: newRotationY * 0.5,
    });
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (autoReturnTimeout.current) {
        clearTimeout(autoReturnTimeout.current);
      }
    };
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center py-5"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="idcard-3d-container"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isDragging ? "none" : "transform 0.3s ease-out",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Front Side */}
        <Card 
          className="border-0 idcard-container idcard-front"
          style={{ 
            userSelect: 'none', 
            cursor: 'default',
            position: 'absolute',
            backfaceVisibility: 'hidden'
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            handleMouseDown(e);
          }}
          onSelectStart={(e) => {
            e.preventDefault();
          }}
        >
          <Card.Body className="p-4">
            <div className="text-center mb-3">
              <div className="logo-container">
                <div className="team-card-logo">
                  <Image src={logo} width={60} />
                </div>
                <div>
                  <h6 className="mt-2 fw-bold text-primary">ALPHASOFT360</h6>
                  <p className="text-muted small">
                    Innovative Digital Solutions
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-3">
              <div className="profile-container">
                <Image
                  src={member?.image || "/profile.png"}
                  roundedCircle
                  width={90}
                  className="border border-3 border-primary profile-image"
                />
                <h5 className="mt-2 mb-0 fw-bold">{member?.name || "NAME"}</h5>
                <p className="text-primary small">{member?.role || "ROLE"}</p>
              </div>
            </div>

            <div className="details-section">
             <Row className="align-items-center mb-2">
                <Col xs={4} className="fw-semibold">
                  Name:
                </Col>
                <Col>{member?.name || "NAME"}</Col>
              </Row>
              <Row className="align-items-center mb-2">
                <Col xs={4} className="fw-semibold">
                  Email:
                </Col>
                <Col className="text-break">
                  {member?.contact?.email ? (
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="text-primary text-decoration-none"
                      style={{ userSelect: 'text', cursor: 'pointer' }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {member.contact.email}
                    </a>
                  ) : (
                    "email@example.com"
                  )}
                </Col>
              </Row>

              <Row className="align-items-center mb-2">
                <Col xs={4} className="fw-semibold">
                  Phone:
                </Col>
                <Col>
                  {member?.contact?.phone ? (
                    <a
                      href={createBusinessWhatsAppLink(member.contact.phone)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success text-decoration-none"
                      style={{ userSelect: 'text', cursor: 'pointer' }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {member.contact.phone}
                    </a>
                  ) : (
                    "000-000-00"
                  )}
                </Col>
              </Row>
            </div>
          </Card.Body>

          <Card.Footer className="text-center text-primary small team-card-footer">
            <a
              href="https://www.alphasoft360.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              WWW.ALPHASOFT360.ORG
            </a>
          </Card.Footer>
        </Card>

        {/* Back Side - Full White */}
        <Card 
          className="border-0 idcard-container idcard-back"
          style={{ 
            userSelect: 'none', 
            cursor: 'default',
            position: 'absolute',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#ffffff'
          }}
        >
          <Card.Body className="p-4">
            <div className="text-center h-100 d-flex flex-column justify-content-center">
              <div className="logo-container mb-4">
                <div className="team-card-logo">
                  <Image src={logo} width={80} />
                </div>
                <div>
                  <h4 className="mt-3 fw-bold text-primary">ALPHASOFT360</h4>
                  <p className="text-muted">
                    Innovative Digital Solutions
                  </p>
                </div>
              </div>
              
              {/* QR Code Section */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Scan for Verification</h6>
                <div className="d-flex justify-content-center mb-3">
                  <div className="qr-code-container p-2 bg-white border rounded">
                    <QRCodeSVG 
                      value={`https://www.alphasoft360.org/verify/${member?.name?.replace(/\s/g, '').toLowerCase() || 'demo'}-${member?.id || '001'}`}
                      size={120}
                      level="H"
                      includeMargin={true}
                    />
                  </div>
                </div>
                <p className="text-muted small mb-0">
                  Scan to verify authenticity
                </p>
              </div>
              
              <div className="mt-auto">
                <h5 className="fw-bold mb-3">Professional ID Card</h5>
                <p className="text-muted small mb-4">
                  This card verifies the identity and affiliation of the cardholder with AlphaSoft360.
                </p>
                <div className="border-top pt-3">
                  <p className="small text-muted mb-1">Valid Until: 12/2025</p>
                  <p className="small text-muted mb-0">Card ID: AS360-{member?.name?.replace(/\s/g, '').toUpperCase() || 'DEMO'}-001</p>
                </div>
              </div>
            </div>
          </Card.Body>

          <Card.Footer className="text-center text-primary small team-card-footer">
            <a
              href="https://www.alphasoft360.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              WWW.ALPHASOFT360.ORG
            </a>
          </Card.Footer>
        </Card>

        {/* Band/Clip effect */}
        <div className="idcard-band">
          <div className="band-metal"></div>
          <div className="band-clip"></div>
        </div>
      </div>

      <style jsx="true">{`
        .idcard-3d-container {
          position: relative;
          transform-style: preserve-3d;
          width: 320px;
          height: 480px;
        }

        .idcard-container {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border-radius: 16px;
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          transform-style: preserve-3d;
          transition: all 0.3s ease;
        }

        .idcard-container:hover {
          box-shadow:
            0 25px 50px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        
        .team-card-logo img {
          width: 100px;
        }
        .logo-container h6 {
          background: linear-gradient(45deg, #007bff, #0056b3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .profile-image {
          box-shadow:
            0 8px 16px rgba(0, 123, 255, 0.3),
            0 0 0 4px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          width:  130px;
        }

        .profile-image:hover {
          transform: scale(1.05);
          box-shadow:
            0 12px 24px rgba(0, 123, 255, 0.4),
            0 0 0 4px rgba(255, 255, 255, 0.2);
        }

        .details-section {
          background: rgba(248, 249, 250, 0.5);
          border-radius: 8px;
          padding: 10px;
          border: 1px solid rgba(0, 123, 255, 0.1);
        }
        .team-card-footer, .team-card-logo {
          background: linear-gradient(90deg, #007bff, #0056b3);
          color: white !important;
          border: none;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .idcard-band {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .band-metal {
          width: 40px;
          height: 20px;
          background: linear-gradient(180deg, #c0c0c0, #808080, #c0c0c0);
          border-radius: 4px 4px 0 0;
          box-shadow:
            0 -2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .band-clip {
          width: 20px;
          height: 15px;
          background: linear-gradient(180deg, #d4d4d4, #a0a0a0);
          border-radius: 2px;
          margin: -5px auto 0;
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        .idcard-3d-container:hover .idcard-container {
          transform: translateZ(20px);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .idcard-3-reverse {
          animation: float 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default EventIdcard;
