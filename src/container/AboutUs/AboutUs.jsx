import React from 'react';
import {images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => {

  return(
    <div className='app__aboutus app__bg flex__center section__padding'>
      <div className='app__aboutus-overlay flex__center '>
        <img src={images.G} alt="Big G" />
      </div>

      <div className='app__aboutus-content flex__center'>
        {/* about us */}
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat error vitae aut beatae atque laborum quidem excepturi vero ad ut.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

        {/* knife */}
        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="BOUT_KNIFE" />
        </div>

        {/* our history */}
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat error vitae aut beatae atque laborum quidem excepturi vero ad ut.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

      </div>

    </div>
  )
}
 

export default AboutUs;
