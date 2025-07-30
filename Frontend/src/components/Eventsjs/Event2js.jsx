import React from 'react'
import "./css.css"
import CVWritingMitul from '../../assets/CVWritingMitul.png'
import CVWritingScreenshots from '../../assets/CVWritingScreenshots.png'

const Event2js = () => {
  return (
    <div className='subEvents'>
      <div className="event-header">
        <h1>CV Writing Session</h1>
        <p className="event-date">28th September 2024</p>
        <p className="event-speaker">Speaker: Mitul Kataria, Alumni</p>
      </div>
      
      <div className="event-content">
        <div className="event-description">
          <h2>About the Session</h2>
          <p>
            One of our esteemed alumni Mitul Kataria who works in Otsuka Shokal as Machine
Learning Engineer has hosted the CV writing session event which helped a lot of our
students to enhance their CV and get a clear understanding about the job seeking
procedure. The session lasted around 45 min and it has also been uploaded on the IAR
cell youtube channel.
          </p>
        </div>

        <div className="event-image">
          <img src={CVWritingMitul} alt="CV Writing Session Poster with Mitul Kataria" className="event-photo" />
          <p className="image-caption">CV Writing Session - 28th September 2024, featuring Mitul Kataria</p>
        </div>

        <div className="speaker-info">
          <h2>About the Speaker</h2>
          <div className="speaker-details">
            <h3>Mitul Kataria</h3>
            <p><strong>Position:</strong> Machine Learning Engineer</p>
            <p><strong>Company:</strong> Otsuka Shokal</p>
          </div>
        </div>

        <div className="event-image">
          <img src={CVWritingScreenshots} alt="CV Writing Session Screenshots" className="event-photo" />
          <p className="image-caption">Session highlights showing CV writing tips, templates, and key takeaways</p>
        </div>
      </div>
    </div>
  )
}

export default Event2js