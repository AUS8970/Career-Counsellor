/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins" : [
          "Poppins", "sans-serif",
        ],
        "font" : [
          "Big Shoulders Text", "sans-serif",
        ],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

