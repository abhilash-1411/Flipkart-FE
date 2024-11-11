import React from 'react'
import Navbar from './components/Navbar'
import BannerComponent from "./BannerComponent/page";
import Footer from './components/Footer'
import Carousel from './components/Carousel'
const page = () => {
  return (
    <div>
      <Navbar/>
      <BannerComponent/>
      <main className='h-screen'>
        <Carousel/>
      </main>
      <Footer/>
    </div>
  )
}

export default page