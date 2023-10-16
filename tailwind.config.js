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
      colors:{
        primary:{
          100:"#ffdada",
        }
      }
    },
  },
  plugins: [],
}

