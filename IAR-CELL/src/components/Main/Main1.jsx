// import React from 'react'
import '../Main/Main.css'
import dean from '../../assets/oldman.jpg'
function Main1() {
  return (


//     <section className="block block-block" id='block-block-4'>
//       <div className="row">
//         <div className="col-3" id='dir-photo' style='flex : 0 0 24%;max-width: 24%'>
//           <img src={dean} alt="" className="img-responsive" style="padding-left: 15px"/>
//         </div>
//         <div className="col-9 text-center" id='dir-msg' style='flex: 0 0 62%'>
//           <h2 className="text-uppercase">Director's Message</h2>
//           <h4>"Prof. A. Seshadri Shakar"
//             <br /><small>Professor & Director</small>
//           </h4>
//         </div>

//       </div>
//       <blockquote className="dir-message">
//         <p className="text-allign-justify">Dear Graduates of 2024,
//         </p>
//         <p className="text-allign-justify">Congratulations on reaching this significant milestone! Your hard work, resilience, and
// dedication have brought you to this proud moment. As you step into the next chapter of your
// lives, remember to embrace change, stay curious, uphold integrity, and believe in yourselves.</p>
//         <p className="text-allign-justify">With this end comes a new beginning. The world awaits your talents and contributions. Carry
// forward the lessons learned, the friendships forged, and the memories cherished. You have the
// power to inspire, to innovate, and to make a difference.
// </p>
//         <p className="text-allign-justify">You are the face of IIT Palakkad, and you will always be a part of this institution. We encourage
// you to maintain strong ties with your alma mater and continue to be involved in its future.
// </p>
//         <p className="text-allign-justify">We are incredibly proud of you and excited for the future you will create. Congratulations, Class
//         of 2024!</p>
//       </blockquote>
//       :: after
//     </section>
    <section className="refer1">
    
      
        <div className="name">
          <img src={dean} alt="Dean" className="DEAN" />
            <div className='DirectorMessage'>
                  <hr className='length'/>
                  <p className="headfont"><span> DIRECTOR&apos;S MESSAGE</span> </p>
                  {/* <span className="directorMessage">DIRECTOR&apos;S MESSAGE</span> */}
              
                  
                  <hr />
                  
                  <p className="namefont">Prof. A. Seshadri Sekhar <br /> <span className="profession">Professor & Director</span></p>
            </div>
        </div>

      
        <div className="message">
          {/* <p className="paragraph">Dear Graduates of 2024,</p> */}
          <p className="paragraph">Congratulations on reaching this significant milestone! Your hard work, resilience, and dedication have brought you to this proud moment. As you step into the next chapter of your
            lives, remember to embrace change, stay curious, uphold integrity, and believe in yourselves.</p>
          <p className="paragraph">With this end comes a new beginning. The world awaits your talents and contributions. Carry forward the lessons learned, the friendships forged, and the memories cherished. You have the power to inspire, to innovate, and to make a difference.</p>
          <p className="paragraph">You are the face of IIT Palakkad, and you will always be a part of this institution. We encourage
            you to maintain strong ties with your alma mater and continue to be involved in its future.</p>
          <p className="paragraph">We are incredibly proud of you and excited for the future you will create. Congratulations, Class
            of 2024!</p>
          <br />
          
          <hr />

          </div>
          
        
    </section>
  )
}

export default Main1
