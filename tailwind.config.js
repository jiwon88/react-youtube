/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        brand: '#FF0000',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

