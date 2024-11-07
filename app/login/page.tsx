'use client';

import Navbar from "../components/Navbar";
import React, { useState } from "react";
import Image from "next/image";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",  // Changed from 'username' to 'email'
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",  // Changed from 'username' to 'email'
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    let isValid = true;

    // Validate Email
    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      // Validate email format
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    // Validate Password
    if (!formData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login data submitted", formData);
      // Handle login logic here (API call, validation, etc.)
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg h-[29rem]">
          {/* Left Section: Message */}
          <div className="flex flex-col justify-between p-8 bg-colors-blue text-white">
            <h2 className="text-2xl font-semibold mb-4">Welcome Back!</h2>
            <p className="mb-24 text-gray-200">
              Log in to your account to continue.
            </p>
            <Image src="/Screenshot-2024-11-06 154450.png" alt="" width={300} height={300} />
          </div>

          {/* Right Section: Form Fields */}
          <div className="flex-1 p-8">
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"  // Ensuring it's an email input field
                  name="email"  // Changed from 'username' to 'email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-orange-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Log In
                </button>
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="mt-4 text-center">
              <a href="/signup" className="text-blue-600 hover:underline">
                New User? Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Login;