import React from 'react'
import Navbar from './components/Navbar'
import BannerNavigation from "./BannerNavigation/page";
import Footer from './components/Footer'
import CardComponent from "./CardComponent/page";
import Carousel from './components/Carousel'
const page = () => {
  return (
    <div>
      <Navbar/>
      <main className=''>
      <BannerNavigation/>
      <Carousel/>
      <CardComponent/> 
        
      </main>
      <Footer/>
    </div>
  )
}

export default page