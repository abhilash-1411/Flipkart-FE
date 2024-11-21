'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const TotalDetails = () => {
    interface CartItem {
        id: number;
        image: string;
        title: string;
        price: string; // ₹ prefixed, needs parsing
        offers: string; // Example: "10% off on first purchase"
        brand: string;
        rating: number;
        quantity: number;
    }

    // Fetch cart items dynamically from Redux
    const cartItems = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items);

    // Utility function to parse price and return as a number
    const parsePrice = (price: string): number => parseFloat(price.replace(/[₹,]/g, ''));

    // Calculations for dynamic totals
    const price = cartItems.reduce((sum: number, item: CartItem) => sum + parsePrice(item.price) * item.quantity, 0);
    const discount = cartItems.reduce((sum: number, item: CartItem) => {
        const offer = item.offers.match(/\d+/); // Extract discount percentage
        return sum + (offer ? (parsePrice(item.price) * item.quantity * parseInt(offer[0], 10)) / 100 : 0);
    }, 0);
    const platformFee = 3; // Fixed value
    const deliveryCharges = 0; // Assume Free for now
    const totalAmount = price - discount + platformFee + deliveryCharges;
    const savings = discount;

    return (
        <div className="p-4 rounded-lg shadow-lg border border-gray-200 bg-white">
            {totalAmount === 3 ? (
                // Show the cart image when the total amount is ₹3
                <div className="flex justify-center items-center">
                    <Image
                        src="/empty-cart.png" // Ensure this image exists in the `public` folder
                        alt="Cart Illustration"
                        width={200}
                        height={200}
                        className="w-full max-w-xs mx-auto sm:max-w-none sm:w-2/3"
                    />
                </div>
            ) : (
                // Regular price details
                <>
                    <div className="text-lg font-bold text-gray-800 mb-4">Price Details</div>

                    <div className="mb-2 flex justify-between">
                        <span>Price ({cartItems.length} items)</span>
                        <span>₹{price.toFixed(2)}</span>
                    </div>

                    <div className="mb-2 flex justify-between">
                        <span>Discount</span>
                        <span>- ₹{discount.toFixed(2)}</span>
                    </div>

                    <div className="mb-2 flex justify-between">
                        <span>Platform Fee</span>
                        <span>₹{platformFee.toFixed(2)}</span>
                    </div>

                    <div className="mb-2 flex justify-between">
                        <span>Delivery Charges</span>
                        <span>{deliveryCharges === 0 ? 'Free' : `₹${deliveryCharges}`}</span>
                    </div>

                    <div className="mb-4 flex justify-between font-semibold">
                        <span>Total Amount</span>
                        <span>₹{totalAmount.toFixed(2)}</span>
                    </div>

                    <div className="text-green-600 font-semibold">
                        <span>You will save ₹{savings.toFixed(2)} on this order</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default TotalDetails;
