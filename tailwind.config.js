/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
    extend: {
      width: {
        main: "85%",
      },
      opacity: {
        80: ".80",
      },
      keyframes: {
        "search-input": {
          "0%": {
            "-webkit-width": "0px;",
            width: "0px;",
          },
          "100%": {
            "-webkit-width": "300px;",
            width: "300px;",
          },
        },
        "border-nav": {
          "0%": {
            "-webkit-border-bottom-width": "0px;",
            "border-bottom-width": "0px;",
          },
          "100%": {
            "-webkit-border-bottom-width": "50px",
            "border-bottom-width": "50px",
          },
        },
        "slide-top": {
          "0%": {
            "-webkit-top": "0",
            top: "0",
            "-webkit-left": "50%",
            left: "50%",
            "-webkit-transform": "translateY(0px);",
            transform: "translateY(0px);",
          },
          "100%": {
            "-webkit-top": "20%",
            top: "20%",
            "-webkit-left": "50%",
            left: "50%",
            "-webkit-transform": "translateX(-50%);",
            transform: "translateX(-50%);",
          },
        },
        "slide-bottom": {
          "0%": {
            "-webkit-bottom": "0",
            bottom: "0",
            "-webkit-left": "20px",
            left: "20px",
           
          },
          "100%": {
            "-webkit-bottom": "25%",
            bottom: "25%",
            "-webkit-left": "20px",
            left: "20px",
          
          },
        },
        "slide-right": {
          "0%": {
            "-webkit-bottom": "20px",
            bottom: "20px",
            "-webkit-right": "-80px",
            right: "-80px",
           
          },
          "100%": {
            "-webkit-bottom": "20px",
            bottom: "20px",
            "-webkit-right": "0px",
            right: "0px",
          
          },
        },
      },
      animation: {
        "slide-bottom":
        "slide-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "slide-top":
          "slide-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
          "slide-right":
          "slide-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "search-input":
          "search-input 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "border-nav":
          "border-nav 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
      },
    },
  },
  plugins: [],
};
