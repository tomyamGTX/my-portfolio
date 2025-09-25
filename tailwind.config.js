/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // optional, if you want dark mode
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography") // enables prose classes for markdown
  ],
};
