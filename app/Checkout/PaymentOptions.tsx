"use client";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const PaymentOptions = () => {
  const { isAuthenticated, formSubmissionStatus } = useAuth();
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWalletImages, setCurrentWalletImages]= useState(0);



  const upiImages = [
    "/PhonePe.png",
    "/paytm.jpg",
    "/google-pay.jpg",
    "./bhimupi.jpg"
  ];
  const walletImages = [
    "/PhonePe.png",
    "/paytm.jpg",

  ]

  // Update the image index every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % upiImages.length);
    }, 1500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [upiImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWalletImages((prevIndex) => (prevIndex + 1) % walletImages.length);
    }, 1500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [walletImages.length]);


  const togglePaymentVisibility = () => {
    if (!formSubmissionStatus) toast.error("Unable to open");
    setIsPaymentVisible((prevState) => !prevState);
  };

  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method);

  };
  const handleProceedToPayment = () => {
    if (selectedPaymentMethod) {
      console.log(`Proceeding with ${selectedPaymentMethod}`);
      // Simulate API call to redirect to payment gateway
      window.location.href = "/payment/confirmation"; // Placeholder URL for payment confirmation page
    }
  };

  return (
    <div className="p-5">
      {/* Card Header */}
      <div className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-bold shadow-md flex items-center justify-between mb-4">
        <div className="bg-white text-blue-500 w-8 h-8 flex items-center justify-center font-bold rounded">
          3
        </div>
        <span className="mx-3">Payment Options</span>

        <button
          onClick={togglePaymentVisibility}
          className="text-white text-xl flex items-center ml-auto"
        >
          {isPaymentVisible ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Payment Options */}
      {formSubmissionStatus && isPaymentVisible && (
        <div className="p-5 space-y-6">
          {/* Payment Method Choices */}
          <div className="space-y-4">
            {/* 1. UPI */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="upi"
                  name="payment-method"
                  value="UPI"
                  checked={selectedPaymentMethod === "UPI"}
                  onChange={() => handlePaymentMethodChange("UPI")}
                  className="mr-3"
                />
                <div className="relative h-8 overflow-hidden mr-4">
                  {/* Sliding Images */}
                  <img
                   src={upiImages[currentImageIndex]}
                   alt="UPI Option"
                   className="w-9 h-8 rounded-full object-cover animate-slide"
                  />
                </div>
                <label htmlFor="upi" className="cursor-pointer">
                  UPI
                </label>
              </div>
              <div className="text-sm text-gray-500  pl-[79px]">Pay by a UPI app</div>
            </div>


            {/* 3. Wallet */}
            <div className="flex items-center">
              <input
                type="radio"
                id="wallet"
                name="payment-method"
                value="Wallet"
                checked={selectedPaymentMethod === "Wallet"}
                onChange={() => handlePaymentMethodChange("Wallet")}
                className="mr-3"
              />
               <div className="relative h-8 overflow-hidden mr-4">
                  {/* Sliding Images */}
                  <img
                   src={walletImages[currentWalletImages]}
                   alt="UPI Option"
                   className="w-9 h-8 rounded-full object-cover animate-slide"
                  />
                </div>
              <label htmlFor="wallet" className="cursor-pointer ">
                Wallet
              </label>
            </div>

            {/* 4. Credit / ATM / Debit Card */}
            <div className="flex items-center">
              <input
                type="radio"
                id="card"
                name="payment-method"
                value="Credit / ATM / Debit Card"
                checked={selectedPaymentMethod === "Credit / ATM / Debit Card"}
                onChange={() => handlePaymentMethodChange("Credit / ATM / Debit Card")}
                className="mr-3"
              />
              <label htmlFor="card" className="cursor-pointer">
                Credit / ATM / Debit Card
              </label>
            </div>
            <div className="text-sm text-gray-500 pl-6">Add a secure Card as per RBI Guidelines </div>

            {/* 5. Net Banking */}
            <div className="flex items-center">
              <input
                type="radio"
                id="net-banking"
                name="payment-method"
                value="Net Banking"
                checked={selectedPaymentMethod === "Net Banking"}
                onChange={() => handlePaymentMethodChange("Net Banking")}
                className="mr-3"
              />
              <label htmlFor="net-banking" className="cursor-pointer">
                Net Banking
              </label>

            </div>
            <div className="text-sm text-gray-500 pl-6">This instrument has a low success, use UPI or Cards for better experience </div>

            {/* 6. Cash on Delivery */}
            <div className="flex items-center">
              <input
                type="radio"
                id="cash-on-delivery"
                name="payment-method"
                value="Cash on Delivery"
                checked={selectedPaymentMethod === "Cash on Delivery"}
                onChange={() => handlePaymentMethodChange("Cash on Delivery")}
                className="mr-3"
              />
              <label htmlFor="cash-on-delivery" className="cursor-pointer">
                Cash on Delivery
              </label>
            </div>
          </div>

          {/* Continue Button */}
          <button
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            disabled={!selectedPaymentMethod}
            onClick={handleProceedToPayment}
          >
            Continue
          </button>
        </div>

      )}
    </div>
  );
};

export default PaymentOptions;
