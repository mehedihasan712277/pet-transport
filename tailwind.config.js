/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "linear-gradient(rgba(0,0,50,0.7), rgba(0,0,0,0.9)), url('../images/bg.jpg')"
      },
      screens: {
        "ms": "320px",
        "mm": "375px",
        "ml": "425px",
        //sm : 640px
        "mh": "576px",
        "tb": "768px",
        //lg: 1024px
        //xl: 1280px
        "lm": "1440px",
        "ll": "1600px"
      },
    },
  },
  plugins: [require("daisyui")],
}

