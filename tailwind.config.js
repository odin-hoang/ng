/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        starz: ["Starz-2016", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        ptSerif: ["PT Serif", ...defaultTheme.fontFamily.serif],
        sen: ["Sen", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
