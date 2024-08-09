/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      keyframes: {
        jump: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-15px)" },
          "60%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        jump: "jump 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
