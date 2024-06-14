/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        ubuntu : ["Ubuntu", "sans-serif", ...defaultTheme.fontFamily.sans],
        sans : ["Maitree", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors : {
        codGray : {
          500 : "#1E1E1E"
        },
        gallary : {
          500 : "#EFEFEF"
        },
        bitterSweet : {
          500 : "#FF6F61"
        },
        pictonBlue : {
          500 : "#42A5F5"
        },
        amber : {
          500 : "#FFC107"
        }
      },
      backgroundColor : {
        gradientNew : "linear-gradient(313deg, rgba(255,111,97,0.9) 0%, rgba(239,239,239,0.9) 58%);"
      },
      
    },
  },
  plugins: [],
}

