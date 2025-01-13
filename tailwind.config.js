/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        neonBorder: {
          "0%": { borderColor: "#FFF9C4" },
          "25%": { borderColor: "#18FFFF" },
          "50%": { borderColor: "#E0E0E0" },
          "75%": { borderColor: "#FFC1CC" },
          "100%": { borderColor: "#FFF9C4" },
        },
      },
      animation: {
        neonBorder: "neonBorder 2s infinite",
      },
      colors: {
        neonBlue: "#0ff",
        neonGreen: "#0f0",
      },
      fontFamily: {
        digital: ["'Digital-7'", "monospace"],
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 255, 255, 0.8)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
