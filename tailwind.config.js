/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    gridTemplateColumns: {
      // Simple 16 column grid
      '16': 'repeat(3, 100px)',
    },
    extend: {
      fontFamily: {
        title: ['Caprasimo', 'serif'],
        body: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}