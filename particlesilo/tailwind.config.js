/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: {
          dark: '#20385D', 
          light: '#291F3D'
        }
    }
  },
  plugins: [],
  }
}
