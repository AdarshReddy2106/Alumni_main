import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
import "./AlumniDirectorySignIn.css"

const AlumniDirectorySignIn = () => {
  return (
      <div className="class">
      <Navbar />
      <hr />
          <div className="middle">
              <p className="paragraph">You need to be logged in to see the results</p>
              <Link to="/SignIn" className="SignIn">SignIn</Link>
              <p className="paratitle">Why do I need to login?</p>
              <p className="paragraph">This platform is for alumni, students and faculty of IIT Palakkad. By logging in, you will help us authenticate your identity to use this platform.</p>
              
</div>
          <Footer/>
    </div>
  )
}

export default AlumniDirectorySignIn