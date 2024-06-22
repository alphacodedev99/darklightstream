/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'darkMainBG': '#05010D',
        'darkMainText': '#191919',
        'whiteText': '#fff'
      }
    },
  },
  plugins: [],
}

