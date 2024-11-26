import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Flipkart Clone",
  description: "Prototype Clone Of Flipkart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />
          <StoreProvider>
            {children}
          </StoreProvider>
          <Footer />
        </AuthProvider>
        {/* Add ToastContainer here */}
        <ToastContainer 
          position="bottom-right" 
          autoClose={3000} 
          hideProgressBar={false} // Show progress bar
          newestOnTop={false} // Newest toast on top
          closeOnClick // Close on click
          rtl={false} // Right to left
          pauseOnFocusLoss // Pause on focus loss
          draggable // Allow dragging
          pauseOnHover // Pause on hover
        />
      </body>
    </html>
  );
}