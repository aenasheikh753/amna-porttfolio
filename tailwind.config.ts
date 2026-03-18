import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg: "#04070f",
        surface: "#080e1f",
        border: "rgba(99,179,237,0.1)",
        accent: {
          blue: "#38bdf8",
          violet: "#a78bfa",
          rose: "#f472b6",
          emerald: "#34d399",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        pulse2: "pulse2 4s ease-in-out infinite",
        "scroll-down": "scrollDown 2s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulse2: {
          "0%,100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        scrollDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderGlow: {
          "0%,100%": { "box-shadow": "0 0 15px rgba(56,189,248,0.2)" },
          "50%": { "box-shadow": "0 0 35px rgba(167,139,250,0.35)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(rgba(56,189,248,0.07) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "grid-28": "28px 28px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [],
};
export default config;
