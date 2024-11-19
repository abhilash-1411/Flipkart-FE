'use client';
 
import React, { createContext, useContext, useState, useEffect } from 'react';
import  { jwtDecode } from  'jwt-decode';
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
 
  useEffect(() => {
    setupInactivityTimer(logout);
  }, []);
 
  const login = (token: string) => {
    localStorage.setItem('jwtToken', token);
    setIsAuthenticated(true);
    setToken(token);
    const decodedToken: any = jwtDecode(token);
    setUsername(decodedToken.username); 
  };
 
  const logout = () => {
    localStorage.removeItem('jwtToken');
    setIsAuthenticated(false);
    setUsername(null);
    setToken(null); 
  };
 
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
 
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
 