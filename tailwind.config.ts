import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "900px",
      lg: "1200px",
    },
    extend: {
      colors: {
        c1: "var(--color1)",
        c2: "var(--color2)",
        c3: "var(--color3)",
      },
    },
  },
  plugins: [],
};
export default config;
