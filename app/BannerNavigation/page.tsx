"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  { name: "Grocery", imageUrl: "/images/grocery.webp" },
  { name: "Mobiles", imageUrl: "/images/mobile.webp" },
  {
    name: "Fashion",
    imageUrl: "/images/fashion.png",
    dropdownOptions: [
      "Men's Top Wear",
      "Women's Western",
      "Women's Ethnic",
      "Kids",
    ],
  },
  {
    name: "Electronics",
    imageUrl: "/images/electronics.png",
    dropdownOptions: [
      "Audio",
      "Gaming",
      "Cameras & Accessories",
      "Laptop Accessories",
    ],
  },
  {
    name: "Home & Furniture",
    imageUrl: "/images/homefurniture.jpg",
    dropdownOptions: [
      "Furniture",
      "Living Room Furniture",
      "Kitchen & Dining",
      "Home Decor",
    ],
  },
  { name: "Appliances", imageUrl: "/images/appliances.webp" },
  { name: "Flight Bookings", imageUrl: "/images/flightBooking.webp" },
  {
    name: "Beauty Toys & More",
    imageUrl: "/images/toys.png",
    dropdownOptions: [
      "Sports & Fitness",
      "Books",
      "Music",
      "Nutrition & Health Care",
    ],
  },
  {
    name: "Two Wheelers",
    imageUrl: "/images/vehicle.png",
    dropdownOptions: ["Petrol Vehicles", "Electric Vehicles"],
  },
];

const categoriesWithArrow = [
  "Fashion",
  "Electronics",
  "Beauty Toys & More",
  "Home & Furniture",
  "Two Wheelers",
];

export default function CategorySection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleMouseEnter = (categoryName: string) => {
    setHoveredCategory(categoryName);
  };

  return (
    <div className="bg-white m-2 p-1 border-t border-gray-200 shadow-md">
      <div className="container mx-auto">
      
        <div className="flex pb-2 space-x-1 sm:space-x-3 overflow-x-auto sm:overflow-x-visible">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center relative min-w-[100px] sm:min-w-[120px]" 
            >
              <div className="relative w-16 h-16">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={64}
                  height={64}
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>

              <span
                className="text-sm font-medium text-gray-700 flex items-center space-x-1 text-center"
                onMouseEnter={() => handleMouseEnter(category.name)}
              >
                <span className="">{category.name}</span> {/* Add truncate class */}
                {categoriesWithArrow.includes(category.name) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="24"
                    height="24"
                    className="text-black w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>

              {hoveredCategory === category.name && category.dropdownOptions && (
                <div className="absolute top-[5rem] z-10 left-0 w-48 mt-2 p-1 bg-white border border-gray-200 shadow-lg rounded-lg transition-all transform duration-300 ease-in-out">
                  <ul className="flex flex-col space-y-2">
                    {category.dropdownOptions.map((option, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200 ease-in-out"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
