import React from 'react'
import BannerNavigation from "./BannerNavigation/page";
import Carousel from './components/Carousel'
import Cards from './components/Cards';
const page = () => {
  return (
    <div>
      <main className=''>
      <BannerNavigation/>
      <Carousel/>
      <Cards/> 
      </main>
    </div>
  )
}

export default page