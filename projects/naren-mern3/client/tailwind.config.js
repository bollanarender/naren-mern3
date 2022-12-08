/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#F97316",
        tertiary: "#6DFF33",
      },
    },
    screens: {
      
      'lg': {'max': '2023px'},
      // => @media (max-width: 1023px) { ... }
      //desktop view
'sm': {'max': '1000px'},
      // => @media (max-width: 639px) { ... }
      //mobile and tab view
    }
  },
  plugins: [],
};
