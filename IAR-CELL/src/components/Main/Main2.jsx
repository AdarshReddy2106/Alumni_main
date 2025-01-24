// import React from 'react'
import '../Main/Main.css'

import deepak from '../../assets/Deepak R.jpg'
function Main2() {
  return (

    <section className="refer1">
    
      
        <div className="name">
          <img src={deepak} alt="Dean" className="DEAN" />
            <div className='DirectorMessage'>
                  <hr className='length'/>
                  <p className="headfont"><span> DEAN STUDENTS MESSAGE</span> </p>
                  {/* <span className="directorMessage">DIRECTOR'S MESSAGE</span> */}
              
                  
                  <hr />
                  
                  <p className="namefont">Dr. Deepak Rajendraprasad  <br /> <span className="profession"> Dean Students, IIT Palakkad  </span></p>
            </div>
        </div>

      
        <div className="message">
          {/* <p className="paragraph">Dear Class of 2024,</p> */}
          <p className="paragraph">Congratulations on your graduation! I can only imagine the melange of emotions - pride, satisfaction, relief, joy, nostalgia and what not - that each one of you is experiencing at this special moment in your life. While a small part of me is sad to bid you farewell, a larger part of me is happy and proud to have contributed to nurturing you into wonderful human beings during your time at IIT Palakkad. I&apos;m sure every faculty and staff member of the Institute is feeling the same.</p>
          <p className="paragraph">Speaking for the Students&apos; Section which oversees the accommodation, sports, extracurriculars and wellness of the students, we believe you got every opportunity to pursue your interests - both old and newfound. Yes there was Covid, there was campus shifting, some sports facilities were just getting built. But we believe you could make the best use of your time on campus. Most importantly, we hope that you have made friends and memories that will last a lifetime.</p>
          <p className="paragraph">I would also like to thank you. Thank you for organising many student-led activities, volunteering for many more activities, for bringing many laurels to our Institute, for graciously adjusting to our infrastructural limitations, for spreading joy throughout the campus and for keeping all of us always young.</p>
          <p className="paragraph">If you are reading this in 2024, let me conclude by wishing you a bright future and requesting you to always keep in touch with the Institute. If you are reading it much later, let me also urge you to think of ways in which you can contribute to your alma mater using the vast experience and resources you would have gathered on your way. </p>
          <br />
          <br />
          <br />
          <hr />

          </div>
          
        
    </section>
  )
}

export default Main2
