import React from 'react';
import './Swap.css';

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
      "../../../public/assests/Events/saikiranselect/2Y4A0622.JPG",
      "../../../public/assests/Events/saikiranselect/2Y4A3190.JPG",
      "../../../public/assests/Events/saikiranselect/2Y4A9607.JPG",
      "../../../public/assests/Events/saikiranselect/DSC00332.JPG",
      "../../../public/assests/Events/saikiranselect/DSC02410.JPG",

      "https://www.iitpkd.ac.in/sites/default/files/2023-07/2Y4A6207.JPG",
      "https://www.iitpkd.ac.in/sites/default/files/2023-07/2Y4A6207.JPG",
      "https://www.iitpkd.ac.in/sites/default/files/styles/with_scale_/public/2024-05/Acheivement1.png?itok=EP7MWmnA",
      "https://www.iitpkd.ac.in/sites/default/files/2024-02/Priority1_Saraswati%20Block-1.jpg"
    ];

    console.log(images[imgcount]);
    return <img src={images[imgcount]} alt="" className="background fade-in" />;
  }
};

export default Swap;
