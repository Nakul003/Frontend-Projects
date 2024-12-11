/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      screens:{
        's':'320px',
        'm':'375px',
        'l':'425px',
        'll':'801px',
        'llg':'1440px',
        '3xl':'2560px'
      },
      fontFamily:{
        'manrope':["Manrope", 'sans-serif']
      },
    },
  },
  plugins: [],
}

