"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "../context/ThemeContext"; // assuming ThemeContext is used

interface CardData {
  id: number;
  image: string;
  title: string;
  price: string;
}

const Card: React.FC<{ card: CardData; onClick: (id: number) => void; isDarkMode: boolean }> = ({
  card,
  onClick,
  isDarkMode,
}) => {
  return (
    <div
      key={card.id}
      className={`rounded-lg overflow-hidden cursor-pointer border ${isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-gray-100'}`}
      onClick={() => onClick(card.id)}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-48 object-cover hover:scale-105 transition-all"
      />
      <div className={`p-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        <h3 className="font-semibold text-lg">{card.title}</h3>
        <p className="font-bold">{card.price}</p>
      </div>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const { isDarkMode } = useTheme(); // Get the dark mode status

  const cards: CardData[] = [
    {
      id: 1,
      image:
        "https://rukminim2.flixcart.com/image/660/660/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=80",
      title: "Product 1",
      price: "₹999",
    },
    {
      id: 2,
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d51dbf60f2f8d4d.jpg?q=20",
      title: "Product 2",
      price: "₹1499",
    },
    {
      id: 3,
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2e6d5e4191298924.jpg?q=20",
      title: "Product 3",
      price: "₹1999",
    },
    {
      id: 4,
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d51dbf60f2f8d4d.jpg?q=20",
      title: "Product 4",
      price: "₹2499",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (id: number) => {
    router.push(`/card/${id}`);
  };

  const renderCardGrid = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} isDarkMode={isDarkMode} />
        ))}
      </div>
    );
  };

  return (
    <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div className="max-w-8xl mx-auto p-2" key={index}>
              <div className={`rounded-lg shadow-lg p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 17 17"
                    className={`bg-blue-700 rounded-full ${isDarkMode ? 'text-white' : 'text-black'}`}
                  >
                    <path
                      d="m6.627 3.749 5 5-5 5"
                      stroke={isDarkMode ? '#FFFFFF' : '#000000'}
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                {renderCardGrid()}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardGrid;
