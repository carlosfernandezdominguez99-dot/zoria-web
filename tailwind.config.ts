import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#07080A",
          900: "#0B0D10",
          800: "#1A1D23",
          700: "#242830",
          600: "#343A44",
          400: "#6B7280",
          200: "#E5E7EB",
          100: "#F3F4F5",
          50: "#FAFAFB",
        },
        zoria: {
          blue: "#16E0BD",
          blueDim: "#0FA98F",
          blueLight: "#6FF3DC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(22,224,189,0.08) 0%, rgba(22,224,189,0) 60%)",
      },
      boxShadow: {
        glow: "0 0 80px rgba(22,224,189,0.30)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.5)",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
