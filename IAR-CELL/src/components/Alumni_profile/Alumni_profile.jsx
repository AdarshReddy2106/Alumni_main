import React, { useEffect } from 'react';
import './Alumni_profile.css';

const AlumniProfile = () => {
  useEffect(() => {
    import('./profileScript'); // script.js logic modularized
  }, []);

  return (
    <>
      <header className="top-header">
        <div className="header-logos">
          <img src="iitpkdlogo.jpg" alt="IIT Palakkad Logo" className="logo-effect iit-logo" />
          <img src="iarcell_logo.png" alt="IAR Cell Logo" className="logo-effect iar-logo" />
        </div>
      </header>

      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Alumni Profile</h1>
          <p className="page-subtitle">Connecting Excellence, Building Future</p>
        </div>
      </section>

      <main className="container">
        <div className="profile-card fade-in-up">
          {/* Avatar and testimonial */}
          <div className="profile-header">
            <div className="profile-avatar">
              <div className="avatar-container">
                <img src="default_image.jpeg" alt="Profile Avatar" id="profile-avatar-img" className="avatar-img" />
                <div className="status-badge">Verified</div>
              </div>
            </div>
            <div className="testimonial-block">
              <div className="testimonial-quote">
                <span className="quote-mark">"</span>
                <span id="testimonial-text">
                  My years at IIT Palakkad were transformative...
                </span>
                <span className="quote-mark">"</span>
              </div>
              <div className="testimonial-author">— Arjun Sharma, B.Tech CSE, Class of 2022</div>
            </div>
          </div>

          {/* Personal & Professional Details */}
          <div className="profile-content">
            {/* Reuse structure for details-section */}
            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="btn btn-primary" id="update-btn">
                <span className="btn-icon">✏️</span> Update Profile
              </button>
              <button className="btn btn-secondary" id="verify-btn">
                <span className="btn-icon">🔍</span> Request Verification
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal for update profile */}
      <div className="modal-overlay" id="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h3 className="modal-title">Update Profile Information</h3>
            <button className="modal-close" id="modal-close">&times;</button>
          </div>
          <div className="modal-content">
            {/* Update form structure */}
            <form className="update-form" id="update-form">
              {/* Form Fields */}
              <div className="form-actions">
                <button type="button" className="btn btn-outline" id="cancel-btn">Cancel</button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlumniProfile;
