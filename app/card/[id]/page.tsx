"use client";

import { useParams, useRouter } from "next/navigation"; // Correct hook for dynamic route parameters in 'app' directory
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/lib/features/cartSlice";
import { toast } from "react-toastify"; // Import Toastify for notifications
import { useAuth } from "@/app/context/AuthContext";
import { useTheme } from "@/app/context/ThemeContext"; // Assuming you have a ThemeContext for dark mode

interface CardData {
  id: number;
  image: string;
  title: string;
  price: string;
  offers: string;
  brand: string;
  rating: number; // Rating out of 5
  description: string;
  specs: {
    weight: string;
    dimensions: string;
    color: string;
    warranty: string;
    deliveryTime: string;
    returnPolicy: string;
  };
  reviews: {
    user: string;
    review: string;
    rating: number;
  }[];  
}

const CardDetails: React.FC = () => {
  const params = useParams(); // Use useParams to access the dynamic parameters
  const router = useRouter(); // Use useRouter for navigation
  const { id } = params; // Get the dynamic 'id' from the URL
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth(); // Get authentication status
  const { isDarkMode } = useTheme(); // Use dark mode from context

  // Cards data with detailed information (Can be fetched from an API or local storage)
  const cards: CardData[] = [
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/fk-p-flap/1570/260/image/4d1606268e015845.jpg?q=80",
      title: "Product 1",
      price: "₹999",
      offers: "10% off on first purchase",
      brand: "Example Brand",
      rating: 4.2,
      description: "This is a description of Product 1. It is a great product with excellent features.",
      specs: {
        weight: "1.5 kg",
        dimensions: "15 x 10 x 5 cm",
        color: "Black",
        warranty: "2 Years",
        deliveryTime: "3-5 days",
        returnPolicy: "30 days return policy",
      },
      reviews: [
        { user: "User 1", review: "Great product!", rating: 5 },
        { user: "User 2", review: "Worth the price.", rating: 4 },
      ],
    },
    // Add other products here...
  ];

  // State to handle loading until id is available
  const [loading, setLoading] = useState(true);

  // Use useEffect to set loading to false once the id is available
  useEffect(() => {
    if (id) {
      setLoading(false); // Set loading to false when the id is found
    }
  }, [id]);

  // If the id is not available or still loading, show a loading state
  if (loading || !id) {
    return <div>Loading...</div>;
  }

  // Find the card matching the dynamic 'id' from the URL
  const card = cards.find((card) => card.id === Number(id));

  if (!card) {
    return <div>Card not found</div>;
  }

  const handleAddToCart = () => {
    if (isAuthenticated) {
      const itemToAdd = { ...card, quantity: 1 }; // Create a new object with quantity
      dispatch(addItem(itemToAdd)); // Dispatch addItem action with updated card data
      toast.success(`${card.title} added to cart!`); // Notify user
      setTimeout(() => {
        router.push('/cart'); // Navigate to the cart page after a short delay
      }, 2000);
    } else {
      toast.error("User is not logged in.");
      setTimeout(() => {
        router.push('/login'); // Redirect to login if not authenticated
      }, 2000);
    }
  };

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} p-4 max-w-7xl mx-auto`}>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left Side: Product Image */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mb-4 md:mb-0">
          <img
            src={card.image}
            alt={card.title}
            className="w-full max-w-md h-80 object-cover rounded-lg shadow-lg"
          />

          <div className="mt-4 w-full md:w-1/2 flex justify-center md:flex-row md:items-center">
            {/* Add to Cart Button with SVG Image */}
            <button
              onClick={handleAddToCart}
              className={`w-full md:w-40 py-2 px-4 rounded-lg shadow transition mb-2 md:mb-0 flex items-center justify-center space-x-2 ${
                isDarkMode ? "bg-blue-600 hover:bg-blue-500" : "bg-black text-white hover:bg-blue-600"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6h15l-1.68 9.07a2 2 0 0 1-1.97 1.64H8.65a2 2 0 0 1-1.97-1.64L6 6z" />
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-2xl font-semibold">{card.title}</h1>
          <p className="text-lg font-bold text-gray-800 mt-2">{card.price}</p>
          <p className="text-sm text-gray-600 mt-2">{card.offers}</p>

          {/* Product Ratings */}
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">
              {"★".repeat(Math.floor(card.rating))}{" "}
              {card.rating.toFixed(1)} / 5
            </span>
          </div>

          {/* Product Description */}
          <p className="mt-4 text-sm text-gray-700">{card.description}</p>

          {/* Product Specifications */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Specifications</h3>
            <ul className={`list-disc pl-5 mt-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              <li>Brand: {card.brand}</li>
              <li>Weight: {card.specs.weight}</li>
              <li>Dimensions: {card.specs.dimensions}</li>
              <li>Color: {card.specs.color}</li>
              <li>Warranty: {card.specs.warranty}</li>
              <li>Delivery Time: {card.specs.deliveryTime}</li>
              <li>Return Policy: {card.specs.returnPolicy}</li>
            </ul>
          </div>

          {/* Customer Reviews */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Customer Reviews</h3>
            <div className="mt-2">
              {card.reviews.map((review, index) => (
                <div key={index} className="mb-4">
                  <p className="text-sm font-semibold">{review.user}</p>
                  <p className="text-sm text-gray-600">{review.review}</p>
                  <p className="text-sm text-yellow-500">
                    {"★".repeat(review.rating)} {review.rating} / 5
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
