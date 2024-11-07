'use client';
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Show dropdown on hover
  const handleMouseEnter = () => setIsDropdownOpen(true);
  
  // Close dropdown when mouse leaves
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <div className="_2NhoPJ w-full">
      <header className="bg-white">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Left Section (Logo) */}
          <div className="w-[15%]">
            <a href="#" className="YLCOuy hover:bg-blue-600 px-3 py-2 rounded-md">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                alt="Flipkart"
                width="160"
                height="40"
              />
            </a>
          </div>

          {/* Middle Section (Search Bar) */}
          <div className="w-[50%]">
            <form className="flex items-center bg-gray-100 rounded-lg">
              <input
                className="w-full p-2 bg-transparent border-none focus:outline-none"
                type="text"
                placeholder="Search for Products, Brands and More"
              />
            </form>
          </div>

          {/* Right Section (User and Cart Buttons) */}
          <div className="flex space-x-4 justify-end w-[38%]">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:bg-blue-600 px-3 py-2 rounded-md flex items-center gap-2 text-[19px]">
                Login
              </button>

              {isDropdownOpen && (
                <div className="absolute top-10 right-0 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100">
                    Login
                  </a>
                  <a href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100">
                    Sign Up
                  </a>
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button className="hover:bg-blue-600 px-3 py-2 rounded-md text-[19px]">Cart</button>
            <button className="hover:bg-blue-600 px-3 py-2 rounded-md text-[19px]">Become a Seller</button>
            <button className="hover:bg-blue-600 p-2 rounded-md">
              <div className="ml-2 flex flex-col items-center gap-1">
                <span className="block w-1 h-1 bg-gray-500"></span>
                <span className="block w-1 h-1 bg-gray-500"></span>
                <span className="block w-1 h-1 bg-gray-500"></span>
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
