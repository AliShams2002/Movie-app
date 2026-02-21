/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'iranSans-bold': ['IRAnSansBold-Edit', 'sans-serif'],
        'iranSans-edit': ['IRAnSans-Edit', 'sans-serif']
      }
    },
  },
  plugins: [],
}

