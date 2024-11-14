// components/Sidebar.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext'; // Assuming you have an AuthContext

const SideBar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { isAuthenticated, logout } = useAuth(); // Access authentication status
  
  const handleLogout = async () => {
    // Logout logic here (e.g., calling API or clearing session)
    try {
      const response = await fetch("https://9d8p7tn1-3000.inc1.devtunnels.ms/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        logout();
        // Redirect user or close the sidebar, depending on your needs
        onClose(); // Close sidebar after logout
      } else {
        console.error("Logout failed: ", response.statusText);
      }
    } catch (error) {
      console.error("Network error during logout: ", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 z-20 flex justify-end md:hidden">
      <div className="w-64 h-full bg-white p-4">
        {/* Close Sidebar Button */}
        <button
          onClick={onClose}
          className="text-xl text-gray-700 mb-4"
        >
          Close Sidebar
        </button>

        {/* Sidebar Content */}
        <div>
          {/* Login / Logout Section */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="block text-gray-800 py-2"
            >
              Logout
            </button>
          ) : (
            <>
            <a
              href="/login" // or your custom login route
              className="block text-gray-800 py-2"
            >
              Login 
            </a>
            <a
              href="/signup" // or your custom login route
              className="block text-gray-800 py-2"
            >
              Sign up 
            </a>
            </>
          )}

          {/* Become a Seller */}
          <a
            href="/become-seller" // Replace with your seller registration route
            className="block text-gray-800 py-2"
          >
            Become a Seller
          </a>

          {/* Cart Button */}
          <a
            href="/cart" // Cart page or modal trigger
            className="block text-gray-800 py-2"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
