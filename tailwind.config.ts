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
          blue: "#2874f0",
        },
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "50%": { transform: "translateX(0%)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
      },
      animation: {
        slide: "slide 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
