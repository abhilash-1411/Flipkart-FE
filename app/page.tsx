import React from 'react'
import Navbar from './components/Navbar'
import BannerComponent from "./BannerComponent/page";
import Footer from './components/Footer'
import BannerComponent from "./BannerComponent/page";
 import CardComponent from "./CardComponent/page";
import Carousel from './components/Carousel'
const page = () => {
  return (
    <div>
      <Navbar/>
      <main className=''>
      <BannerComponent/>
      <Carousel/>
      <CardComponent/> 
        
      </main>
      <Footer/>
    </div>
  )
}

export default page