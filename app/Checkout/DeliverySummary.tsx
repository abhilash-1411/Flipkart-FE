'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Cart from '../components/Cart';

const DeliverySummaryCard = () => {
    // Define the interface for CartItem
    interface CartItem {
        id: number;
        image: string;
        title: string;
        price: string;
        offers: string;
        brand: string;
        rating: number;
        quantity: number;
    }

    // Retrieve cart items from the redux store
    const cartItems = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items);

    // State for managing the visibility of the Cart component
    const [isCartVisible, setIsCartVisible] = useState(true);

    // Function to toggle the visibility of the cart
    const toggleCartVisibility = () => {
        setIsCartVisible(prevState => !prevState);
    };

    return (
        <div className="p-5">
            {/* Card Header */}
            <div className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-bold shadow-md flex items-center justify-between mb-4">
                {/* Step Number */}
                <div className="bg-white text-blue-500 w-8 h-8 flex items-center justify-center font-bold rounded">
                    2
                </div>
                {/* Heading Text */}
                <span className='mx-3'>ORDER SUMMARY</span>

                {/* Button to toggle the cart visibility */}
                <button 
                    onClick={toggleCartVisibility} 
                    className="text-white text-xl flex items-center ml-auto">
                    {isCartVisible ? <FaChevronUp /> : <FaChevronDown />} {/* Switch icon based on visibility */}
                </button>
            </div>

            {/* Conditional rendering of Cart */}
            {isCartVisible && (
                <div className="p-5">
                    {/* Cart component */}
                    <Cart />
                </div>
            )}
        </div>
    );
}

export default DeliverySummaryCard;
