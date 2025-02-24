/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        Josefin:["Josefin Sans", "serif"],
        Alata:["Alata", "serif"]
      },
      colors:{
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        Dark_Gray: "hsl(0, 0%, 55%)",
        Very_Dark_Gray: "hsl(0, 0%, 41%)"
      },
      screens:{
        "2xl":"1440px",
      },
    },
  },
  plugins: [],
}