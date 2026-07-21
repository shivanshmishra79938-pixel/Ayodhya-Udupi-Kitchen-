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
        primary: "#C88A1A", // Luxury Gold
        secondary: "#0E4A3A", // Deep Green
        background: "#FFFDF8", // Premium Cream
        dark: "#1E1E1E",
        accent: "#F4F1EA",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #C88A1A, #E5B15D)',
      },
    },
  },
  plugins: [],
};
export default config;
