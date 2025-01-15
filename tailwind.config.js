/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4E403C",
        secondary: "#997C70",
        light: "#F0F0D7",
      },
      fontFamily: {
        primary: ["Cinzel Decorative", "serif"],
        secondary: ["Tangerine", "serif"],
        base: ["Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
