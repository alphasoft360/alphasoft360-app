import React, { useState, useRef, useEffect } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/AlphaSoft_logo1.png";

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
      y: newRotationY * 0.5 
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
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
      >
        <Card className="shadow-lg border-0 idcard-container">
          <Card.Body className="p-4">

            <div className="text-center mb-3">
              <div className="logo-container">
                <Image src={logo} width={60} />
                <h6 className="mt-2 fw-bold text-primary">ALPHASOFT360</h6>
                <p className="text-muted small">Innovative Digital Solutions</p>
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
              <Row className="small mb-2">
                <Col xs={5} className="fw-semibold">ID No:</Col>
                <Col>{member?.id || "00000000"}</Col>
              </Row>
              <Row className="small mb-2">
                <Col xs={5} className="fw-semibold">Email:</Col>
                <Col className="text-truncate">{member?.contact?.email || "email@example.com"}</Col>
              </Row>
              <Row className="small mb-2">
                <Col xs={5} className="fw-semibold">Phone:</Col>
                <Col>{member?.contact?.phone || "000-000-00"}</Col>
              </Row>
            </div>
          </Card.Body>

          <Card.Footer className="text-center text-primary small team-card-footer">
            <a href="https://www.alphasoft360.org/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
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

      <style jsx>{`
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
          padding: 12px;
          margin: 8px 0;
          border: 1px solid rgba(0, 123, 255, 0.1);
        }

        .qr-placeholder {
          background: linear-gradient(45deg, #f8f9fa, #e9ecef);
          border-radius: 8px;
          padding: 8px;
          display: inline-block;
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .footer-section {
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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .idcard-3-reverse {
          animation: float 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default EventIdcard;
