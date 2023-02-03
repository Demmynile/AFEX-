/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
    backgroundColor : {
      primary : '#D71E0E',
      secondary : '#52965E',
      
    },
    textColor : {
      primary : '#D71E0E',
      secondary : '#52965E'
    },
  
    fontFamily : {
     
      manrope : "Manrope",
      roboto : "Roboto"
    }



    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
