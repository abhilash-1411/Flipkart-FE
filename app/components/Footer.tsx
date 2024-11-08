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

          {/* Group Companies Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">GROUP COMPANIES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.myntra.com/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Myntra
                </Link>
              </li>
              <li>
                <Link href="https://www.cleartrip.com/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Cleartrip
                </Link>
              </li>
              <li>
                <Link href="https://www.shopsy.in/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Shopsy
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pages/payments" className="text-gray-400 hover:text-white">
                  Payments
                </Link>
              </li>
              <li>
                <Link href="/pages/shipping" className="text-gray-400 hover:text-white">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG" className="text-gray-400 hover:text-white">
                  Cancellation & Returns
                </Link>
              </li>
              <li>
                <Link href="/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG" className="text-gray-400 hover:text-white">
                  FAQ
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
