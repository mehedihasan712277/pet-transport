/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
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

