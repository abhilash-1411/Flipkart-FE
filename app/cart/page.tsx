'use client';
import React from 'react';
import Cart from '../components/Cart';
import { useRouter } from 'next/navigation'; // For navigation
import { useAuth } from '../context/AuthContext';
const CartPage: React.FC = () => {
  const {isAuthenticated}=useAuth()
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/Checkout');
  };

  return (
    <div className="relative">
      <Cart />
      {/* Button container */}
      <div className="w-full flex justify-end p-4 relative bottom-4 right-4">
        
      {isAuthenticated && (
          <button
            className="bg-[#7f1d1d] p-2 font-semibold text-white rounded-md hover:bg-[#9f3f3f] w-40 mr-20"
            onClick={handleCheckout}
          >
            Checkout
          </button>
      )}
      </div>
    </div>
  );
};

export default CartPage;
