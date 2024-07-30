/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import iconMaskPlugin from "./src/assets/icon_m3/iconMaskPlugin";
import textGradientPlugin from "./src/styles/customLinearGardientText.ts";
import scrollbarHidePlugin from "./src/styles/scroolBarHidden.ts";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      textGradients: {
        "purple-to-blue": ["#EE10B0", "#0E9EEF"],
      },
      screens: {
        "scrollbar-none": { raw: "(min-width: 0px)" },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    iconMaskPlugin,
    textGradientPlugin,
    scrollbarHidePlugin,
  ],
};
