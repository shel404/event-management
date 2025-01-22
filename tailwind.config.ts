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
        primary: "#E76B38",
        secondary: "#F2B425",
        "primary-hover": "#D55A27",
        "secondary-hover": "#E1A314",
      },
    },
  },
  plugins: [],
};

export default config;
