import React from 'react'
import "./css.css"
import BuildingTechStartup from '../../assets/Building a tech startup 1.png'
import BuildingTechStartup2 from '../../assets/Building a tech startup 2.png'

const Event3js = () => {
  return (
    <div className='subEvents'>
      <div className="event-header">
        <h1>Building a Tech Startup</h1>
        <p className="event-date">15th October 2024</p>
        <p className="event-speaker">Featured Speakers: Dr. Saishyam Narayanan & CA Saurabh Dashottar</p>
      </div>
      
      <div className="event-content">
        <div className="event-description">
          <h2>About the Session</h2>
          <p>
            Our distinguished event featured expert speakers Dr. Saishyam Narayanan, CEO of IIT Palakkad 
            Technology IHUB Foundation (IPTIF), and CA Saurabh Dashottar, Founder & MD of SFS Advisors Pvt. Ltd. 
            The session provided invaluable insights on entrepreneurship and building technology companies from scratch. 
            Students learned about startup ecosystem, funding strategies, business model validation, and the journey 
            from idea to successful venture. The interactive session covered essential topics including idea validation, 
            funding strategies, team building, and navigating the startup ecosystem.
          </p>
        </div>

        <div className="event-image">
          <img src={BuildingTechStartup} alt="Building a Tech Startup Session" className="event-photo" />
          <p className="image-caption">Building a Tech Startup - Expert session with Dr. Saishyam Narayanan and CA Saurabh Dashottar</p>
        </div>

        <div className="speaker-info">
          <h2>About the Speakers</h2>
          <div className="speaker-details">
            <h3>Dr. Saishyam Narayanan</h3>
            <p><strong>Position:</strong> CEO</p>
            <p><strong>Organization:</strong> IIT Palakkad Technology IHUB Foundation (IPTIF)</p>
            <p><strong>Expertise:</strong> Technology Innovation and Startup Ecosystem</p>
          </div>
          <div className="speaker-details">
            <h3>CA Saurabh Dashottar</h3>
            <p><strong>Position:</strong> Founder & MD</p>
            <p><strong>Company:</strong> SFS Advisors Pvt. Ltd.</p>
            <p><strong>Expertise:</strong> Financial Advisory and Business Strategy</p>
          </div>
        </div>

        <div className="event-image">
          <img src={BuildingTechStartup2} alt="Building a Tech Startup Session Highlights" className="event-photo" />
          <p className="image-caption">Session highlights showing startup strategies and entrepreneurial insights from industry experts</p>
        </div>
      </div>
    </div>
  )
}

export default Event3js