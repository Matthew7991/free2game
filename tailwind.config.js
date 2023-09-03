/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "nav-side": "74px",
        "nav-top": "64px",
        "section-top": "96px",
        "section-left": "80px",
        "section-right": "74px",
      },
      colors: {
        primary: "#FF4654",
        blueDark: "#040F14",
        blueNormal: "#102130",
        blueLight: "#375470",
        blueVeryLight: "#AFC7DF",
        whiteTransparent: "#FFFFFF33",
      },
      fontFamily: {
        sans: ["Oswald", ...defaultTheme.fontFamily.sans],
        "Titillium-Web": "Titillium",
        "Source-Sans": "Source-Sans",
      },
    },
  },
  plugins: [],
}
