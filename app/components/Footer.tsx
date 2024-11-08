// components/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/helpcentre?otracker=footer_navlinks" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="https://corporate.flipkart.net/corporate-home" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="https://www.flipkartcareers.com/?otracker=footer_navlinks" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="http://stories.flipkart.com/?otracker=footer_navlinks" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Flipkart Stories
                </Link>
              </li>
              <li>
                <Link href="http://stories.flipkart.com/category/top-stories/news/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/corporate-information" className="text-gray-400 hover:text-white">
                  Corporate Information
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
