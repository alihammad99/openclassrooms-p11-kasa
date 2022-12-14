/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6060",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
