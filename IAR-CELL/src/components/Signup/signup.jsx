import React, { useState } from 'react';
import './signup.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    campusID: '',
    name: '',
    email: '',
    contact1: '',
    contact2: '',
    whatsapp: '',
    countryCode: '',
    linkedin: '',
    department: '',
    degree: '',
    passoutYear: '',
    hostel: '',
    location: '',
    organisation: '',
    designation: '',
    awards: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{9}$/.test(formData.campusID)) {
      alert('Campus ID must be exactly 9 digits');
      return;
    }

    const required = ['campusID', 'name', 'email', 'contact1', 'whatsapp', 'countryCode', 'department', 'degree', 'passoutYear', 'hostel', 'location'];
    for (let field of required) {
      if (!formData[field]) {
        alert(`Please fill the required field: ${field}`);
        return;
      }
    }

    console.log('Submitted:', formData);
    alert('Submitted successfully (dummy response)');
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        {/* Header */}
        <div className="header">
          <h1>IAR Cell – Alumni Sign-Up</h1>
          <p>Join the IIT Palakkad Alumni Network</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form-grid">
          <input 
            name="campusID" 
            value={formData.campusID} 
            onChange={handleChange} 
            placeholder="Campus ID" 
            className="input-field" 
          />
          <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Full Name" 
            className="input-field" 
          />
          <input 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            type="email" 
            placeholder="Email" 
            className="input-field" 
          />
          <input 
            name="contact1" 
            value={formData.contact1} 
            onChange={handleChange} 
            placeholder="Contact Number 1" 
            className="input-field" 
          />
          <input 
            name="contact2" 
            value={formData.contact2} 
            onChange={handleChange} 
            placeholder="Contact Number 2 (optional)" 
            className="input-field" 
          />
          <input 
            name="whatsapp" 
            value={formData.whatsapp} 
            onChange={handleChange} 
            placeholder="WhatsApp Number" 
            className="input-field" 
          />
          <input 
            name="countryCode" 
            value={formData.countryCode} 
            onChange={handleChange} 
            placeholder="Country Code (e.g., +91)" 
            className="input-field" 
          />
          <input 
            name="linkedin" 
            value={formData.linkedin} 
            onChange={handleChange} 
            placeholder="LinkedIn Profile URL" 
            className="input-field" 
          />

          <select 
            name="department" 
            value={formData.department} 
            onChange={handleChange} 
            className="select-field"
          >
            <option value="">Select Department</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Computer Science & Engineering">Computer Science & Engineering</option>
            <option value="Data Science & Engineering">Data Science & Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
          </select>

          <select 
            name="degree" 
            value={formData.degree} 
            onChange={handleChange} 
            className="select-field"
          >
            <option value="">Select Degree</option>
            <option value="Bachelor of Technology (B.Tech)">Bachelor of Technology (B.Tech)</option>
            <option value="Master of Technology (M.Tech)">Master of Technology (M.Tech)</option>
            <option value="Master of Science (M.Sc)">Master of Science (M.Sc)</option>
            <option value="Master of Science (M.S) by Research">Master of Science (M.S) by Research</option>
            <option value="Doctor of Philosophy (PhD)">Doctor of Philosophy (PhD)</option>
          </select>

          <select 
            name="passoutYear" 
            value={formData.passoutYear} 
            onChange={handleChange} 
            className="select-field"
          >
            <option value="">Year of Passout</option>
            {[2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select 
            name="hostel" 
            value={formData.hostel} 
            onChange={handleChange} 
            className="select-field"
          >
            <option value="">Hostel</option>
            <option value="Malhar">Malhar</option>
            <option value="Saveri">Saveri</option>
            <option value="Brindavani">Brindavani</option>
            <option value="Tilang A">Tilang A</option>
            <option value="Tilang B">Tilang B</option>
          </select>

          <input 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            placeholder="Current Location" 
            className="input-field" 
          />
          <input 
            name="organisation" 
            value={formData.organisation} 
            onChange={handleChange} 
            placeholder="Organisation (optional)" 
            className="input-field" 
          />
          <input 
            name="designation" 
            value={formData.designation} 
            onChange={handleChange} 
            placeholder="Designation (optional)" 
            className="input-field" 
          />
          <input 
            name="awards" 
            value={formData.awards} 
            onChange={handleChange} 
            placeholder="Awards (optional)" 
            className="input-field" 
          />

          {/* Submit */}
          <div className="submit-section">
            <button type="submit" className="submit-button">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;