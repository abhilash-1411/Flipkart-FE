"use client";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import SideBar from "./SideBar";
import { useTheme } from "../context/ThemeContext"; // Importing the useTheme hook
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const { isAuthenticated, logout, username } = useAuth();
  const router = useRouter();

  // For theme toggle functionality
  const { isDarkMode, toggleDarkMode } = useTheme(); // Access dark mode state and toggle function

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "https://xh2vgz5c-3001.inc1.devtunnels.ms/auth/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        logout();
        router.push("/login");
      } else {
        console.error("Logout failed: ", response.statusText);
      }
    } catch (error) {
      console.error("Network error during logout: ", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`w-full ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <header
        className={`w-full ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2">
          {/* Left Section (Logo) */}
          <div className="w-1/4 sm:w-[15%]">
            <a
              className={`YLCOuy px-3 py-2 rounded-md hover:${
                isDarkMode ? "text-white" : "text-black"
              }`}
              href="/"
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

          {/* Sidebar Button for Small Screens */}
          <button
            className="md:hidden absolute right-10 px-4 py-2 bg-gray-700 text-white rounded-md"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>

          {/* Center Section (Search bar) */}
          <div className="w-1/2 md:w-[50%] hidden sm:block">
            <form
              className="header-form-search lg:flex items-center bg-gray-100 rounded-lg hidden"
              action="/search"
              method="GET"
            >
              <button
                className="p-2 bg-gray-300 rounded-l-md hover:bg-blue-600"
                type="submit"
                aria-label="Search for Products, Brands and More"
                title="Search for Products, Brands and More"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <title>Search Icon</title>
                  <path
                    d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M16 16L21 21"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div className="_2SmNnR flex-grow ">
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
          <div className="md:flex items-center space-x-4 justify-end w-1/4 sm:w-[38%] hidden">
            {/* Conditional Login/Logout Button */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isAuthenticated ? (
                <button className="hover:bg-blue-600 px-3 py-2 rounded-md flex items-center gap-2 text-[19px] group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 group-hover:text-white"
                  >
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z"
                      fill="currentColor"
                    />
                  </svg>
                  <span
                    className={`text-gray-600 group-hover:text-white ${
                      isDarkMode ? "text-white" : ""
                    }`}
                  >
                    {username?.split(" ")[0]}
                  </span>
                  {isDropdownOpen && (
                    <div className="absolute top-11 right-0 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10 group-hover:bg-white-600">
                      <a
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700  hover:bg-slate-100"
                      >
                        Profile
                      </a>
                      <a
                        href="/orders"
                        className="block px-4 py-2 text-sm text-gray-700  hover:bg-slate-100"
                      >
                        Orders
                      </a>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </button>
              ) : (
                <button className="hover:bg-blue-600 px-3 py-2 rounded-md flex items-center gap-2 text-[19px] group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 group-hover:text-white"
                  >
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z"
                      fill="currentColor"
                    />
                  </svg>
                  <span
                    className={`text-gray-600 group-hover:text-white ${
                      isDarkMode ? "text-white" : ""
                    }`}
                  >
                    Login
                  </span>
                  {isDropdownOpen && (
                    <div className="absolute top-11 right-0 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10 group-hover:bg-white-600">
                      <a
                        href="/login"
                        className="block px-4 py-2 text-sm text-gray-700  hover:bg-slate-100"
                      >
                        Login
                      </a>
                      <a
                        href="/signup"
                        className="block px-4 py-2 text-sm text-gray-700  hover:bg-slate-100"
                      >
                        Sign Up
                      </a>
                    </div>
                  )}
                </button>
              )}
            </div>

            {/* Cart Button */}
            <button className="hover:bg-blue-600 px-3 py-2 rounded-md flex items-center gap-2 text-[19px] group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 group-hover:text-white"
              >
                <path
                  d="M7 4h14l-1.5 9H8.5L7 4zM5 4H3v2h2l1 2h14v2H7l-1-2H5V4zm0 12h14v2H5v-2z"
                  fill="currentColor"
                />
              </svg>
              <a
                className={`text-gray-600 group-hover:text-white ${
                  isDarkMode ? "text-white" : ""
                }`}
                href="/cart"
              >
                Cart
              </a>
            </button>

            {/* Become a Seller */}
            <button className="px-3 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 text-[19px] group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 group-hover:text-white"
              >
                <path
                  d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"
                  fill="currentColor"
                />
              </svg>
              <span
                className={`text-gray-600 group-hover:text-white ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                Become a Seller
              </span>
            </button>
          </div>
          {/* <svg
            onClick={toggleDarkMode}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 cursor-pointer hover:bg-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <path
                d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"
                fill="currentColor"
              />
            ) : (
              <path
                d="M12 20a8 8 0 1 0-8-8 8 8 0 0 0 8 8z"
                fill="currentColor"
              />
            )}
          </svg> */}

          <Image
            src={isDarkMode ? "/images/lightmode2.png" : "/images/darkmode.png"}
            alt={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            width={24}
            height={24}
            onClick={toggleDarkMode}
            className="cursor-pointer"
          />
        </div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && <SideBar onClose={toggleSidebar} />}
    </div>
  );
};

export default Navbar;
