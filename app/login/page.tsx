// components/Login.tsx
'use client'

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';  // Import the styles
import { useTheme } from "../context/ThemeContext";
// Initialize toast container (for global toasts)

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string>("");
  const { login } = useAuth(); // Get login function from AuthContext
  const router = useRouter();  // For redirecting after login
  const { isDarkMode, toggleDarkMode } = useTheme();
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

    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

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
      setIsLoading(true);
      setLoginError("");

      try {
        const response = await fetch("https://xh2vgz5c-3001.inc1.devtunnels.ms/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Successful login
          console.log("Login successful:", data);
          login(data.token);  // Update context with token
          toast.success("Logged in successfully!");  // Show toast

          // Redirect to homepage after 2 seconds
          setTimeout(() => {
            router.push("/");  // Navigate to the home page
          }, 2000);
        }else if (response.status === 401) {
          setLoginError('Invalid email or password.');
        } 
        else {
          setLoginError(data.message || "Login failed. Please try again.");
        }
      } catch (error) {
        setLoginError("An error occurred. Please try again later.");
        console.error("Login API error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={`flex justify-center items-center min-h-screen  px-4 sm:px-8${
      isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
    }`}>
      <div className="flex flex-col sm:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg h-auto sm:h-[29rem]">
        {/* Left Section: Message */}
        <div className="flex flex-col justify-between p-8 bg-colors-blue text-white sm:w-1/2 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
          <h2 className="text-2xl font-semibold mb-4">Welcome Back!</h2>
          <p className="mb-8 sm:mb-24 text-gray-200">
            Log in to your account to continue.
          </p>
          <Image
            src="/Screenshot-2024-11-06 154450.png"
            alt="Login Illustration"
            width={300}
            height={300}
            className="w-full max-w-xs mx-auto sm:max-w-none sm:w-2/3"
          />
        </div>

        {/* Right Section: Form Fields */}
        <div className="flex-1 p-8 sm:p-12">
          <form onSubmit={handleSubmit}>
            {/* Error Message */}
            {loginError && (
              <div className="mb-4 p-2 text-sm text-red-600 border border-red-500 rounded bg-red-50">
                {loginError}
              </div>
            )}
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
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log In"}
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <a href="/signup" className="text-blue-600 hover:underline">
              New User? Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
