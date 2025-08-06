import React, { useEffect, useState } from 'react';
import './Alumni_profile.css';
import UpdateProfileModal from "./UpdateProfileModal";
// import VerifyEmailModal from "./VerifyEmailModal";
import pic from './profile_pic.png'; // Default profile picture
import iitpkdlogo from './iitpkdlogo.jpg';
import iarcell_logo from './iarcell_logo.png';
import  useStore  from '../../Store';


const AlumniProfile = () => {
  const [profile, setProfile] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [verified,setVerified]=useState(false);
  const email = useStore((state)=>state.userEmail);

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000); 
  };

  // //toaster for verify
  // const handleVerify = () =>{
  //   setVerified(true);
  //   setTimeout(() => setVerified(false),3000);
  // }

 useEffect(() => {
  if (email) {
    fetchProfile();
  }
}, [email]);

const fetchProfile = () => {
  fetch(`https://alumni-website-v7pq.onrender.com/api/profile/${encodeURIComponent(email)}`)
    .then(async (res) => {
      if (!res.ok) {
        const text = await res.text();
        console.error("Error Response:", text);
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      return res.json();
    })
    .then(data => {
      console.log("Fetched profile:", data);
      setProfile(data);
    })
    .catch(err => console.error("Fetch error:", err));
};


  if (!profile) return <p>Loading profile...</p>;

  return (
    <>

      {!showUpdateModal && showSuccess && (
  <>
    <style>
      {`
        @keyframes slideInOut {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          10% {
            transform: translateX(0);
            opacity: 1;
          }
          90% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}
    </style>
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: '#fff8db',
      color: '#333',
      border: '2px solid #ffec9e',
      borderRadius: '8px',
      padding: '12px 20px',
      fontWeight: '600',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      animation: 'slideInOut 4s ease-in-out forwards',
    }}>
      <span style={{
        display: 'inline-block',
        width: '18px',
        height: '18px',
        backgroundColor: '#4CAF50',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '14px',
        textAlign: 'center',
        lineHeight: '18px'
      }}>✓</span>
      Profile updated successfully!
    </div>
  </>
)}

  {!showVerifyModal && verified && (
  <>
    <style>
      {`
        @keyframes slideInOut {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          10% {
            transform: translateX(0);
            opacity: 1;
          }
          90% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}
    </style>
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: '#fff8db',
      color: '#333',
      border: '2px solid #ffec9e',
      borderRadius: '8px',
      padding: '12px 20px',
      fontWeight: '600',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      animation: 'slideInOut 4s ease-in-out forwards',
    }}>
      <span style={{
        display: 'inline-block',
        width: '18px',
        height: '18px',
        backgroundColor: '#4CAF50',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '14px',
        textAlign: 'center',
        lineHeight: '18px'
      }}>✓</span>
      Email verified successfully!
    </div>
  </>
)}

      

      {showUpdateModal && (
        <UpdateProfileModal
          isOpen={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          onSuccess={() => {
            handleSuccess();
            fetchProfile();
          }
          }
        />
      )}

      {/* {showVerifyModal && (
        <VerifyEmailModal
          isOpen={showVerifyModal}
          onClose={() => setShowVerifyModal(false)}
          onVerified={handleVerify}
        />
      )} */}


      
      
      <div className={`main-content-wrapper ${(showUpdateModal || showUpdateModal) ? "blurred-bg" : ""}`}>

        {/* // Top Header with Logos */}
        <div>
          <header className="top-header">
            <div className="header-logos">
              <img src={iitpkdlogo} alt="IIT Palakkad Logo" className="logo-effect iit-logo" />
              <img src={iarcell_logo} alt="IAR Cell Logo" className="logo-effect iar-logo" />
            </div>
          </header>

          {/* Page Header Section */}
          <section className="page-header">
            <div className="container">
              <h1 className="page-title">Alumni Profile</h1>
              <p className="page-subtitle">Connecting Excellence, Building Future</p>
            </div>
          </section>
        </div>
      
        

        <div className="profile-card fade-in-up">
          <div className="profile-header">
            <div className="profile-avatar">
              <div className="avatar-container">
                <img src={pic} alt="Avatar" className="avatar-img" />
                {profile.verified && <div className="status-badge">✓ Verified</div>}
              </div>
            </div>

            <div className="testimonial-block">
              <div className="testimonial-quote">
                <span className="quote-mark">"</span>
                <span>{profile.testimonial}</span>
                <span className="quote-mark">"</span>
              </div>
              <div className="testimonial-author">
                — {profile.Name}, {profile.Degree}, Class of {profile.YearOfPassOut}
              </div>
            </div>
          </div>

          <div className="profile-content">
            <section className="details-section">
              <h2 className="section-title">Personal Details</h2>
              <div className="details-grid">
                <Detail label="Full Name" value={profile.Name} />
                <Detail label="Email" value={profile.Email} />
                <Detail label="Contact Number1" value={profile.ContactNumber1} />
                <Detail label="Contact Number2" value={profile.ContactNumber2} />
                <Detail label="WhatsApp Number" value={profile.WhatsAppNumber} />
                <Detail label="Country Code" value={profile.CountryCode} />
                <Detail label="LinkedIn Profile" value={profile.LikedInProfile} />
                <Detail label="Department" value={profile.Deparment} />
                <Detail label="Degree Program" value={profile.Degree} />
                <Detail label="Graduation Year" value={profile.YearOfPassOut} />
                <Detail label="Hostel" value={profile.Hostel} />
                <Detail label="Awards" value={profile.Awards} />
              </div>
            </section>

            <section className="details-section">
              <h2 className="section-title">Professional Details</h2>
              <div className="details-grid">
                <Detail label="Job Title" value={profile.Designation || "Not provided"} />
                <Detail label="Company" value={profile.Organisation || "Not provided"} />
                <Detail label="Location" value={profile.Current_Location|| "Not provided"} />
              </div>
            </section>
          </div>
        </div>

        <div className="button-container">
          <button
            onClick={() => setShowUpdateModal(true)}
            className="styled-button update-button"
          >
            ✏️ Update Profile
           </button>

          {/* <button
            onClick={() => setShowVerifyModal(true)}
            className="styled-button verify-button"
          >
            🔍 Request Verification
          </button> */} 
        </div>
      </div>

      

      
    </>
  );
};

const Detail = ({ label, value }) => (
  <div className="detail-item">
    <label className="detail-label">{label}</label>
    <span className="detail-value">{value}</span>
  </div>
);

export default AlumniProfile;
