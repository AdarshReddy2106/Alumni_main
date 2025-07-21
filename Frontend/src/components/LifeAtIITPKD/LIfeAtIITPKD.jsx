// import React from 'react'

import './LIfeAtIITPKD.css';
// placeholders must change the images later on

const LIfeAtIITPKD = () => {
  return (
    <div>
      <div className ="LAIcontainer">
      <div className ="LAIwrapper">
        <h1 className="LAIheading" id="title">LifeAtIITPKD</h1>
        <div className="Abt">
          <h3 className="LAIheading">About Palakkad and Kerala</h3>

          <p>Palakkad in Kerala, where we are located, is known for its rich traditions, great historical events, and personalities connected with it, and its sylvan surroundings, especially the Silent Valley rain forests and the famed palmyra trees.</p>
          <p>Palakkad is known as the rice bowl of Kerala. Celebrated as a major granary of Kerala, Palakkad is the gateway to the state from the North in the form of the nearly 40-kilometre break in the Western Ghats, called the Palakkad Gap. Palakkad is located on the northern bank of the Bharathappuzha River.</p>
          <p>The Kerala state is flanked by the Arabian Sea in the west and the towering Western Ghats in the East and networked by 44 interconnected rivers, Kerala is blessed with a unique set of geographical features that have made it one of the most sought after tourist destinations in Asia.</p>

        </div>

        <div className="Abt">
          <h3 className = "LAIheading">About Campus</h3>

          <p>We currently function from two campuses: Sahayadri Campus and Nila Campus, located adjacent to each other.  The permanent campus of IIT Palakkad is swiftly being developed on a picturesque 500-acre plot at the foot of the Western Ghats. It is situated 14.1 kilometers from the Palakkad Railway Junction and approximately 60 kilometers from the Coimbatore International Airport.</p>

          <div className = "ImageSection">
            <img src="https://ir.iitpkd.ac.in/sites/default/files/inline-images/Priority1_Saraswati%20Block-1.jpg" alt="Saraswati Block (Sahyadri)" />
            <br />
            <img src="https://ir.iitpkd.ac.in/sites/default/files/inline-images/nila22.PNG" alt="Agora Block (Nila)" />
          </div>

        </div>

        <div className="Abt">
          <h3 className = "LAIheading">Hostel Life</h3>

          <p>Our fully residential campus offers dedicated hostels for both girls and boys, creating a secure, comfortable, vibrant, and exceptional living experience. In total, the campus houses six hostels: four in the tranquil Nila Campus and two in the serene Sahyadri Campus. Students are provided with double/triple sharing accommodation in Nila Campus, while rooms at Sahyadri Campus are either single or triple occupancy rooms. Our hostels are equipped with well-appointed rooms, water heaters, RO-based drinking water systems, heavy-duty washing machines, and both WiFi and LAN network connections, ensuring convenience and connectivity. Additionally, a spacious dining hall, a well-equipped recreational area, an indoor games area, and a fitness center are readily available for leisure and physical activities. Each room is equipped with either WiFi or LAN connectivity, offering seamless online access. Additionally, common rooms in every hostel provide a space for relaxation, equipped with a television, newspapers, and a selection of magazines chosen by the student body.</p>

          <div className = "ImageSection">
            <img src="https://ir.iitpkd.ac.in/sites/default/files/inline-images/HostelSahyadri_0.jpg" alt="Sahyadri Hostels" />
            <br />
            <img src="https://ir.iitpkd.ac.in/sites/default/files/inline-images/HostelSahyadri2.jpg" alt="Sahyadri Hostels" />
          </div>
              
          <p>To promote students&apos; overall well-being, amenities such as an in-house facility for football, volleyball, basketball, and table tennis are provided. Professional coaches are on hand to guide students in athletics, football, volleyball, and cricket. Badminton enthusiasts can pursue their interests at the 4GB Badminton Academy in Palakkad. To accommodate visitors, guest rooms are available for Institute faculty, staff, and students&apos; families, ensuring a warm welcome.</p>
              
          <ul>
            <li><a href="https://iitpkd.ac.in/sites/default/files/2018-01/iitpkd-hostel-rules-2018.pdf">Hostel Rules</a></li>
            {/* link for hostel rules taken from IR website */}
          </ul>

        </div>
        
      </div>
    </div>
  </div>
  )
}

export default LIfeAtIITPKD