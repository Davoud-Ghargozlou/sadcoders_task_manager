/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Estedad"],
      serif: ["Estedad"],
    },
    extend: {
      width: {
        100: "34rem",
      },
      colors: {
        primary: {
          100: "#ffdada",
        },
        gray: {
          400: "#637381",
          900: "#111928",
        },
        blue: {
          100: "#4339F2",
          200: "#3758F9",
        },
        red: {
          100: "#FF3838",
          500: "#F23030",
        },
        purple: {
          100: "#891BE8",
        },
        green: {
          100: "#1AD698",
        },
      },
    },
  },
  plugins: [],
};
