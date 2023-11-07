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
      keyframes:{
        'search-input':{
         '0%': {
           '-webkit-width': '0px;',
                   width: '0px;'
         },
         '100%': {
          '-webkit-width': '300px;',
          width: '300px;'
         }
        },
       
        
       },
       animation:{
        'search-input': 'search-input 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
      }
    },
  },
  plugins: [],
}

