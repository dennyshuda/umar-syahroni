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
    fontFamily: {
      title: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#F2F2F2",
        secondary: "#45577B",
        tertiary: "#46434E",
      },
    },
  },
  plugins: [],
};
