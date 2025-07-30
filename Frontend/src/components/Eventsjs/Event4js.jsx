import React from 'react'
import "./css.css"
import InformalMeet1 from '../../assets/Informal Meet of International Students 1.png'
import InformalMeet2 from '../../assets/Informal Meet of International Students 2.png'

const Event4js = () => {
  return (
    <div className='subEvents'>
      <div className="event-header">
        <h1>Informal Meet of International Students</h1>
        <p className="event-date">5th December 2024</p>
        <p className="event-speaker">Organized by: IAR Cell</p>
      </div>
      
      <div className="event-content">
        <div className="event-description">
          <h2>About the Meet</h2>
          <p>
            The IAR Cell organized a special informal meet for international students to foster cultural
            exchange and build stronger connections within our diverse student community. The event provided
            a platform for international students to share their experiences, challenges, and success stories
            while studying at IIT Palakkad. The meet also included discussions about career opportunities
            and networking strategies for international students in the Indian tech industry.
          </p>
        </div>

        <div className="event-image">
          <img src={InformalMeet1} alt="Informal Meet of International Students" className="event-photo" />
          <p className="image-caption">Informal Meet of International Students - Cultural exchange and networking event</p>
        </div>

        <div className="speaker-info">
          <h2>Event Highlights</h2>
          <div className="speaker-details">
            <h3>Key Activities</h3>
            <p><strong>Cultural Exchange:</strong> Students shared experiences from their home countries</p>
            <p><strong>Career Guidance:</strong> Discussion on opportunities for international students</p>
            <p><strong>Networking:</strong> Building connections with alumni and industry professionals</p>
          </div>
        </div>

        <div className="event-image">
          <img src={InformalMeet2} alt="Informal Meet of International Students Session" className="event-photo" />
          <p className="image-caption">Interactive session with international students sharing their journey and experiences</p>
        </div>
      </div>
    </div>
  )
}

export default Event4js