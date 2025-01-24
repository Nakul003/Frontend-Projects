/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {

      fontFamily: {
        DM_Sans: ["DM Sans", "serif"],
      },

      colors: {
        Soft_red: "hsl(10, 79%, 65%)",
        Cyan: "hsl(186, 34%, 60%)",
        Dark_brown: "hsl(25, 47%, 15%)",
        Medium_brown: "hsl(28, 10%, 53%)",
        Cream: "hsl(27, 66%, 92%)",
        Very_pale_orange: "hsl(33, 100%, 98%)"
      },
      
      fontSize:{
        Font_size: "18px"
      },

      fontWeight:{
        Weight_400: "400",
        Weight_700: "700"
      },
    },
  },
  plugins: [],
}

