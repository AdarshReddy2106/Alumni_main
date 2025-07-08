import React, { useEffect, useState } from 'react';
import './Alumni_profile.css';

const AlumniProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/profile/1')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Error:', err));
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="profile-card fade-in-up">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-container">
            <img src={profile.profile_picture_url || '/default_image.jpeg'} alt="Avatar" className="avatar-img" />
            {profile.is_verified && <div className="status-badge">Verified</div>}
          </div>
        </div>
        <div className="testimonial-block">
          <div className="testimonial-quote">
            <span className="quote-mark">"</span>
            <span>{profile.testimonial}</span>
            <span className="quote-mark">"</span>
          </div>
          <div className="testimonial-author">— {profile.full_name}, {profile.degree_program}, Class of {profile.graduation_year}</div>
        </div>
      </div>

      <div className="profile-content">
        <section className="details-section">
          <h2 className="section-title">Personal Details</h2>
          <div className="details-grid">
            <Detail label="Full Name" value={profile.full_name} />
            <Detail label="Email" value={profile.email} />
            <Detail label="Department" value={profile.department} />
            <Detail label="Degree Program" value={profile.degree_program} />
            <Detail label="Graduation Year" value={profile.graduation_year} />
          </div>
        </section>

        <section className="details-section">
          <h2 className="section-title">Professional Details</h2>
          <div className="details-grid">
            <Detail label="Job Title" value={profile.job_title} />
            <Detail label="Company" value={profile.company} />
            <Detail label="Location" value={profile.location} />
          </div>
        </section>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div className="detail-item">
    <label className="detail-label">{label}</label>
    <span className="detail-value">{value}</span>
  </div>
);

export default AlumniProfile;
