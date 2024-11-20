'use client'
import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";

const DeliveryAddressCard = () => {
    return (
        <div className="p-5">
            {/* Card Header */}
            <div className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-bold shadow-md flex items-center space-x-4 mb-4">
                {/* Step Number */}
                <div className="bg-white text-blue-500 w-8 h-8 flex items-center justify-center font-bold rounded">
                    1
                </div>
                {/* Heading Text */}
                <span>Delivery Address</span>
            </div>

            {/* Form Section */}
            <div className="p-5">
                <form className="space-y-4">
                    {/* Button */}

                    {/* Input Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Pincode"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Locality"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Address Field */}
                    <textarea
                        placeholder="Address (Area and Street)"
                        rows={3}
                        className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* State Dropdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="City"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Landmark"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {/* <option value="" disabled selected>
                                Select State
                            </option>
                            <option value="andhra-pradesh">Andhra Pradesh</option>
                            <option value="arunachal-pradesh">Arunachal Pradesh</option> */}
                            Add other states as needed
                        </select>
                        <input
                            type="text"
                            placeholder="Alternate Phone Number"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeliveryAddressCard;
