import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>
    {/* content */}
    <div className='app__wrapper_info'>
       <SubHeading title='Contact' />
       <h1 className='headtext__cormorant' style={{marginTop: '3rem'}}>Find Us</h1>

       <div className='app__wrapper-content'>
        <p className='p__opensans'>23 Boulevard street, Tyson Avenue.</p>
        <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Opening hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 2:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 3:00 am</p>
       </div>

       <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    {/* image */}
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='find us' />

    </div>
  </div>
);

export default FindUs;
