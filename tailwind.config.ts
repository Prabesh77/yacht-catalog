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
        primary: {
          DEFAULT: "#0a0e27",
          dark: "#050815",
        },
        secondary: {
          DEFAULT: "#1a1f3a",
          dark: "#141829",
        },
        gold: {
          DEFAULT: "#d4af37",
          dark: "#b8941f",
          light: "#e8d5a3",
        },
        cream: {
          DEFAULT: "#f5f1e8",
          dark: "#e8e0d1",
        },
      },
      fontFamily: {
        display: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

