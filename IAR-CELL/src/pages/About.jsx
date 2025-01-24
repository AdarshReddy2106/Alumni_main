// import React from 'react';

import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
// import Events from "./Events"
import "./About.css"
import Aboutt from "../components/Main/Aboutt"
import { useState } from "react"
import { Link } from 'react-router-dom';
// import Cultural from "../assets/Events.png"
// import image1 from "../assets/image1.jpg"
// import image2 from "../assets/image2.jpeg"
// import image3 from "../assets/image3.jpeg"
// import image4 from "../assets/image4.jpeg"
// import oip from "../assets/OIP.jpeg"
import Contacts from "../components/Contact/contact"




const About = () => {
  // const [EventNo,setEventNo]=useState(0)
  return (
      <div className="About">
      <Navbar />
      

      <Aboutt />
      
{/* 
      <ul className="AllEvents">
        
        <li className="Events">
        <Link to ="/Event1">
          
              <div className="images">
                <img src={Cultural} alt=" image" />

            </div>

            <div className="title"> Cosmos</div>
            
            </Link>
          </li>
         
        <li className="Events">
          <Link to ="/Event2"><div className="Event E2">
            <div className="images">
            <img src={image4} alt=" image" />


          </div>
          
            <div className="title">FAM - faculty alumni meet</div>
          </div>
          </Link></li>
        <li className="Events">
        <Link to ="/Event3"><div className="Event E3">
            <div className="images">
            <img src={image3} alt=" image" />


            </div>
            <div className="title"> Reconnecting faculty with alumni</div>
          </div>
        </Link></li>
        <li className="Events">
        <Link to ="/Event4"><div className="Event E4">
            <div className="images">
            <img src={image2} alt=" image" />


            </div>
            <div className="title">SAVAGE Talks - student alumni virtual age talks</div>
          </div>
          </Link>
            </li>
        <li className="Events">
        <Link to ="/Event5"><div className="Event E5">
            <div className="images">
            <img src={oip} alt=" image" />


            </div>
            <div className="title">Informal session for students to engage with alumni</div>
          </div>
        </Link></li>
        <li className="Events">
        <Link to ="/Event6"><div className="Event E6">
            <div className="images">
            <img src={image1} alt=" image" />



            </div>
            <div className="title">Student Mentorship</div>
          </div>
        </Link></li>
        </ul> */}
      
      


      <Contacts />

        <Footer />
      </div>
  )
}

export default About