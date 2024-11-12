import React from 'react'
import Navbar from './components/Navbar'
import BannerNavigation from "./BannerNavigation/page";
import Footer from './components/Footer'
import CardComponent from "./CardComponent/page";
import Carousel from './components/Carousel'
const page = () => {
  return (
    <div>
      <main className=''>
      <BannerNavigation/>
      <Carousel/>
      <CardComponent/>  
      </main>
    </div>
  )
}

export default page