import React from 'react'
import BannerNavigation from "./BannerNavigation/page";
import Carousel from './components/Carousel'
import Cards from './components/Cards';
import GridCard from './components/GridCard'
const page = () => {
  return (
    <div>
      <main className=''>
      <BannerNavigation/>
      <Carousel/>
      <Cards/> 
      <GridCard/>
      </main>
    </div>
  )
}

export default page