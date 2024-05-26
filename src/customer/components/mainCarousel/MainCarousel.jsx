import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { MainCarouselData } from './MainCarouselData';

const items=MainCarouselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image}/>)

const MainCarousel = () => {
  return (
    

    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    animationDuration={1000}
    disableSlideInfo
    infinite
/>
  )
}

export default MainCarousel