import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Carone Labs Brand Colors
        carone: {
          orange: "rgb(244, 115, 33)",
          "orange-light": "rgb(255, 140, 65)",
          "orange-dark": "rgb(200, 90, 20)",
          green: "rgb(0, 80, 48)",
          "green-light": "rgb(0, 110, 65)",
          "green-dark": "rgb(0, 60, 35)",
          // Dark background from logo
          dark: "rgb(18, 42, 38)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
