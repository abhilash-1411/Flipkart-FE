import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
const page = () => {
  return (
    <div>
      <Navbar/>
      <main className='h-screen'>
        <Carousel/>
      </main>
      <Footer/>
    </div>
  )
}

export default page