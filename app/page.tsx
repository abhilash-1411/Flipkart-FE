import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BannerComponent from "./BannerComponent/page";
 import CardComponent from "./CardComponent/page";
const page = () => {
  return (
    <div>
      <Navbar/>
      <main className='h-screen'>
      <BannerComponent/>
      <CardComponent/> 
      </main>
      <Footer/>
    </div>
  )
}

export default page