/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        text: "var(--text-color)",
        text2: "var(--text-color-2)",
        text3: "var(--text-color-3)",
        overlay: "var(--overlay-color)",
        card: "var(--card-color)",
        grid: "var(--grid-color)",
      },
      fontFamily: {
        display: ["Unbounded", "Marcellus", "serif"],
        body: ["Space Grotesk", "Raleway", "sans-serif"],
      },
      boxShadow: {
        brutal: "10px 10px 0 var(--secondary-color), -10px -10px 0 var(--text-color-3)",
        card: "0 25px 80px rgba(0,0,0,0.35)",
      },
      keyframes: {
        floaty: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(-1deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        slideUp: {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%": { boxShadow: "0 0 0 6px rgba(124,247,255,0.12)" },
          "50%": { boxShadow: "0 0 0 14px rgba(124,247,255,0.28)" },
          "100%": { boxShadow: "0 0 0 6px rgba(124,247,255,0.12)" },
        },
        pageIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        pageOut: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-130%)" },
        },
        loadingBar: {
          "0%": { transform: "translateX(-100%)" },
          "40%": { transform: "translateX(0)" },
          "60%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        floaty: "floaty 8s ease-in-out infinite",
        slideUp: "slideUp 0.8s ease forwards",
        marquee: "marquee 16s linear infinite",
        pulseDot: "pulseDot 2s infinite",
        pageIn: "pageIn 0.4s ease-out forwards",
        pageOut: "pageOut 0.4s ease-out forwards",
        loadingBar: "loadingBar 1s ease-in-out infinite 0.3s",
      },
    },
  },
  plugins: [],
};

