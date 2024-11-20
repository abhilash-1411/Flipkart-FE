
'use client';
import React from 'react'
import { useSelector, UseSelector } from 'react-redux';
import Cart from '../components/Cart';

const DeliverySummaryCard = () => {
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
    const cartItems = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items);
    console.log("cartItems", cartItems);
    return (
        <div>
            <div className=" p-5">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-bold shadow-md flex items-center space-x-4 mb-4">
                    <div className="bg-white text-blue-500 w-8 h-8 flex items-center justify-center font-bold rounded">
                        2
                    </div>
                    <span>ORDER SUMMARY</span>
                </div>


                <div className="p-5">
                    <Cart />



                </div>



            </div>

        </div>

    )
}

export default DeliverySummaryCard