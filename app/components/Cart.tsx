'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart, increaseQuantity, decreaseQuantity } from '@/lib/features/cartSlice';
import { toast } from 'react-toastify';

// Define the CartItem interface
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

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items); // Adjust the type as needed

  // Handle item removal
  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItem(itemId));
    toast.success('Item removed from cart!');
  };

  // Handle cart clearing
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success('Cart cleared!');
  };

  // Handle increasing item quantity
  const handleIncreaseQuantity = (itemId: number) => {
    dispatch(increaseQuantity(itemId));  // Dispatch the increase action
  };

  // Handle decreasing item quantity
  const handleDecreaseQuantity = (itemId: number) => {
    dispatch(decreaseQuantity(itemId));  // Dispatch the decrease action
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div>
          <ul className="space-y-6">
            {cartItems.map((item: CartItem) => (
              <li key={item.id} className="flex flex-col md:flex-row justify-between items-start border-b pb-4">
                <div className="flex items-center w-full md:w-3/4">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded shadow-md" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">Price: <span className="font-bold">{item.price}</span></p>
                    <p className="text-gray-600">Quantity:
                      <span className="font-bold">{item.quantity}</span>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => handleIncreaseQuantity(item.id)}
                          className="bg-gray-200 text-gray-700 py-1 px-3 rounded hover:bg-gray-300 transition mr-2"
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleDecreaseQuantity(item.id)}
                          className="bg-gray-200 text-gray-700 py-1 px-3 rounded hover:bg-gray-300 transition"
                        >
                          -
                        </button>
                      </div>
                    </p>
                    <p className="text-sm text-gray-500">{item.offers}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:w-1/4 flex justify-end">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition mr-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleClearCart}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Clear Cart
            </button>
            <div className="flex items-center">
              <span className="text-lg font-semibold">Total: </span>
              <span className="text-xl font-bold ml-2">
                {cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity, 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;