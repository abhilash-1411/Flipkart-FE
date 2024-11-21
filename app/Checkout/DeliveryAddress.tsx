'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";  // Import down and up chevrons

// Define the shape of the form data
interface FormData {
    name: string;
    phone: string;
    pincode: string;
    locality: string;
    address: string;
    city: string;
    landmark: string;
    state: string;
    alternatePhone: string;
}

// Define the shape of the error messages
interface Errors {
    name: string;
    phone: string;
    pincode: string;
    locality: string;
    address: string;
    city: string;
    state: string;
}

const DeliveryAddressCard: React.FC = () => {
    const [isFormVisible, setIsFormVisible] = useState<boolean>(true);  // State for form visibility

    // Form field states
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        pincode: '',
        locality: '',
        address: '',
        city: '',
        landmark: '',
        state: '',
        alternatePhone: '',
    });

    // Form validation states
    const [errors, setErrors] = useState<Errors>({
        name: '',
        phone: '',
        pincode: '',
        locality: '',
        address: '',
        city: '',
        state: '',
    });

    // Function to toggle form visibility
    const toggleFormVisibility = () => {
        setIsFormVisible(prevState => !prevState);
    };

    // Handle input change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Form validation
    const validateForm = (): boolean => {
        const newErrors: Errors = {
            name: '',
            phone: '',
            pincode: '',
            locality: '',
            address: '',
            city: '',
            state: ''
        };

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.pincode) newErrors.pincode = 'Pincode is required';
        if (!formData.locality) newErrors.locality = 'Locality is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';

        setErrors(newErrors);
        return Object.keys(newErrors).every(key => !newErrors[key as keyof Errors]);
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="p-5">
            {/* Card Header */}
            <div className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-bold shadow-md flex items-center justify-between mb-4">
                {/* Step Number */}
                <div className="bg-white text-blue-500 w-8 h-8 flex items-center justify-center font-bold rounded">
                    1
                </div>
                {/* Heading Text */}
                <span className='mx-3'>Delivery Address</span>

                {/* Button to toggle the form visibility */}
                <button 
                    onClick={toggleFormVisibility} 
                    className="text-white text-xl flex items-center ml-auto">
                    {isFormVisible ? <FaChevronUp /> : <FaChevronDown />} {/* Switch icon based on visibility */}
                </button>
            </div>

            {/* Form Section */}
            {isFormVisible && (  // Conditional rendering of the form
                <div className="p-5">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Input Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number"
                                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                    placeholder="Pincode"
                                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="locality"
                                    value={formData.locality}
                                    onChange={handleInputChange}
                                    placeholder="Locality"
                                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.locality && <p className="text-red-500 text-sm">{errors.locality}</p>}
                            </div>
                        </div>

                        {/* Address Field */}
                        <div>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Address (Area and Street)"
                                rows={3}
                                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                        </div>

                        {/* State Dropdown */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder="City"
                                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="landmark"
                                    value={formData.landmark}
                                    onChange={handleInputChange}
                                    placeholder="Landmark"
                                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <select
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Karnataka">Karnataka</option>
                                </select>
                                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="alternatePhone"
                                    value={formData.alternatePhone}
                                    onChange={handleInputChange}
                                    placeholder="Alternate Phone Number"
                                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default DeliveryAddressCard;
