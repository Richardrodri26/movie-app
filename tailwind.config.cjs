/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'starwars': "url('assets/images/starwars.jpg')",
      }
    },
  },
  plugins: [],
}
