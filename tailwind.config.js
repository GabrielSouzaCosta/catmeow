/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E49E77",
        secondary: "#BB6B4E",
        dark: "#414141",
        darkSecondary: "#353535",
        light: "#F7F7F7",
        lightSecondary: "#F1F1F1"
      },
      minHeight: {
        '50vh': '50vh',
        '80vh': '80vh',
      }
    },
  },
  plugins: [],
}
