import React from 'react';
import { images } from '../../constants';
import {SubHeading} from '../../components';
import './Chef.css';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="Chef" />
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word" />
        <h1 className='headtext__cormorant'>What we believe in</h1>
        {/* chef's content */}
        <div className='app__chef-content'>
          {/* chef's quote */}
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime fugiat laborum expedita eos! Quos commodi repudiandae saepe eius exercitationem?
          </p>

        </div>
        {/* chef's signature */}
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  )
}

export default Chef;
