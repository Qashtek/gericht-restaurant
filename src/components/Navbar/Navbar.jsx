import React, {useState} from 'react';
// importing icons from react icons lib
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
// importing images from our constants dir
import images from '../../constants/images';
// importing our styles
import './Navbar.css';

// default component
const Navbar = () => { 
  // init state
  const [toggleMenu, setToggleMenu] = useState(false); 

  return(
    <nav className='app__navbar'>
      {/* logo */}
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      {/* links */}
      <ul className='app__navbar-links'>
        <li className='p__opensans'> <a href="#home">Home</a> </li>
        <li className='p__opensans'> <a href="#about">About</a> </li>
        <li className='p__opensans'> <a href="#menu">Menu</a> </li>
        <li className='p__opensans'> <a href="#awards">Awards</a> </li>
        <li className='p__opensans'> <a href="#contact">Contact</a> </li>
      </ul>
      {/* login */}
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div/>
        <a href="/" className='p__opensans'>Book Table</a>
      </div>

      {/* navbar for smaller screens - tablets, mobile */}
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => {setToggleMenu(true)}} />

        {
          toggleMenu && 
          (<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu color='#fff' fontSize={27} className='overlay_close' onClick={() => {setToggleMenu(false)}} />
            {/* links */} 
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'> <a href="#home">Home</a> </li>
              <li className='p__opensans'> <a href="#about">About</a> </li>
              <li className='p__opensans'> <a href="#menu">Menu</a> </li>
              <li className='p__opensans'> <a href="#awards">Awards</a> </li>
              <li className='p__opensans'> <a href="#contact">Contact</a> </li>
            </ul>

          </div>
          )
        }
        

      </div>
    </nav>
    )
};

export default Navbar;
