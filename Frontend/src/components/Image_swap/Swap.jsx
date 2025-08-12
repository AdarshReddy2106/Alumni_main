import React from 'react';
import './Swap.css';
// Import all images
import img1 from '../../assets/Events/saikiranselect/IMG1.webp';
import img2 from '../../assets/Events/saikiranselect/IMG3.webp';
import img3 from '../../assets/Events/saikiranselect/IMG5.jpg';
import img4 from '../../assets/Events/saikiranselect/IMG2.webp';
import img5 from '../../assets/Events/saikiranselect/IMG4.webp';


const Swap = ({ playstatus, imgcount }) => {
  if (playstatus) {
    return (
      <iframe
        src="https://www.youtube.com/embed/6JVEJhOqZTo"
        className="background fade-in"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player">
      </iframe>
    );
  } else {
    const images = [
      img1,
      img2,
      img3,
      img4,
      img5,
     
      "https://www.iitpkd.ac.in/sites/default/files/styles/with_scale_/public/2024-05/Acheivement1.png?itok=EP7MWmnA",
      "https://www.iitpkd.ac.in/sites/default/files/2024-02/Priority1_Saraswati%20Block-1.jpg",
    ];

    return <img src={images[imgcount]} alt="" className="background fade-in" />;
  }
};

export default Swap;