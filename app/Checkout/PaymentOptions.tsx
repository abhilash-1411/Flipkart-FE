'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const PaymentOptions = () => {
    const [isPaymentVisible, setIsPaymentVisible] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
    const [selectedBank, setSelectedBank] = useState<string | null>(null);
    const [creditCardDetails, setCreditCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    const [debitCardDetails, setDebitCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const togglePaymentVisibility = () => {
        setIsPaymentVisible(prevState => !prevState);
    };

    const handlePaymentMethodChange = (method: string) => {
        setSelectedPaymentMethod(method);
        // Reset bank selection and credit/debit card details on payment method change
        setSelectedBank(null);
        setCreditCardDetails({ cardNumber: '', expiryDate: '', cvv: '' });
        setDebitCardDetails({ cardNumber: '', expiryDate: '', cvv: '' });
    };

    const handleBankSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBank(event.target.value);
    };

    const handleCreditCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCreditCardDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDebitCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDebitCardDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleProceedToPayment = () => {
        // Simulating a redirect to a payment gateway or confirmation page
        if (selectedPaymentMethod) {
            console.log(`Proceeding with ${selectedPaymentMethod}`);
            // Simulate redirect (in reality, you'd handle this via an API or third-party service)
            window.location.href = '/payment/confirmation';  // Redirecting to a payment confirmation page
        }
    };

    return (
        <div className="p-5">
            {/* Card Header */}
            <div className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-bold shadow-md flex items-center justify-between mb-4">
                <div className="bg-white text-blue-500 w-8 h-8 flex items-center justify-center font-bold rounded">
                    3
                </div>
                <span className='mx-3'>Payment Options</span>

                <button 
                    onClick={togglePaymentVisibility} 
                    className="text-white text-xl flex items-center ml-auto">
                    {isPaymentVisible ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </div>

            {/* Payment Options */}
            {isPaymentVisible && (
                <div className="p-5 space-y-4">
                    {/* Payment Method Choices */}
                    <div className="space-y-2">
                        <div 
                            className={`p-3 rounded-md border cursor-pointer ${selectedPaymentMethod === 'Credit Card' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            onClick={() => handlePaymentMethodChange('Credit Card')}
                        >
                            Credit Card
                        </div>

                        <div 
                            className={`p-3 rounded-md border cursor-pointer ${selectedPaymentMethod === 'Debit Card' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            onClick={() => handlePaymentMethodChange('Debit Card')}
                        >
                            Debit Card
                        </div>

                        <div 
                            className={`p-3 rounded-md border cursor-pointer ${selectedPaymentMethod === 'Net Banking' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            onClick={() => handlePaymentMethodChange('Net Banking')}
                        >
                            Net Banking
                        </div>

                        <div 
                            className={`p-3 rounded-md border cursor-pointer ${selectedPaymentMethod === 'Cash on Delivery' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            onClick={() => handlePaymentMethodChange('Cash on Delivery')}
                        >
                            Cash on Delivery
                        </div>
                    </div>

                    {/* Additional Inputs Based on Payment Method */}
                    {selectedPaymentMethod === 'Credit Card' && (
                        <div>
                            <input 
                                type="text" 
                                name="cardNumber"
                                value={creditCardDetails.cardNumber}
                                onChange={handleCreditCardChange}
                                placeholder="Card Number" 
                                className="border p-2 rounded-md w-full mt-2"
                            />
                            <input 
                                type="text" 
                                name="expiryDate"
                                value={creditCardDetails.expiryDate}
                                onChange={handleCreditCardChange}
                                placeholder="Expiry Date (MM/YY)" 
                                className="border p-2 rounded-md w-full mt-2"
                            />
                            <input 
                                type="text" 
                                name="cvv"
                                value={creditCardDetails.cvv}
                                onChange={handleCreditCardChange}
                                placeholder="CVV" 
                                className="border p-2 rounded-md w-full mt-2"
                            />
                        </div>
                    )}

                    {selectedPaymentMethod === 'Debit Card' && (
                        <div>
                            <input 
                                type="text" 
                                name="cardNumber"
                                value={debitCardDetails.cardNumber}
                                onChange={handleDebitCardChange}
                                placeholder="Card Number" 
                                className="border p-2 rounded-md w-full mt-2"
                            />
                            <input 
                                type="text" 
                                name="expiryDate"
                                value={debitCardDetails.expiryDate}
                                onChange={handleDebitCardChange}
                                placeholder="Expiry Date (MM/YY)" 
                                className="border p-2 rounded-md w-full mt-2"
                            />
                            <input 
                                type="text" 
                                name="cvv"
                                value={debitCardDetails.cvv}
                                onChange={handleDebitCardChange}
                                placeholder="CVV" 
                                className="border p-2 rounded-md w-full mt-2"
                            />
                        </div>
                    )}

                    {selectedPaymentMethod === 'Net Banking' && (
                        <div>
                            <select
                                value={selectedBank || ""}
                                onChange={handleBankSelection}
                                className="border p-2 rounded-md w-full mt-2"
                            >
                                <option value="">Select Bank</option>
                                <option value="Bank A">Bank A</option>
                                <option value="Bank B">Bank B</option>
                                <option value="Bank C">Bank C</option>
                            </select>
                        </div>
                    )}

                    {/* Proceed to Pay Button */}
                    <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                        disabled={!selectedPaymentMethod || (selectedPaymentMethod === 'Net Banking' && !selectedBank) || 
                                  (selectedPaymentMethod === 'Credit Card' && (!creditCardDetails.cardNumber || !creditCardDetails.expiryDate || !creditCardDetails.cvv)) ||
                                  (selectedPaymentMethod === 'Debit Card' && (!debitCardDetails.cardNumber || !debitCardDetails.expiryDate || !debitCardDetails.cvv))}
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
