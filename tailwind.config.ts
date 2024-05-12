import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    boxShadow: {
      "sm-b": "0 2px 6px -2px rgba(0, 0, 0, 0.1)",
      b: "0 4px 4px -2px rgba(0, 0, 0, 0.1)",
      "md-b": "0 6px 10px -2px rgba(0, 0, 0, 0.1)",
      "lg-b": "0 10px 14px -2px rgba(0, 0, 0, 0.2)",
      "xl-b":
        "0 20px 24px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl-b": "0 24px 50px -12px rgba(0, 0, 0, 0.25)",
      "inner-b": "inset 0 -2px 4px 0 rgba(0, 0, 0, 0.06)",
    },
  },
  plugins: [],
};
export default config;
