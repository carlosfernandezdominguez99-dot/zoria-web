import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zoria: {
          turquoise: "#0FCFC0",
          turquoiseDark: "#0AA69A",
          ink: "#0A0D12",
          charcoal: "#12161C",
          mist: "#F4FBFA",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 60px rgba(15, 207, 192, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
