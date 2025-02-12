// import React from 'react'
import { Link } from 'react-router-dom';
import "./TechMembers.css"

import Harika from "../../assets/club/harika.jpeg"
import Saikiran from "../../assets/club/sai_kiran.jpeg"
import Jakadeer from "../../assets/club/Jakadeer.jpeg"
import Chaturbhuja from "../../assets/club/chaturbhuja.jpeg"
import Nagendra from "../../assets/club/Nagendra.jpeg"
import Simeon from "../../assets/club/simeon.jpeg"
import arjun from "../../assets/club/arjun.jpeg"

const ClubMembers = () => {
  return (
    <div>
    
      <div className="contact-page">
      <h1>Technical Lead</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-image">
            <img src={Harika} alt="" />
          </div>
          <div className="card-content">
            <h3> Satya Harika</h3>
            <p className="title">Technical Lead</p>
           
            <p className="email">
              <i className="fas fa-envelope"></i> 142201003@smail.iitpkd.ac.in
            </p>
          </div>
        </div>
    

          

      </div>
      </div>
      <div className="contact-page">
      <h1>Frontend Lead</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-image">
            <img src={Saikiran} alt="" />
          </div>
          <div className="card-content">
            <h3>K.Sai kiran</h3>
            <p className="title">Frontend lead</p>
           
            <p className="email">
              <i className="fas fa-envelope"></i> 112201044@smail.iitpkd.ac.in
            </p>
          </div>
        </div>
    

          

      </div>
      </div>
      <div className="contact-page">
      <h1>Frontend Team</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-image">
            <img src={Chaturbhuja} alt="" />
          </div>
          <div className="card-content">
            <h3>Chaturbhuja</h3>
            <p className="title">Frontend member</p>
            
            <p className="email">
              <i className="fas fa-envelope"></i> 122301041@smail.iitpkd.ac.in
            </p>
          </div>
          </div>
          <div className="contact-card">
          <div className="card-image">
            <img src={arjun} alt="" />
          </div>
          <div className="card-content">
            <h3>Arjun</h3>
            <p className="title">Frontend Member</p>
         
            <p className="email">
              <i className="fas fa-envelope"></i> 122301004@smail.iitpkd.ac.in
            </p>
          </div>
          </div> 
          
        </div>
      
      </div>
      <div className="contact-page">
      <h1>Backend Lead</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-image">
            <img src={Jakadeer} alt="" />
          </div>
          <div className="card-content">
            <h3>Jakadeer</h3>
            <p className="title">Backend lead</p>
           
            <p className="email">
              <i className="fas fa-envelope"></i> 142201023@smail.iitpkd.ac.in
            </p>
          </div>
        </div>
    

          

      </div>
      </div>
      <div className="contact-page">
      <h1>Backend Team</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-image">
            <img src={Nagendra} alt="" />
          </div>
          <div className="card-content">
            <h3>Nagendra</h3>
            <p className="title">Backend member</p>
            
            <p className="email">
              <i className="fas fa-envelope"></i> 122201010@smail.iitpkd.ac.in
            </p>
          </div>
          </div>
          <div className="contact-card">
          <div className="card-image">
            <img src={Simeon} alt="" />
          </div>
          <div className="card-content">
            <h3>Simeon</h3>
            <p className="title">Backend Member</p>
         
            <p className="email">
              <i className="fas fa-envelope"></i> 112301031@smail.iitpkd.ac.in
            </p>
          </div>
          </div> 
          
        </div>
      
      </div>
      
      
      </div>
      
  )
}

export default ClubMembers