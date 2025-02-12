import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const AlumniDirectory = () => {
  const [filters, setFilters] = useState({
    name: "",
    campusID: "",
    yearOfPassOut: "",
    department: "",
    degree: "",
  });

  const [alumniData, setAlumniData] = useState([]);
  const [years, setYears] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [degrees, setDegrees] = useState([]);


  const BASE_URL = "http://localhost:3000";

useEffect(() => {
  fetch(`${BASE_URL}/passout-years`)
    .then((res) => res.json())
    .then((data) => setYears(data))
    .catch((err) => console.error("Error fetching years:", err));

  fetch(`${BASE_URL}/departments`)
    .then((res) => res.json())
    .then((data) => setDepartments(data))
    .catch((err) => console.error("Error fetching departments:", err));

  fetch(`${BASE_URL}/degrees`)
    .then((res) => res.json())
    .then((data) => setDegrees(data))
    .catch((err) => console.error("Error fetching degrees:", err));
}, []);


const handleSearch = () => {
  fetch(`${BASE_URL}/alumni?${new URLSearchParams(filters).toString()}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched alumni data:", data); // 🔹 Debugging
      setAlumniData(Array.isArray(data) ? data : []);
    })
    .catch((err) => {
      console.error("Error fetching alumni:", err);
      setAlumniData([]);
    });
};


  return (
    <div>
      <Navbar />
      <div className="filter-container">
        
        <select
          value={filters.yearOfPassOut}
          onChange={(e) => setFilters({ ...filters, yearOfPassOut: e.target.value })}
        >
          <option value="">Select Year</option>
          {years.map((item) => (
          <option key={item.YearOfPassOut} value={item.YearOfPassOut}>
            {item.YearOfPassOut}
              </option>
            ))}
        </select>
        <select
          value={filters.department}
          onChange={(e) => setFilters({ ...filters, department: e.target.value })}
        >
          <option value="">Select Department</option>
          {departments.map((item) => (
              <option key={item.Deparment} value={item.Deparment}>
                {item.Deparment}
              </option>
            ))}
        </select>
        <select
          value={filters.degree}
          onChange={(e) => setFilters({ ...filters, degree: e.target.value })}
        >
          <option value="">Select Degree</option>
          {degrees.map((item) => (
            <option key={item.Degree} value={item.Degree}>
              {item.Degree}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Name"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Campus ID"
          value={filters.campusID}
          onChange={(e) => setFilters({ ...filters, campusID: e.target.value })}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="alumni-list">
        {alumniData.map((alumni, index) => (
          <div key={index} className="alumni-card">
            <h3>{alumni.Name}</h3>
            {/* <p>Campus ID: {alumni.CampusID}</p> */}
            <p>Email: {alumni.Email}</p>
            {/* <p>Department: {alumni.Deparment}</p> */}
            {/* <p>Degree: {alumni.Degree}</p> */}
            {/* <p>Year of Passout: {alumni.YearOfPassOut}</p> */}
            <p>Linkdin: {alumni.LikedlnProfile}</p>
            <p>Current_Location: {alumni.Current_Location}</p>

            <p>Organisation: {alumni.Organisation}</p>
            <p>Designation: {alumni.Designation}</p>
            <p>Awards: {alumni.Awards}</p>

          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AlumniDirectory;