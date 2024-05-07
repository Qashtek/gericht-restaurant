import React from 'react';
import './SpecialMenu.css';
import {SubHeading, MenuItem} from '../../components';
import {images, data} from '../../constants';

function SpecialMenu() {
  return (
    <div className='app__specialMenu section__padding' id='menu'>
      {/* section title */}
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu that fits your palatte' />
        <h1 className='headtext__cormorant'>Today's special</h1>
      </div>
      {/* special menu */}
      <div className='app__specialMenu-menu'>
        {/* wine and beer */}
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
          {/* list of wine and beer */}
          <div className='app__specialMenu-menu_items'>
            {/* map wines from data import */}

            {data.wines.map((wine, index) => {
              return(
                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
              )
            })}

          </div>
        </div>
        {/* image description */}
        <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt="menu img" />
        </div>
        {/* cocktails */}
        <div className='app__specialMenu-menu_cocktails flex__center'>
            <p className='app__specialMenu-menu_heading'>Cocktails</p>
            {/* list of cocktails */}
            <div className='app__specialMenu-menu_items'>
              {/* map cocktails from data import */}

              {data.cocktails.map((cocktail, index) => {
                return(
                  <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                )
              })}
            </div>
        </div>
      </div>

      {/* view more button */}
      <div style={{marginTop: '15px'}} className='flex__center'>
        <button className='custom__button' type='button'>View More</button>
      </div>
    </div>
  )
}

export default SpecialMenu