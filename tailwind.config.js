/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        lightSecondary: "#F0F0F0",
        "light/0.9": '#f7f7f7F6',
      },
      minHeight: {
        '50vh': '50vh',
        '80vh': '80vh',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
