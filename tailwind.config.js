/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    daisyui: {
      themes: false,
    },
    fontFamily: {
      'poppins': ['Poppins', "sans-serif"],
      'noto': ['Noto Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

