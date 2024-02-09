/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
// import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "hsl(345 6% 30%)",
          50: "hsl(345 6% 98%)",
          100: "hsl(345 6% 95%)",
          200: "hsl(345 6% 82.5%)",
          300: "hsl(345 6% 70%)",
          400: "hsl(345 6% 60%)",
          500: "hsl(345, 6%, 13%)",
          600: "hsl(345 6% 40%)",
          700: "hsl(345 6% 30%)", // primary main
          800: "hsl(345 6% 17.5%)",
          900: "hsl(345 6% 7.5%)",
        },
        accent: {
          DEFAULT: "hsl(41, 100%, 50%)",
          50: "hsl(41 100% 97%)",
          100: "hsl(41 100% 95%)",
          200: "hsl(41, 100%, 83%)",
          300: "hsl(41 100% 70%)",
          400: "hsl(40, 100%, 60%)",
          500: "hsl(41, 100%, 50%)", // accent main
          600: "hsl(41 100% 49%)",
          700: "hsl(41, 100%, 60%)",
          800: "hsl(41 100% 17.5%)",
          900: "hsl(41 100% 7.5%)",
        },
        secondary: {
          DEFAULT: "#FFB000",
          light: "#ffe3a6",
        },
        body: "#696969",
        heading: "#333333",
        success: {
          DEFAULT: "#4CAF50",
          100: "#7ed321",
        },
        warning: {
          DEFAULT: "#FFC107",
          100: "#fdb494",
        },
        danger: {
          DEFAULT: "#F44336",
          100: "#d85554",
        },
        info: {
          DEFAULT: "#17A2B8",
        },
        light: {
          DEFAULT: "#F8F9FA",
          50: "#f8f9fd",
          100: "#f8f8f8",
        },
        dark: {
          DEFAULT: "#333333",
          50: "#111111",
          100: "#171621",
        },
        white: {
          DEFAULT: "#FFFFFF",
          inverse: "#f6f2ed",
          catskill: "#f5f7fa",
        },
        orange: {
          DEFAULT: "#ef6f31",
          light: "rgba(239,111,49,0.1)",
          100: "#ff4c24",
          200: "#ff4d24",
          300: "#fa7d61",
        },
        yellow: {
          DEFAULT: "#f6b500",
          100: "#ffbb00",
        },
        blue: {
          100: "#7288e8",
        },
        spring: "#F5F1ED",
        desert: {
          DEFAULT: "#ecc5ab",
          100: "#e6dcd2",
        },
        pearl: "#EAE1D6",
        putty: "#e5c791",
        brunt: "#ee7455",
        jagged: "#BCE6DF",
        azure: "#00adff",
        alto: "#dedede",
        teracotta: {
          DEFAULT: "#dd7d5a",
          light: "#f4ebe7",
        },
        scooter: {
          DEFAULT: "#2dbbc4",
          light: "#e3f1f2",
        },
        ebb: "#e9e6e3",
        pampas: "#ece8e4",
        gore: "#1f1f52",
        porsche: "#ebb860",
        mandy: "#df5b6c",
        tan: "#d2a98e",
        mishcka: "#e2e2e8",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        maxSm: { max: "575px" },
        // => @media (max-width: 575px) { ... }
        maxXl: { max: "1199px" },
        // => @media (max-width: 1199px) { ... }
        maxLg: { max: "991px" },
        // => @media (max-width: 991px) { ... }
        smToMd: { min: "576px", max: "767px" },
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xl: "1200px",
        // => @media (min-width: 1200px) { ... }

        "2xl": "1400px",
        // => @media (min-width: 1400px) { ... }

        "3xl": "1600px",
        // => @media (min-width: 1600px) { ... }
      },
      flex: {
        auto0: "1 0 auto",
        100: "1 0 100%",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        1500: "1500ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
