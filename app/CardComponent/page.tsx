'use client';
import React, { useState } from 'react';
interface CardData {
  image: string;
  title: string;
  price: string;
}

const Cards: React.FC = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const cards: CardData[] = [
    {
      image: 'https://rukminim2.flixcart.com/fk-p-flap/1570/260/image/4d1606268e015845.jpg?q=80',
      title: 'Product 1',
      price: '₹999',
    },
    {
      image: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8acfb721c7bef89a.jpg?q=20',
      title: 'Product 2',
      price: '₹1499',
    },
    {
      image: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f991d1be51d2f0c2.jpg?q=20',
      title: 'Product 3',
      price: '₹1999',
    },
    {
      image: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2e6d5e4191298924.jpg?q=20',
      title: 'Product 4',
      price: '₹2499',
    },
    {
      image: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d51dbf60f2f8d4d.jpg?q=20',
      title: 'Product 5',
      price: '₹2999',
    },
    {
      image: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2e6d5e4191298924.jpg?q=20',
      title: 'Product 6',
      price: '₹3499',
    },
  
  ];

  const ITEMS_PER_SLIDE = 4; 

  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, Math.floor(cards.length / ITEMS_PER_SLIDE)));
  };

  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative m-4 w-full mx-auto">
    
      <div className="relative w-full overflow-hidden">
        <div className="h-12 p-4 text-xl font-semibold">Best Deals on Smartphones</div>
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * (100 / Math.ceil(cards.length / ITEMS_PER_SLIDE))}%)`,
          }}
        >
         
          {cards.map((card, index) => (
            <div key={index} className="w-[20rem] flex-shrink-0 px-4 p-4">
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={card.image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-56 object-cover"
                  style={{ aspectRatio: '211/35' }} 
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-xl font-bold text-gray-800">{card.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {Array.from({ length: Math.ceil(cards.length / ITEMS_PER_SLIDE) }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full bg-white ${currentSlide === index ? 'bg-blue-500' : 'bg-opacity-50'}`}
          ></button>
        ))}
      </div>

     
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-5 rounded-full shadow-lg"
        disabled={currentSlide === 0} 
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-5 rounded-full shadow-lg"
        disabled={currentSlide === Math.floor(cards.length / ITEMS_PER_SLIDE)} 
      >
        &gt;
      </button>
    </div>
  );
};

export default Cards;
