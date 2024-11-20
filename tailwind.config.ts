import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colors: {
          'blue': '#2874f0',  
          'dark-bg': '#1a202c',  // You can customize dark background color
        'light-bg': '#ffffff',
        
        },
      },
    },
  },
  plugins: [],
};
export default config;
