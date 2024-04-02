/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./build/*.html', './build/js/*.js'], we can do it like this
  content: ["./build/**/*.{html,js}"],
  //the abobe reads, if there is a folder, look inside of any folders thats in the build directory and look for these htmla and javascript files
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        }
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
        // 3/2 enphasizes that it should be wider than it is tall think of it as "for every 3 units of width, there are two units of height"

        //13/20: for every 13 units of width, there are 20 units of height

        //1/2 enphasizes that it should be twice as tall as it is wide
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
