"use client";

import { useState, useEffect } from "react";
import Image from "next/image";


const fetchMobileCategories = async () => {

  return [
    { name: "Realme P15", imageUrl: "/images/realmeP15.jpg", price: "From Rs.13,999" },
    { name: "Vivo T2 Pro 5G", imageUrl: "/images/vivoT2Pro5g.jpg", price: "From Rs.20,999" },
    { name: "Poco M6 Pro 5G", imageUrl: "/images/pocom6Pro5g.jpg", price: "From Rs.9,249" },
    { name: "Moto Edge 50 Fusion", imageUrl: "/images/motoEdge50Fusion.jpg", price: "From Rs.19,999" },
  ];
};

export default function CardComponent() {
  const [mobileCategories, setMobileCategories] = useState<any[]>([]);

  useEffect(() => {
   
    const getMobileCategories = async () => {
      const categories = await fetchMobileCategories();
      setMobileCategories(categories);
    };

    getMobileCategories();
  }, []);

  return (
    <div className="bg-white mt-5 p-2 border-t border-gray-200 shadow-lg mr-[300px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 ">Best Deals on Smartphones</h1>
      <div className="mx-auto w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-2">
          {mobileCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between border-2 border-gray-300 rounded-lg p-7 space-y-4 h-[290px] shadow-md hover:shadow-lg transition-shadow" 
            >
             
              <div className="flex-shrink-0 w-[140px] h-[140px] flex items-center justify-center">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={140} 
                  height={140} 
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>

              <div className="flex flex-col items-center justify-center text-center space-y-1"> 
                <span className="text-md font-medium text-gray-800">{category.name}</span>
                {category.price && (
                  <span className="text-sm  text-black font-bold">{category.price}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
