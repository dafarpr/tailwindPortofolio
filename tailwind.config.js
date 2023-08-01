/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm : '480px', //phone
      md : '768px', //tablet
      lg : '925px', //notebook
      xl : '1440px', //laptop or desktop
    },

    fontFamily: {

      poppins : ['Poppins']

    },
    extend: {},

    scale: {
      '-100' : '-1'
    }
  },
  plugins: [],
}

