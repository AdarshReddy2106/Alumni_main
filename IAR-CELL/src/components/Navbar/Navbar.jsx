import '../Navbar/Navbar.css';
import logo from '../../assets/iar.png';
import iitpkd from '../../assets/iit_pkd.jpg';

import contact from '../../assets/contact.png';
import menu from "../../assets/menu.svg";
// import menu from "../../assets/menu.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import useStore from '../../store';
import useStore from '../../Store';


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const { token, setToken } = useStore();


  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      {/* <img src={iitpkd} alt="logo" className="logo2" /> */}
      <div className="desktopMenu">
    
        <Link to="/" className="desktopMenuListItem">Home</Link>
        <Link to="/about" className="desktopMenuListItem">About us</Link>
        <Link to="/LifeAtIITPKD" className="desktopMenuListItem">Life At IITPKD</Link>
        
        <div className="desktopMenuListItem" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          Alumni
          {showDropdown && (
            <div className="dropdownMenu">


              <Link to="/NotableAlumni" className="dropdownListItem">Notable Alumni</Link>
              <Link to="/AlumniDirectorySignIn" className="dropdownListItem">Alumni Directory</Link>
            </div>
          )}
        </div>

        <div className="desktopMenuListItem" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          Events
          {showDropdown && (
            <div className="dropdownMenu">


             
              <Link to="/Event1" className="dropdownListItem">SAC Alumni Meet</Link>
              <Link to="/Event2" className="dropdownListItem">CV Writing Session </Link>
              <Link to="/Event3" className="dropdownListItem">Session on  Building a tech startup</Link>
              <Link to="/Event4" className="dropdownListItem">Informal Alumni Student Meet</Link>
           
            </div>
          )}
        </div>
        {/* <div className='desktopMenuListItem' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          Activities
          {
            showDropdown && (
              <div className="dropdownMenu">
                <Link to="/Event1" className='dropdownListItem'>Event1</Link>
              </div>
            )
          }
        </div> */}
        {/* <Link to="/Giving Back" className="desktopMenuListItem">Activities</Link> */}
        {/* <Link to="/Giving Back" className="desktopMenuListItem">Giving Back</Link> */}
        <div className="desktopMenu">
        {token ? (
  <>
    {/* <Link to="#" onClick={() => setToken(false)} className="">Logout</Link> */}
    <Link to="/profile" className=" profile-icon">
      <i className="fas fa-user-circle"></i>
    </Link>
  </>
) : (
  <Link to="/signin" className=" signin-button">Sign In</Link>
)}
          </div>

       


       

      </div>
      

      

      {/* <button className="desktopMenuBtn">
        <img src={contact} alt="contact" className="desktopMenuImg" />
        <Link to="/Contact" className="desktopMenuName">Contact Us</Link>
      </button> */}



      <img src={menu} alt="menu" className="mobmenu" onClick={() => setShowMenu(!showMenu)} />


      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link to="/" className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link to="/about" className="ListItem" onClick={() => setShowMenu(false)}>About us</Link>
        <Link to="/LifeAtIITPKD" className="ListItem" onClick={() => setShowMenu(false)}>Life At IITPKD</Link>
        <div className="ListItem" onClick={() => setShowDropdown(!showDropdown)}>Alumni
          {showDropdown && (
            <div className="dropdownMenu">


              <Link to="/NotableAlumni" target="_blank" rel="noopener noreferrer" className="ListItem" onClick={() => { setShowMenu(false); setShowDropdown(false); }}>Notable Alumni</Link>
              <Link to="/AlumniDirectorySignIn" className="ListItem">Alumni Directory</Link>
            </div>
          )}
        </div>
        <div className="ListItem" onClick={() => setShowDropdown(!showDropdown)}>
          Alumni
        </div>
        {showDropdown && (
          <>
              <Link to="/NotableAlumni" target="_blank" rel="noopener noreferrer" className="ListItem" onClick={() => { setShowMenu(false); setShowDropdown(false); }}>Notable Alumni</Link>
            
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="ListItem" onClick={() => { setShowMenu(false); setShowDropdown(false); }}>YouTube</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="ListItem" onClick={() => { setShowMenu(false); setShowDropdown(false); }}>Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="ListItem" onClick={() => { setShowMenu(false); setShowDropdown(false); }}>Facebook</a>
          </>
        )}
        {/* <Link to="/NotableAlumni" className="ListItem" onClick={() => setShowMenu(false)}>Notable Alumni</Link>
        <Link to="/AlumniDirectory" className="ListItem" onClick={() => setShowMenu(false)}>Alumni Directory</Link> */}
        <Link to="/Contact" className="ListItem" onClick={() => setShowMenu(false)}>Contact Us</Link>
      
      

      </div>
    </nav>
  );
};


export default Navbar;
