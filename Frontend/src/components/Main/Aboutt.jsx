import React, { useState } from 'react'
import '../Main/Main.css'

import deepak from '../../assets/Deepak R.jpg'
function Aboutt() {
  return (

    <section className="refer1">
    
{/*       
        <div className="name">
          <img src={deepak} alt="Dean" className="DEAN" />
            <div className='DirectorMessage'>
                  <hr className='length'/>
                  <p className="headfont"><span> About us</span> </p>
                  <span className="directorMessage">DIRECTOR'S MESSAGE</span>
              
                  
                  <hr />
                  <br />
                  <p className="namefont">Dr. Deepak Rajendraprasad  <br /> <span className="profession"> Dean Students, IIT Palakkad  </span></p>
            </div>
        </div> */}

      
      <div className="message">
        <h1>About us</h1>
          <p className="paragraph">IIT Palakkad Alumni Relations Office aims to encourage and facilitate engagement of our alumni with each other, with our current students and with the institute. We actively promote alumni achievements, help them build connections, and work to address any concerns.</p>
          <p className="paragraph">Our Alumni are an integral part of our institution and through this platform we invite you to stay connected and use the opportunity to network and collaborate.</p>
          <br />
          <hr />

          </div>
          
        
    </section>
  )
}

export default Aboutt
