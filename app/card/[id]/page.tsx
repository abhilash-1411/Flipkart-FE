"use client";

import { useParams, useRouter } from "next/navigation"; // Correct hook for dynamic route parameters in 'app' directory
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/lib/features/cartSlice";
import { toast } from "react-toastify"; // Import Toastify for notifications
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";

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

  // Cards data with detailed information (Can be fetched from an API or local storage)
  const cards: CardData[] = [
    {
      id: 1,

      image:
        "https://rukminim2.flixcart.com/fk-p-flap/1570/260/image/4d1606268e015845.jpg?q=80",

      title: "Product 1",

      price: "₹999",

      offers: "10% off on first purchase",

      brand: "Example Brand",

      rating: 4.2,

      description:
        "This is a description of Product 1. It is a great product with excellent features.",

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

    {
      id: 2,

      image:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8acfb721c7bef89a.jpg?q=20",

      title: "Product 2",

      price: "₹1499",

      offers: "Buy 1 Get 1 free",

      brand: "Brand X",

      rating: 3.9,

      description: "Product 2 is a high-quality product with special offers.",

      specs: {
        weight: "1.2 kg",

        dimensions: "12 x 8 x 4 cm",

        color: "Red",

        warranty: "1 Year",

        deliveryTime: "5-7 days",

        returnPolicy: "15 days return policy",
      },

      reviews: [
        { user: "User 3", review: "Good quality.", rating: 4 },

        { user: "User 4", review: "Value for money.", rating: 4 },
      ],
    },

    {
      id: 3,

      image:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f991d1be51d2f0c2.jpg?q=20",

      title: "Product 3",

      price: "₹1999",

      offers: "Flat 15% off on orders above ₹1500",

      brand: "Brand Y",

      rating: 4.5,

      description:
        "Product 3 offers excellent value and performance, perfect for your daily needs.",

      specs: {
        weight: "1.0 kg",

        dimensions: "18 x 12 x 7 cm",

        color: "Blue",

        warranty: "1 Year",

        deliveryTime: "2-4 days",

        returnPolicy: "10 days return policy",
      },

      reviews: [
        { user: "User 5", review: "Amazing product!", rating: 5 },

        { user: "User 6", review: "Satisfactory performance.", rating: 4 },
      ],
    },

    {
      id: 4,

      image:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2e6d5e4191298924.jpg?q=20",

      title: "Product 4",

      price: "₹2499",

      offers: "Buy 2 Get 1 Free",

      brand: "Brand Z",

      rating: 3.8,

      description:
        "Product 4 is a premium quality product with outstanding performance features.",

      specs: {
        weight: "1.3 kg",

        dimensions: "20 x 10 x 6 cm",

        color: "Black",

        warranty: "3 Years",

        deliveryTime: "3-5 days",

        returnPolicy: "30 days return policy",
      },

      reviews: [
        { user: "User 7", review: "Excellent build quality.", rating: 5 },

        { user: "User 8", review: "Could be better.", rating: 3 },
      ],
    },

    {
      id: 5,

      image:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d51dbf60f2f8d4d.jpg?q=20",

      title: "Product 5",

      price: "₹2999",

      offers: "Free shipping on orders over ₹2000",

      brand: "Premium Brand",

      rating: 4.0,

      description:
        "Product 5 offers excellent value for money, with top-notch quality and design.",

      specs: {
        weight: "1.7 kg",

        dimensions: "16 x 14 x 8 cm",

        color: "Silver",

        warranty: "2 Years",

        deliveryTime: "4-6 days",

        returnPolicy: "15 days return policy",
      },

      reviews: [
        { user: "User 9", review: "Value for money!", rating: 4 },

        {
          user: "User 10",
          review: "Good, but could use some improvement.",
          rating: 3,
        },
      ],
    },

    {
      id: 6,

      image:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2e6d5e4191298924.jpg?q=20",

      title: "Product 6",

      price: "₹3499",

      offers: "20% off on the second product",

      brand: "Techno World",

      rating: 4.7,

      description:
        "Product 6 offers the latest features in technology, ensuring top-tier performance.",

      specs: {
        weight: "1.9 kg",

        dimensions: "18 x 15 x 8 cm",

        color: "Grey",

        warranty: "3 Years",

        deliveryTime: "3-7 days",

        returnPolicy: "30 days return policy",
      },

      reviews: [
        { user: "User 11", review: "Best in class!", rating: 5 },

        { user: "User 12", review: "Fantastic product.", rating: 5 },
      ],
    },
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
      // setTimeout((zx) => {
      //   router.push('/cart'); // Navigate to the cart page after a short delay
      // }, 2000);
    } else {
      toast.error("User is not logged in.");
      setTimeout(() => {
        router.push("/login"); // Redirect to login if not authenticated
      }, 2000);
    }
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        {/* Left Side: Product Image */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mb-4 md:mb-0">
          <img
            src={card.image}
            alt={card.title}
            className="w-full max-w-md h-80 object-cover rounded-lg shadow-lg"
          />

          <div className="mt-4 w-full md:w-1/2 flex gap-2 md:flex-row md:items-center">
            {/* Add to Cart Button with SVG Image */}
            <button
              onClick={handleAddToCart}
              className="w-full md:w-40 bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition mb-2 md:mb-0 flex items-center justify-center space-x-2"
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
            <Link href='/cart'>
            <button className=" w-full md:w-40 bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition mb-2 md:mb-0 flex items-center justify-center space-x-2">
              <span>CheckOut Cart</span>
            </button>
            </Link>
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
              {"★".repeat(Math.floor(card.rating))} {card.rating.toFixed(1)} / 5
            </span>
          </div>

          {/* Product Description */}
          <p className="mt-4 text-sm text-gray-700">{card.description}</p>

          {/* Product Specifications */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Specifications</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
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
