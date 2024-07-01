import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
        "7xl": "5rem", // 80px
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        borderExpand: {
          "0%": { borderWidth: "0px" },
          "100%": { borderWidth: "2px" },
        },
        borderExpandWidth: {
          "0%": { borderBottom: "1px solid transparent" },
          "100%": {
            borderBottom: "2px solid rgb(6 182 212 / var(--tw-text-opacity))",
          },
        },
      },
      animation: {
        borderExpand: "borderExpand 1s ease-in-out forwards",
        borderExpandWidth: "borderExpandWidth 0.8s ease-out forwards",
      },
    },
  },
  variants: {
    extend: {
      animation: ["responsive", "hover", "focus"],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          info: "#3d4451",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
