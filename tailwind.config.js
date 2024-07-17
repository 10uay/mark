/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_blue: "#fff",
        text_yellow: "#ffcd05",
        main_dark: "#131313",
        myYellow: "#FFCD05",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  presets: [require("@relume_io/relume-tailwind")],
};
