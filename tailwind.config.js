/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        metalgreen: "#4EE1A0",
        midnight: "#151515",
        footerbg: "#242424",
        metalgray: "#d9d9d9",
        orangemetal: "#FFA500",
      },
    },
    fontFamily: {
      spacegrotesk: ["Space grotesk", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
    backgroundImage: {
      circlepattern: "url('./assets/images/pattern-circle.svg')",
      ringspattern: "url('./assets/images/pattern-rings.svg')",
      ringspatternBlack: "url('./assets/images/pattern-rings-black.svg')",
    },
  },
  plugins: [],
};
