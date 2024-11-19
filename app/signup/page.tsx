'use client';
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'; // Import the useRouter hook to redirect
import { toast } from "react-toastify";
const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
 
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
 
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle the submitting state
  const [errorMessage, setErrorMessage] = useState(""); // For API error messages
 
  const router = useRouter(); // For redirecting to login page after successful registration
 
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
 
    // Validate Name
    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
 
    // Validate Email
    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
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
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
 
    if (validateForm()) {
      setIsSubmitting(true);
      setErrorMessage(""); // Reset any previous error messages
 
      try {
        // Make the API request to register the user using fetch
        const response = await fetch("https://xh2vgz5c-3001.inc1.devtunnels.ms/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });
 
        // Check if the response is successful
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData?.message || "Something went wrong.");
        }
 
        // If registration is successful, redirect to login page
        toast.success("Registration successful! Redirecting to login...");
 
        setTimeout(() => {
          router.push("/login");  // Navigate to the login page
        }, 2000);
 
      } catch (error: any) {
        console.error("Fetch Error:", error); // Log the full error for debugging
        setErrorMessage(error.message || "An unexpected error occurred.");
      } finally {
        setIsSubmitting(false); // Stop the loading state
      }
    }
  };
 
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg">
          {/* Left Section: Message */}
          <div className="flex flex-col justify-around p-8 bg-blue-500 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Looks like you're new here!
            </h2>
            <p className="mb-24 text-gray-200">
              Sign up with your email number to get started.
            </p>
            <Image
              src="/Screenshot-2024-11-06 154450.png"
              alt=""
              width={300}
              height={300}
            />
          </div>
 
          {/* Right Section: Form Fields */}
          <div className="flex-1 p-8">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"  // Corrected to match the state name
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
 
              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Continue"}
                </button>
              </div>
 
              {/* Display error message */}
              {errorMessage && (
                <div className="mt-4 text-red-500 text-center">
                  <p>{errorMessage}</p>
                </div>
              )}
            </form>
 
            {/* Login Link */}
            <div className="mt-4 text-center">
              <a href="/login" className="text-blue-600 hover:underline">
                Existing User? Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Signup;