"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation"; 

interface CardData {
  id: number;
  image: string;
  title: string;
  price: string;
}

const Cards: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();  

  const cards: CardData[] = [
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/fk-p-flap/1570/260/image/4d1606268e015845.jpg?q=80",
      title: "Product 1",
      price: "₹999",
    },
    {
      id: 2,
      image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8acfb721c7bef89a.jpg?q=20",
      title: "Product 2",
      price: "₹1499",
    },
    {
      id: 3,
      image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f991d1be51d2f0c2.jpg?q=20",
      title: "Product 3",
      price: "₹1999",
    },
    {
      id: 4,
      image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2e6d5e4191298924.jpg?q=20",
      title: "Product 4",
      price: "₹2499",
    },
    {
      id: 5,
      image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d51dbf60f2f8d4d.jpg?q=20",
      title: "Product 5",
      price: "₹2999",
    },
    // {
    //   id: 6,
    //   image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2e6d5e4191298924.jpg?q=20",
    //   title: "Product 6",
    //   price: "₹3499",
    // },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsMobile(true);
        setItemsPerSlide(1);
      } else if (window.innerWidth <= 1024) {
        setIsMobile(false);
        setItemsPerSlide(2);
      } else {
        setIsMobile(false);
        setItemsPerSlide(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      Math.min(prevSlide + 1, Math.floor(cards.length / itemsPerSlide))
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleCardClick = (id: number) => {
    alert(`Navigating to card with ID: ${id}`);
    router.push(`/card/${id}`);  // Use the router to navigate directly
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="relative w-full overflow-hidden">
        <div className="h-12 p-4 text-xl font-semibold">
          Best Deals on Smartphones
        </div>
        {isMobile ? (
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-full sm:w-[20rem] md:w-[22rem] lg:w-[24rem] mx-auto flex flex-row items-center cursor-pointer"
                onClick={() => handleCardClick(card.id)} 
              >
                <div className="w-[20%]">
                  <img
                    src={card.image}
                    alt={`Product ${card.id}`}
                    className="w-full h-20 object-cover"
                  />
                </div>

                <div className="w-[50%] flex flex-col justify-center pl-2">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-xl font-bold text-gray-800">{card.price}</p>
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon icon={faChevronRight} className="text-md" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                (currentSlide * 100) / Math.ceil(cards.length / itemsPerSlide)
              }%)`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-[90%] sm:w-[20rem] md:w-[22rem] lg:w-[24rem] flex-shrink-0 px-4 p-4 cursor-pointer"
                onClick={() => handleCardClick(card.id)} 
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={card.image}
                    alt={`Product ${card.id}`}
                    className="w-full h-56 object-cover"
                    style={{ aspectRatio: "211/35" }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-xl font-bold text-gray-800">{card.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {!isMobile && (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: Math.ceil(cards.length / itemsPerSlide) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full bg-white ${
                  currentSlide === index ? "bg-blue-500" : "bg-opacity-50"
                }`}
              ></button>
            )
          )}
        </div>
      )}
      {!isMobile && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-5 rounded-full shadow-lg"
          disabled={currentSlide === 0}
        >
          &lt;
        </button>
      )}
      {!isMobile && (
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-5 rounded-full shadow-lg"
          disabled={currentSlide === Math.floor(cards.length / itemsPerSlide)}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Cards;
