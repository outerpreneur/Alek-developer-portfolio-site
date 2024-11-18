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
      "gold-gradient": "linear-gradient(to right, #FFD700, #FF8C00)",
    },
    textColor: {
      transparent: "transparent",
    },
    content: {
      empty: "''",
    },
    variants: {
      extend: {
        content: ["before", "after"],
        backgroundColor: ["dark", "after"],
        gradientColorStops: ["dark", "after"],
        opacity: ["dark", "after"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".after\\:content-empty": {
            content: '""',
          },
          ".after\\:bg-gradient-to-r": {
            backgroundImage:
              "linear-gradient(to right, var(--tw-gradient-stops))",
          },
          ".after\\:from-white": {
            "--tw-gradient-from": "#ffffff",
            "--tw-gradient-stops":
              "var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))",
          },
          ".dark .after\\:from-black": {
            "--tw-gradient-from": "#000000",
            "--tw-gradient-stops":
              "var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0))",
          },
          ".text-gold-gradient": {
            backgroundImage: "linear-gradient(to right, #FFD700, #FF8C00)",
            "-webkit-background-clip": "text",
            "background-clip": "text",
            color: "transparent",
          },
        },
        ["after", "dark"],
      );
    },
  ],
};
