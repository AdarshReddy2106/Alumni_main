import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      name: "SAC Alumni Meet",
      route: "/Event1",
      description: "Annual alumni gathering and networking event",
      weekday: "Saturday",
      day: "23",
      monthYear: "Aug 2025",
      venue: "IIT Palakkad Campus",
      duration: "1 day event"
    },
    {
      id: 2,
      name: "CV Writing Session",
      route: "/Event2",
      description: "Professional development workshop for students",
      weekday: "Sunday",
      day: "14",
      monthYear: "Sep 2025",
      venue: "Seminar Hall A",
      duration: "2 hour event"
    },
    {
      id: 3,
      name: "Session on Building a tech startup",
      route: "/Event3",
      description: "Entrepreneurship insights and guidance",
      weekday: "Friday",
      day: "03",
      monthYear: "Oct 2025",
      venue: "Auditorium",
      duration: "Half day event"
    },
    {
      id: 4,
      name: "Informal Alumni Student Meet",
      route: "/Event4",
      description: "Casual networking and mentorship session",
      weekday: "Wednesday",
      day: "19",
      monthYear: "Nov 2025",
      venue: "Cafeteria",
      duration: "Evening meetup"
    },
    {
      id: 5,
      name: "Tech Club Event 5",
      route: "/Event5",
      description: "Technology-focused workshop and discussion",
      weekday: "Monday",
      day: "01",
      monthYear: "Dec 2025",
      venue: "Lab 2",
      duration: "3 hour workshop"
    },
    {
      id: 6,
      name: "Tech Club Event 6",
      route: "/Event6",
      description: "Advanced technical skills development",
      weekday: "Thursday",
      day: "15",
      monthYear: "Jan 2026",
      venue: "Innovation Center",
      duration: "1 day event"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="events-container">
        <div className="events-header">
          <h1>Our Events</h1>
          <p>Discover the latest events and activities at IIT PKD</p>
        </div>
        
        <div className="events-grid">
          {events.map((event) => (
            <Link to={event.route} key={event.id} className="event-card">
              <div className="event-card-inner">
                <div className="event-date-col">
                  <div className="date-weekday">{event.weekday}</div>
                  <div className="date-day">{event.day}</div>
                  <div className="date-monthyear">{event.monthYear}</div>
                </div>
                <div className="event-info-col">
                  <h3 className="event-title">{event.name}</h3>
                  <p className="event-venue">{event.venue ? `Venue: ${event.venue}` : ''}</p>
                  <p className="event-desc">{event.description}</p>
                  <p className="event-duration">{event.duration}</p>
                  <div className="event-card-footer">
                    <span className="view-details">View Details →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
