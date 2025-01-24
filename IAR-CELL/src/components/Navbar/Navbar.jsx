import '../Navbar/Navbar.css';
import logo from '../../assets/iar.png';
import iitpkd from '../../assets/iit_pkd.jpg';

import contact from '../../assets/contact.png';
import menu from "../../assets/menu.png";
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
      <img src={iitpkd} alt="logo" className="logo2" />
      <div className="desktopMenu">
    
        <Link to="/" className="desktopMenuListItem">Home</Link>
        <Link to="/about" className="desktopMenuListItem">About us</Link>
        <Link to="/LifeAtIITPKD" className="desktopMenuListItem">Life At IITPKD</Link>
        
        <div className="desktopMenuListItem" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          Alumni
          {showDropdown && (
            <div className="dropdownMenu">


              {/* <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> */}
              <Link to="/NotableAlumni" className="dropdownListItem">Notable Alumni</Link>
              <Link to="/AlumniDirectorySignIn" className="dropdownListItem">Alumni Directory</Link>
            </div>
          )}
        </div>

        <div className="desktopMenuListItem" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          Events
          {showDropdown && (
            <div className="dropdownMenu">


              {/* <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> */}
              <Link to="/Event1" className="dropdownListItem">Cosmos</Link>
              <Link to="/Event2" className="dropdownListItem">FAM</Link>
              <Link to="/Event3" className="dropdownListItem">Reconnection</Link>
              <Link to="/Event4" className="dropdownListItem">SAVAGE TALKS</Link>
              <Link to="/Event5" className="dropdownListItem">Informal session</Link>
              <Link to="/Event6" className="dropdownListItem">Student Mentorship</Link>
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
        <Link to="/Giving Back" className="desktopMenuListItem">Activities</Link>
        <Link to="/Giving Back" className="desktopMenuListItem">Giving Back</Link>


        {token
        ?
        <Link to="#" onClick={()=>setToken(false)} className="desktopMenuListItem">Logout</Link>
        :
        <p></p>
        }

        <div>
        {token
        ?
        <p className="desktopMenuListItem">Profile</p>
        :
        <p></p>
        }
        </div>

      </div>
      
      <img src={logo} alt="logo" className="logo" />

      

      {/* <button className="desktopMenuBtn">
        <img src={contact} alt="contact" className="desktopMenuImg" />
        <Link to="/Contact" className="desktopMenuName">Contact Us</Link>
      </button> */}



      <img src={menu} alt="menu" className="mobmenu" onClick={() => setShowMenu(!showMenu)} />


      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link to="/" className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link to="/about" className="ListItem" onClick={() => setShowMenu(false)}>About us</Link>
        <Link to="/LifeAtIITPKD" className="ListItem" onClick={() => setShowMenu(false)}>Life At IITPKD</Link>
        <Link to="/NotableAlumni" className="ListItem" onClick={() => setShowMenu(false)}>Notable Alumni</Link>
        <Link to="/AlumniDirectory" className="ListItem" onClick={() => setShowMenu(false)}>Alumni Directory</Link>
        <Link to="/Contact" className="ListItem" onClick={() => setShowMenu(false)}>Contact Us</Link>
        <div className="ListItem" onClick={() => setShowDropdown(!showDropdown)}>
          Alumni
        </div>
        {showDropdown && (
          <>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="ListItem" onClick={() => { setShowMenu(false); setShowDropdown(false); }}>YouTube</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="ListItem" onClick={() => { setShowMenu(false); setShowDropdown(false); }}>Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="ListItem" onClick={() => { setShowMenu(false); setShowDropdown(false); }}>Facebook</a>
          </>
        )}
      

      </div>
    </nav>
  );
};


export default Navbar;
