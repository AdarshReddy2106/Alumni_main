import React from 'react'
import "./css.css"
import SACAlumnimeet from '../../assets/SACAlumnimeet.png'

const Event1js = () => {
  return (
    <div className='subEvents'>
      <div className="event-header">
        <h1>SAC Alumni Meet</h1>
        <p className="event-date">21st June 2024</p>
      </div>
      
      <div className="event-content">
        <div className="event-description">
          <h2>About the Event</h2>
          <p>
            We had our first SAC Alumni meet on 21st June 2024. We had SAC members of
2020,2021 and 2022 batch as our invitees. It is a general chat session about their
experiences as SAC members, how holding on to a responsibility helped them in their
career and the session also had interaction with current SAC members SAC 2024.
This session helped current 2024 SAC members to engage with previous members and
their experiences.

          </p>
        </div>

        <div className="event-image">
          <img src={SACAlumnimeet} alt="SAC Alumni Meet - Video Conference Session" className="event-photo" />
          <p className="image-caption">SAC Alumni Meet - Interactive session with alumni from 2020, 2021, and 2022 batches</p>
        </div>
      </div>
    </div>

  )
}

export default Event1js