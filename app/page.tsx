'use client';
import React from 'react';
import BannerNavigation from "./BannerNavigation/page";
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import GridCard from './components/GridCard';
import { useTheme } from './context/ThemeContext';


const Page = () => {
  const { isDarkMode } = useTheme();  // Get dark mode state

  return (
    <div className={isDarkMode ? 'dark' : ''}> {/* Apply dark class globally */}
      <main>
        <BannerNavigation />
        <Carousel />
        <Cards />
        <GridCard />
      </main>
    </div>
  );
};

export default Page;
