/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4654",
        blueDark: "#040F14",
        blueNormal: "#102130",
        blueLight: "#375470",
        blueVeryLight: "#AFC7DF",
        whiteTransparent: "#FFFFFF33",
      },
    },
  },
  plugins: [],
}
