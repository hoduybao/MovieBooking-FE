/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./public/index.html"],
  theme: {
    fontFamily: {
      main: ['Poppins', "sans-serif"]
    },
    extend: {
      width:{
        main: '85%'
      },
    },
  },
  plugins: [],
}

