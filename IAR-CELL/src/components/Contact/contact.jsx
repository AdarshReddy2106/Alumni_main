// import React from 'react';
import './contact.css'
// import k from "../../../public/assests/club/sru"
import Srujana from "../../../public/assests/club/srujana jasmin.jpeg"
import likitha from "../../../public/assests/club/likitha.jpeg"
import Aakansha from "../../../public/assests/club/aakansha.jpeg"
import Harika from "../../../public/assests/club/harika.jpeg"
import Nishant from "../../../public/assests/club/vibhav.jpeg"
import { Link } from 'react-router-dom';


const ContactPage = () => {
  return (
    <div>
    <div className="contact-page">
      <h1>APPLICATIONS & GENERAL QUERIES</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-image">
            <img src="https://ir.iitpkd.ac.in/sites/default/files/inline-images/Dinesh%20Setti%20%281%29-resized.jpg" alt="Dr. Dinesh Setti" />
          </div>
          <div className="card-content">
            <h3>Dr. Dinesh Setti</h3>
            <p className="title">Assistant Professor</p>
            <p>Mechanical Engineering</p>
            <p>Faculty-in-charge, International and Alumni Relations</p>
            <p className="email">
              <i className="fas fa-envelope"></i> fc_iar@iitkpd.ac.in
            </p>
          </div>
        </div>
        <div className="contact-card">
          <div className="card-image">
            <img src=" https://ir.iitpkd.ac.in/sites/default/files/inline-images/kavitha-photo-resized_0.jpg" alt="Ms. Kavitha G R" />
          </div>
          <div className="card-content">
            <h3>Ms. Kavitha G R</h3>
            <p className="title">Manager, International Relations</p>
            <p className="email">
              <i className="fas fa-envelope"></i> iar@iitkpd.ac.in
            </p>
            <p className="phone">
              <i className="fas fa-phone"></i> +91 9444536574
            </p>
          </div>
          </div>
          
        <div className="contact-card">
          <div className="card-image">
            <img src=" https://ir.iitpkd.ac.in/sites/default/files/inline-images/nibe-resized.jpg" alt="Ms. Nibedita Dey" />
          </div>
          <div className="card-content">
            <h3>Ms. Nibedita Dey</h3>
            <p className="title">Executive, International Relations</p>
            <p>D3 Block, Sahyadri Campus</p>
            <p className="phone">
              <i className="fas fa-phone"></i> +91 4923226533
            </p>
            <p className="mobile">
              <i className="fas fa-mobile-alt"></i> +91 7595911769
            </p>
            <p className="email">
              <i className="fas fa-envelope"></i> ar_office@iitkpd.ac.in
            </p>
          </div>
          </div>
          

      </div>
      </div>
      <div className="contact-page">
      <h1>Student head</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-image">
            <img src={Srujana} alt="" />
          </div>
          <div className="card-content">
            <h3>Srujana Jasmine</h3>
            <p className="title">Student head</p>
           
            <p className="email">
              <i className="fas fa-envelope"></i> alumnicell@iitkpd.ac.in
              </p>
              <p className='title'><a href="https://www.linkedin.com/in/srujana-jasmine-komarabathina-4234a423a/" className='title' target='_blank'>linkedin</a></p>
          </div>
        </div>
    

          

      </div>
      </div>
      <div className="contact-page">
      <h1>Core Team</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-image">
            <img src={likitha} alt="Dr. Dinesh Setti" />
          </div>
          <div className="card-content">
            <h3>Likitha</h3>
            <p className="title">International Relations Lead</p>
            
            <p className="email">
              <i className="fas fa-envelope"></i> 112201002@smail.iitpkd.ac.in
              </p>
              <p className='title'><a href="https://www.linkedin.com/in/kamireddy-likhitha-99152b311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='title' target='_blank'>linkedin</a></p>
              
          </div>
          </div>
          <div className="contact-card">
          <div className="card-image">
            <img src={Aakansha} alt="Dr. Dinesh Setti" />
          </div>
          <div className="card-content">
            <h3>Aakansha</h3>
            <p className="title">Alumni Relations Lead</p>
         
            <p className="email">
              <i className="fas fa-envelope"></i> 122101006@smail.iitpkd.ac.in
              </p>
              <p className='title'><a href="https://www.linkedin.com/in/aakanksha-buraga-ab593a244/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='title' target='_blank'>linkedin</a></p>
              
          </div>
        </div> <div className="contact-card">
          <div className="card-image">
            <img src={Harika} alt="Dr. Dinesh Setti" />
          </div>
          <div className="card-content">
            <h3>   Satya Harika</h3>
            <p className="title">Technical Lead</p>
            
            <p className="email">
              <i className="fas fa-envelope"></i> 142201003@smail.iitpkd.ac.in
              </p>
              <p className='title'><a href="https://www.linkedin.com/in/ganedi-satya-harika-779668258/" className='title' target='_blank'>linkedin</a></p>
              
          </div>
        </div> <div className="contact-card">
          <div className="card-image">
            <img src={Nishant} alt="Dr. Dinesh Setti" />
          </div>
          <div className="card-content">
            <h3>Vaibhav Mittapally</h3>
            <p className="title">Management Lead</p>
          
            <p className="email">
              <i className="fas fa-envelope"></i> 102201011@smail.iitpkd.ac.in
              </p>
              <p className='title'><a href="https://www.linkedin.com/in/vaibhav-m-252779298" className='title' target='_blank'>linkedin</a></p>
              
          </div>
        </div>
        </div>
        
        
        
      </div>
      <div className='club'>
          
          
          <div className="members">
              <div className="techmembers">
                  <Link to="/TechClubMembers" >
                      <p className="tech">Meet The Technical Team</p>
                  </Link>
                  
              </div>
              <div className="techmembers">
                  <Link to="/ManagementClubMembers" >
                      <p className="tech">Meet The Management Team</p>
                  </Link>
                  
          </div>
          <div className="techmembers">
                  <Link to="/ManagementClubMembers" >
                      <p className="tech">Meet The IR Team</p>
                  </Link>
                  
              </div><div className="techmembers">
                  <Link to="/ManagementClubMembers" >
                      <p className="tech">Meet The AR Team</p>
                  </Link>
                  
              </div>
          </div>
      </div>
      
      </div>
  );
};

export default ContactPage;