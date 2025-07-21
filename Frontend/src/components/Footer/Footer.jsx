// import React from 'react'
import React from "react";
import './Footer.css';
import iarLogo from '../../assets/iar3.jpg';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <img src={iarLogo} alt="IAR CELL" className="footer-logo" />
            <h3>IAR CELL</h3>
            <p>We here provide a lot of opportunity for every students from around the world to explore and learn in a conducive environment</p>
          </div>
          <div className="footer-section">
            <h3>USEFUL LINKS</h3>
            <ul>
              {/* <li><a href="#">facebook-f</a></li> */}
              {/* <li><a href="#">twitter</a></li> */}
              <li><a href="https://www.linkedin.com/in/iit-palakkad-alumni-relations-19142a25b/">linkedin-Alumni Relations/1</a></li>
              <li><a href="https://www.linkedin.com/in/iit-palakkad-alumni-relations-19142a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin-Alumni Relations/2 </a></li>
              <li><a href="https://www.linkedin.com/company/international-relations-iit-palakkad/">linkedin-International Relations</a></li>

              <li><a href="https://www.instagram.com/iarcell.iitpkd/">instagram</a></li>
              <li><a href="http://www.youtube.com/@IARCellIITPalakkad">youtube</a></li>


            </ul>
          </div>
          <div className="footer-section">
            <h3>CONTACT</h3>
            {/* <p>F1 Cabin, AGORA Building,NILA Campus IIT Palakkad Kerala 678623</p> */}
            
              <p className="address_data">  Dr. APJ Abdul Kalam Block,</p>
              <p  className="address_data">First Floor (Right Wing), </p>
              <p className="address_data">Sahyadri Campus,  </p>
              <p className="address_data">Indian Institute of Technology Palakkad, </p>
              <p className="address_data">Kanjikode West, Palakkad - 678623,</p>
              <p className="address_data"> Kerala.</p>

              
            <p className="address_data">ar_office@iitpkd.ac.in</p>
            <p className="address_data">Mob: +91 7595911769</p>
            <p className="address_data">Land Line : +91 4923 226 533</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright ©2023 Indian Institute of Technology Palakkad. All Rights Reserved.</p>
      </div>
      
    </footer>
    
  );
}

export default Footer;



  


