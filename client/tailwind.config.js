/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olivedark: '#252C1B',
        primaryBlack: '#1c1c1c',
        primaryYellow: '#FFD700',
        primaryWhite:'#F8F8FF',


      },
    },
  },
  plugins: [],
}