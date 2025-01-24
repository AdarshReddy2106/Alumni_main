// import React from 'react'
import '../Main/Main.css'

import deepak from '../../assets/Dinesh.jpg'
function Main3() {
  return (

    <section className="refer1">
    
      
        <div className="name">
          <img src={deepak} alt="Dean" className="DEAN" />
            <div className='DirectorMessage'>
                  <hr className='length'/>
                  <p className="headfont"><span> FACULTY IN CHARGE MESSAGE</span> </p>
                  {/* <span className="directorMessage">DIRECTOR'S MESSAGE</span> */}
              
                  
                  <hr />
                  
                  <p className="namefont">Dr. Dinesh Setti  <br /> <span className="profession"> International and Alumni relations </span></p>
            </div>
        </div>

      
        <div className="message">
          {/* <p className="paragraph">Dear Class of 2024,</p> */}
          <p className="paragraph">Heartfelt congratulations. This moment of graduation is a result of years of hard work and dedication. You have acquired knowledge and grown

as a strong individual with confidence, ready to
make a significant impact on the world. Your

journey at IIT Palakkad has been filled with challenges, successes, and unforgettable memories. Each experience has shaped you into the

person you are today.</p>
          <p className="paragraph">As you step into the next chapter of your lives,
remember that you are now part of a global network of alumni who share a
common bond with IITs. This network is a powerful resource, and I encourage
you to stay connected, support one another, and give back to the community
that has nurtured your growth.</p>
          <p className="paragraph">We are confident you will continue excelling and contributing meaningfully to
society. As you pursue your dreams and aspirations, you always have a home
here, and we are eager to hear about your achievements, which will make us
proud.

Congratulations once again, Class of 2024! Go forward with courage, curiosity, and conviction.</p>
          {/* <p className="paragraph">If you are reading this in 2024, let me conclude by wishing you a bright future and requesting you to always keep in touch with the Institute. If you are reading it much later, let me also urge you to think of ways in which you can contribute to your alma mater using the vast experience and resources you would have gathered on your way. </p> */}
          <br />
          <br />
          <br />
          <hr />

          </div>
          
        
    </section>
  )
}

export default Main3
