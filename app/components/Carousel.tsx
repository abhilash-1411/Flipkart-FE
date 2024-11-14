'use client'
import React, { useEffect, useState } from "react";

const Carousel: React.FC = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of Flipkart image sources for the carousel
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1570/260/image/4d1606268e015845.jpg?q=80", // Image 1
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8acfb721c7bef89a.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f991d1be51d2f0c2.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2e6d5e4191298924.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d51dbf60f2f8d4d.jpg?q=20"

  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); 
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full  mx-auto">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full  flex-shrink-0">
              <img
                src={src}
                alt={`Carousel slide ${index + 1}`}
                className="w-full h-auto mt-2 mb-2 object-contain"
                style={{ aspectRatio: '211/35' }} 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full bg-white ${currentSlide === index ? "bg-white" : "bg-opacity-50"}`}
          ></button>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white  p-5 py-8"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-5 py-8"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
