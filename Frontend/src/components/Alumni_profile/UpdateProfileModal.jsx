import React, { useEffect, useRef, useState } from "react";
import "./UpdateProfileModal.css";
import pic from './profile_pic.png';
import useStore  from "../../Store";

const UpdateProfileModal = ({ isOpen, onClose, onSuccess }) => {
  const modalRef = useRef(null);
  const [profile, setProfile] = useState(null);
  const email = useStore((state)=>state.userEmail);
  //const [showSuccess, setShowSuccess] = useState(false);


  useEffect(() => {
    if (!isOpen) return;

    console.log("Got email from localStorage:", email);

    if (!email) {
      console.error('No email found in localStorage');
      return;
    }

    fetch(`https://alumni-website-v7pq.onrender.com/api/profile/${encodeURIComponent(email)}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log("Fetched profile data:", data);
        setProfile(data);
      })
      .catch(err => console.error('Error fetching profile:', err));
  }, [isOpen]);

    useEffect(() => {
    if (isOpen && profile && modalRef.current) {
        modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        modalRef.current.focus();
    }
    }, [isOpen, profile]);


if(!isOpen)return null; 

 
  // Show loading screen until profile is loaded
  if (!profile) {
    return (
      <div className="update-modal-overlay" onClick={onClose}>
        <div className="update-modal" onClick={(e) => e.stopPropagation()}>
          <p style={{ textAlign: "center", padding: "20px" }}>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    

    <div className="update-modal-overlay" onClick={onClose}>
      <div
        className="update-modal"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        <div className="update-modal-header">
          <h2>Update Profile Information</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <form className="update-form"

            onSubmit={(e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const updatedData = {
    Name: formData.get("name"),
    Email: formData.get("email"),
    Deparment: formData.get("department"),
    Degree: formData.get("degree"),
    YearOfPassOut: formData.get("year"),
    ContactNumber1: formData.get("contact1"),
    ContactNumber2: formData.get("contact2"),
    WhatsAppNumber: formData.get("whatsapp"),
    CountryCode: formData.get("country"),
    LikedInProfile: formData.get("linkedin"),
    Hostel: formData.get("hostel"),
    Awards: formData.get("awards"),
    Designation: formData.get("designation"),
    Organisation: formData.get("organisation"),
    Current_Location: formData.get("location"),
    testimonial: formData.get("testimonial"),
    verified: false,  // optional: reset to unverified
  };

  fetch(`https://alumni-website-v7pq.onrender.com/api/profile/${encodeURIComponent(profile.Email)}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to update profile");
      return res.json();
    })
    .then((data) => {
      console.log("Profile updated:", data);
      onSuccess(); // toaster
      onClose();   // close modal
    })
    .catch((err) => {
      console.error("Error updating profile:", err);
      alert("Failed to update profile. Try again.");
    });
}}



            >

          <h3 className="section-heading">Personal Information</h3>
          <div className="section-divider" />

          {/* <div className="photo-upload">
            <label>Profile Photo</label>
            <input type="file" name="photo" accept="image/*" className="file-input" />
          </div>

          <div className="profile-photo-preview">
            <img src={pic} alt="Default profile" />
          </div> */}

          <div className="form-grid">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" defaultValue={profile.Name || ""} required />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="arjun.sharma@alumni.iitpkd.ac.in"
                defaultValue={profile.Email || ""}
                required
              />
            </div>

            <div className="form-group">
              <label>Department *</label>
              <select defaultValue={profile.Deparment || "" } required>
                {/* <option value="">Select Department</option> */}
                <option>Chemistry</option>
                <option>Civil Engineering</option>
                <option>Computer Science & Engineering</option>
                <option>Computing and Mathematics</option>
                <option>Data Science</option>
                <option>Electrical Engineering</option>
                <option>Geotechnical Engineering</option>
                <option>Manufacturing and Materials Engineering</option>
                <option>Mathematics</option>
                <option>Mechanical Engineering</option>
                <option>Physics</option>
                <option>Power Electronics and Power Systems</option>
                <option>System-on-Chip Design</option>

              </select>
            </div>

            <div className="form-group">
              <label>Degree Program *</label>
              <select defaultValue={profile.Degree || ""} required>
                {/* <option value="">Select Degree</option> */}
                <option>Bachelor of Technology Honors(B.Tech Hons.)</option>
                <option>Bachelor of Technology (B.Tech)</option>
                <option>Master of Technology (M.Tech)</option>
                <option>Master of Science (M.S.)</option>
                <option>Master of Science (M.Sc)</option>
                <option>Doctor of Philosophy (Ph.D.)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Graduation Year *</label>
              <input
                type="text"
                defaultValue={profile.YearOfPassOut || ""}
                required
              />
            </div>

            <div className="form-group">
              <label>Contact Number 1 *</label>
              <input
                type="text"
                defaultValue={profile.ContactNumber1 || ""}
                required
              />
            </div>

            <div className="form-group">
              <label>Contact Number 2</label>
              <input
                type="text"
                defaultValue={profile.ContactNumber2 || ""}
              />
            </div>

            <div className="form-group">
              <label>Whatsapp Number *</label>
              <input
                type="text"
                defaultValue={profile.WhatsAppNumber || ""}
                required
              />
            </div>

            <div className="form-group">
              <label>Country Code *</label>
              <input
                type="text"
                defaultValue={profile.CountryCode || ""}
                required
              />
            </div>

            <div className="form-group">
              <label>LinkedIn Profile *</label>
              <input
                type="text"
                placeholder="2022"
                defaultValue={profile.LikedInProfile || ""}
                required
              />
            </div>

            

            <div className="form-group">
              <label>Hostel *</label>
              <input
                type="text"
                defaultValue={profile.Hostel || ""}
                required
              />
            </div>

            <div className="form-group">
              <label>Awards</label>
              <input
                type="text"
                defaultValue={profile.Awards || ""}
              />
            </div>

        </div>


            {/* <form className="update-form"> */}
            <h3 className="section-heading">Professional Information</h3>
            <div className="section-divider" />

            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                defaultValue={profile.Designation || ""}
              />
            </div>

            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                defaultValue={profile.Organisation || ""}
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                defaultValue={profile.Current_Location || ""}
              />
            </div>

            {/* </form> */}

            <h3 className="section-heading">Testimonial</h3>
            <div className="section-divider" />

            <div className="form-group">
                <label htmlFor="testimonial">Your Testimonial *<span className="text-red-500">*</span></label>
                <textarea
                    id="testimonial"
                    name="testimonial"
                    rows={5}
                    required
                    defaultValue={profile.testimonial}
                    className="form-control"
                />
            </div>


        

          <div className="modal-actions">
            <button type="submit" className="submit-btn">Update</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
    // </>
  );
};

export default UpdateProfileModal;
