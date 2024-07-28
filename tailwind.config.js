/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        title: ["Poppins", "sans-serif"],
        normal: ["Roboto Mono", "monospace"],
      },
      
      colors: {
        'yellow': '#F8CB16',
        'black': '#1A1A1A',
        'orange': '#F46036',
        'orangeDark': '#DA4419',
      }
    },
  },
  plugins: [],
}

