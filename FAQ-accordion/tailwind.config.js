/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      screens:{
        's':'320px',
        'm':'375px',
        'l':'425px',
        'llg':'1440px',
        '3xl':'2560px'
      },
      fontFamily: {
        WorkSans: ["Work Sans", 'sans-serif']
      },
    },
  },
  plugins: [],
}


