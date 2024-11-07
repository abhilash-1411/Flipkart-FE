'use client';
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Show dropdown when hovering over the login button
  const handleMouseEnter = () => setIsDropdownOpen(true);

  // Close dropdown when mouse leaves the button or the dropdown itself
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <div className="_2NhoPJ w-full">
      <header
        className="bg-white"
        style={{
          "--sm-max-width": "480px",
          "--md-max-width": "996px",
          "--lg-max-width": "1600px",
        } as React.CSSProperties}
      >
        <div className="flex items-center justify-between px-4 py-2">
          {/* Left Section (Logo) */}
          <div className="w-[15%]">
            <a
              className="YLCOuy hover:bg-blue-600 px-3 py-2 rounded-md hover:text-white"
              href="#"
              aria-label="Flipkart"
              title="Flipkart"
            >
              <picture>
                <source
                  srcSet="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                  media="(min-width: 767px)"
                />
                <source
                  srcSet="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg"
                  media="(max-width: 766px)"
                />
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                  alt="Flipkart"
                  width="160"
                  height="40"
                  title="Flipkart"
                />
              </picture>
            </a>
          </div>

          {/* Middle Section (Search Bar) */}
          <div className="w-[50%]">
            <form
              className="header-form-search flex items-center bg-gray-100 rounded-lg"
              action="/search"
              method="GET"
            >
              <button
                className="p-2 bg-gray-300 rounded-l-md hover:bg-blue-600"
                type="submit"
                aria-label="Search for Products, Brands and More"
                title="Search for Products, Brands and More"
              >
                Search
              </button>
              <div className="_2SmNnR flex-grow">
                <input
                  className="Pke_EE w-full p-2 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                  type="text"
                  title="Search for Products, Brands and More"
                  name="q"
                  autoComplete="off"
                  placeholder="Search for Products, Brands and More"
                />
              </div>
            </form>
          </div>

          {/* Right Section (User, Cart, Seller) */}
          <div className="flex space-x-4 justify-end w-[38%]">
            {/* Login Button with Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:bg-blue-600 px-3 py-2 rounded-md flex items-center gap-2 text-[19px] group">
                <span className="text-gray-600 group-hover:text-white">Login</span>
                <span className="flex flex-col">
                  <div className="transition-transform transform group-hover:rotate-180 duration-300 ease-in group-hover:text-white pt-2">
                    ^
                  </div>
                </span>
                {isDropdownOpen && (
                  <div className="absolute top-12 right-0 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10 group-hover:bg-white-600">
                    <div className="">
                      <a
                        href="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100"
                      >
                        Login
                      </a>
                      <a
                        href="/signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                )}
              </button>
            </div>

            {/* Cart Button */}
            <button className="hover:bg-blue-600 px-3 py-2 rounded-md flex items-center gap-2 text-[19px] group">
              <span className="text-gray-600 group-hover:text-white">Cart</span>
            </button>

            {/* Become a Seller */}
            <button className="px-3 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 text-[19px] group">
              <span className="text-gray-600 group-hover:text-white whitespace-nowrap">
                Become a Seller
              </span>
            </button>

            {/* Three Dots Button */}
            <button className="hover:shadow-md p-2 rounded-lg flex items-center justify-center">
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
