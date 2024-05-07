import React from 'react';
import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => {
  return(
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title='chase the new flavour' />
        <h1 className='app__header-h1'>The Key to fine dining</h1>
        <p className='p__opensans'style={{ margin: '2rem 0'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis iste nihil aspernatur cumque asperiores veniam tenetur vel labore ducimus rem!</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header Img" />
      </div>
    
    </div>
  )
  
};

export default Header;
