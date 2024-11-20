'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { setupInactivityTimer } from './inactivityHandler/inactivity';

// Define the AuthContextType interface
interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  username: string | null;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);  // To prevent accessing localStorage during SSR

  // This effect ensures we check for the JWT token in localStorage only on the client side
  useEffect(() => {
    setIsMounted(true); // Mark as mounted once the component has mounted

    // Check if there's a JWT token in localStorage
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      const decodedToken: any = jwtDecode(storedToken);
      setIsAuthenticated(true);
      setToken(storedToken);
      setUsername(decodedToken.username); // Extract username from JWT payload
    }

    // Set up inactivity timer
    setupInactivityTimer(logout);
  }, []);  // Empty dependency array ensures this runs only on initial mount

  const login = (token: string) => {
    localStorage.setItem('jwtToken', token);  // Store token in localStorage
    setIsAuthenticated(true);
    setToken(token);
    const decodedToken: any = jwtDecode(token);
    setUsername(decodedToken.username); // Decode and extract the username
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');  // Clear token from localStorage
    setIsAuthenticated(false);
    setUsername(null);
    setToken(null);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Render only after the component has mounted to avoid SSR issues
  if (!isMounted) return null;

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isSidebarOpen, toggleSidebar, username, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
