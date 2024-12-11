/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  mode: 'jit',
  theme: {
    extend: {
      screens:{
        's':'320px',
        'm':'375px',
        'l':'425px',
        'll':'577px',
        '900':'900px',
        'llg':'1440px',
      },
      fontFamily:{
        "Poppins":["Poppins", 'serif']
      }
    },
  },
  plugins: [],
}

