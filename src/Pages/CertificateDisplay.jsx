import React from 'react';
import { useParams } from 'react-router-dom';
import teamMembers from '../Team/teamData.js';
import './CertificateDisplay.css';
import OfficalSeal from '../assets/img/Offical-seal.png';

const CertificateDisplay = () => {
  const { id } = useParams();
  
  // Find team member by ID from teamData
  const member = teamMembers.find(member => member.id === id);
  
  // If no member found, show error message
  if (!member) {
    return (
      <div className="certificate-display">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="certificate-card">
                <div className="certificate-body text-center">
                  <h2 className="text-danger mb-4">Certificate Not Found</h2>
                  <p className="text-muted">The requested certificate could not be found or the link may be invalid.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Generate certificate data based on team member
  const certificateData = {
    fullName: member.name,
    certificationTitle: member.role,
    issuingOrganization: "AlphaSoft360",
    certificateId: `AS360-CERT-${new Date().getFullYear()}-${member.id.toUpperCase().replace('-', '')}`,
    issueDate: "December 15, 2024",
    expiryDate: "December 15, 2026",
    status: "Certified",
    organizationLogo: "/assets/AlphaSoft_logo-COnJdYXH.png"
  };

  return (
    <div className="certificate-display">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="certificate-card">
              {/* Header with Logo */}
              <div className="certificate-header text-center mb-4">
                <div className="logo-container mb-3">
                  <img 
                    src={certificateData.organizationLogo} 
                    alt="AlphaSoft360 Logo" 
                    className="organization-logo"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='%23061b6b'/%3E%3Ctext x='100' y='35' font-family='Arial' font-size='16' font-weight='bold' fill='white' text-anchor='middle'%3EAlphaSoft360%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <h1 className="certificate-title">Certificate of Achievement</h1>
                <div className="status-badge">
                  <span className="status-label">{certificateData.status}</span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="certificate-body">
                <div className=" Sarkar-content text-center mb-4">
                  <p className="certificate-text">
                    This is to certify that
                  </p>
                  <h2 className="recipient-name">{certificateData.fullName}</h2>
                  <p className="certificate-text">
                    has successfully completed the certification program
                  </p>
                  <h3 className="certification-title">{certificateData.certificationTitle}</h3>
                </div>

                {/* Certificate Details */}
                <div className="certificate-details">
                  <div className="row details-grid">
                    <div className="col-md-6 mb-3">
                      <div className="detail-item">
                        <label className="detail-label">Issuing Organization</label>
                        <p className="detail-value">{certificateData.issuingOrganization}</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="detail-item">
                        <label className="detail-label">Certificate ID</label>
                        <p className="detail-value">{certificateData.certificateId}</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="detail-item">
                        <label className="detail-label">Date of Issue</label>
                        <p className="detail-value">{certificateData.issueDate}</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="detail-item">
                        <label className="detail-label">Valid Until</label>
                        <p className="detail-value">{certificateData.expiryDate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Official Seal */}
                <div className="official-seal text-center mt-4">
                  <div className="seal-container">
                    <img 
                      src={OfficalSeal} 
                      alt="Official Seal" 
                      className="official-seal-image"
                      onError={(e) => {
                        // Fallback to text seal if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="seal-circle" style={{ display: 'none' }}>
                      <div className="seal-inner">
                        <span className="seal-text">OFFICIAL</span>
                        <span className="seal-subtext">SEAL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer with Disclaimer */}
              <div className="certificate-footer">
                <div className="disclaimer">
                  <h6 className="disclaimer-title">Disclaimer</h6>
                  <p className="disclaimer-text">
                    This certificate information is displayed as provided by AlphaSoft360 and does not involve external verification. 
                    For authentication purposes, please contact the issuing organization directly using the certificate ID.
                  </p>
                </div>
                <div className="footer-info text-center mt-3">
                  <p className="footer-text">
                    © 2024 AlphaSoft360 | Professional Certification Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay;
