import React from 'react'
import MainCarousel from '../components/mainCarousel/MainCarousel'
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'
import { womenKurtha } from '../../data/womenKurthaData'


const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='flex flex-col py-20 px-5 lg:px-10 space-y-10 justify-center'>
        <HomeSectionCarousel data={womenKurtha} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={womenKurtha} sectionName={"Women's Kurtha"}/>
        <HomeSectionCarousel data={womenKurtha} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={womenKurtha} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={womenKurtha} sectionName={"Women's Dress"}/>
      </div>
    </div>
  )
}

export default HomePage