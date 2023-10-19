/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans:["Estedad"],
      serif:["Estedad"],
    },
    extend: {
      width:{
        '100':'34rem'
      },
      colors:{
        primary:{
          100:"#ffdada",
        },
        blue:{
          100:"#4339F2"
        },
        red:{
          100:"#FF3838"
        },
        purple:{
          100:"#891BE8"
        },
        green:{
          100:"#1AD698"
        }
      }
    },
  },
  plugins: [],
}

