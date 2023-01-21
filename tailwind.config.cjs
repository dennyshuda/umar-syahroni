/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1080px",
    },
    colors: {
      primary: "#F2F2F2",
      secondary: "#45577B",
    },
    fontFamily: {
      title: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
