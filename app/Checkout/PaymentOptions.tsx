"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const PaymentOptions = () => {
  const { isAuthenticated, formSubmissionStatus } = useAuth();
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);

  const togglePaymentVisibility = () => {
    if (!formSubmissionStatus) toast.error("Unable to open");
    setIsPaymentVisible((prevState) => !prevState);
  };

  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method);
    setSelectedBank(null); // Reset bank selection on method change
  };

  const handleBankSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBank(event.target.value);
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
        <div className="p-5 space-y-4">
          {/* Payment Method Choices */}
          <div className="space-y-2">
            <div
              className={`p-3 rounded-md border cursor-pointer ${
                selectedPaymentMethod === "Cash on Delivery"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => handlePaymentMethodChange("Cash on Delivery")}
            >
              Cash on Delivery
            </div>

            <div
              className={`p-3 rounded-md border cursor-pointer ${
                selectedPaymentMethod === "Net Banking"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => handlePaymentMethodChange("Net Banking")}
            >
              Net Banking
            </div>
          </div>

          {/* Additional Inputs Based on Payment Method */}
          {selectedPaymentMethod === "Net Banking" && isAuthenticated && (
            <div>
              <div className="space-y-2">
                <div className="text-xl font-semibold">Choose Payment Provider</div>
                {/* Simulating Net Banking Providers */}
                <button
                  onClick={() => console.log("Paytm selected")}
                  className="w-full p-3 bg-yellow-500 text-white rounded-md"
                >
                  Paytm
                </button>
                <button
                  onClick={() => console.log("PhonePe selected")}
                  className="w-full p-3 bg-blue-500 text-white rounded-md"
                >
                  PhonePe
                </button>
                <button
                  onClick={() => console.log("Google Pay selected")}
                  className="w-full p-3 bg-green-500 text-white rounded-md"
                >
                  Google Pay
                </button>
              </div>
            </div>
          )}

          {/* Proceed to Pay Button */}
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            disabled={!selectedPaymentMethod || (selectedPaymentMethod === "Net Banking" && !selectedBank)}
            onClick={handleProceedToPayment}
          >
            Proceed to Pay
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;
