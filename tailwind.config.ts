import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f5f1e9",
        ink: "#0d1b2a",
        ember: "#cb4b16",
        sea: "#005f73",
        sand: "#e9d8a6"
      }
    }
  },
  plugins: []
};

export default config;
