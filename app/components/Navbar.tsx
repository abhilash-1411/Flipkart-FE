// app/components/Navbar.tsx
'use client';

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="w-full">
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

          <div className="w-[50%]">
            <form className="flex items-center bg-gray-100 rounded-lg">
              <input
                className="w-full p-2 bg-transparent border-none focus:outline-none"
                type="text"
                placeholder="Search for Products, Brands and More"
              />
            </form>
          </div>

          {/* Right Section (Buttons Placeholder) */}
          <div className="flex space-x-4 justify-end w-[38%]">
            <button className="hover:bg-blue-600 px-3 py-2 rounded-md">Login</button>
            <button className="hover:bg-blue-600 px-3 py-2 rounded-md">Cart</button>
            <button className="hover:bg-blue-600 px-3 py-2 rounded-md">Become a Seller</button>
            <button className="hover:bg-blue-600 p-2 rounded-md">...</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
