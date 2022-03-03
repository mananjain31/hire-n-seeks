import {  ArrowLeftRounded, ArrowRightRounded } from '@mui/icons-material';
import React from 'react';
import './CardSlider.scss'

const CardSlider = ({CardComponent, cardsProps, ...props}) => {
  const sliderRef = React.useRef();
  const scrollWidth = 500;

  const scrollLeft = () => {
    const { scrollLeft } = sliderRef?.current;
    if(scrollLeft === undefined) return;
    sliderRef?.current?.scroll(scrollLeft-scrollWidth >= 0 ? scrollLeft-scrollWidth : 0,0);
  }
  const scrollRight = () => {
    const { scrollLeft } = sliderRef?.current;
    if(scrollLeft === undefined) return;
    sliderRef?.current?.scroll(scrollLeft+scrollWidth, 0);
  }
  return ( 
    <div className="card-slider" ref={sliderRef}>
      {
        cardsProps.map((cardProp, idx) => 
          <div key={idx} className="slider-card">
            <div className='card-content'>
              <CardComponent />
            </div>
          </div>
        )
      }
        <ArrowLeftRounded className='actions left' onClick={scrollLeft}/>
        <ArrowRightRounded className='actions right' onClick={scrollRight}/>
    </div>
  );
}

export default CardSlider;