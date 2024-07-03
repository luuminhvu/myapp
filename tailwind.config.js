/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleRgb: "rgba(156, 105, 226, 0.5)",
        greenRgb: " rgba(104, 201, 186, 0.5)",
        pinkRgb: " rgba(240, 99, 184, 0.5)",
        blueRgb: "rgba(45, 156, 219, 0.5)",
        textRgb: "rgba(33, 35, 83, 1);",
        desRgb: "rgba(75, 93, 104, 1);",
        moreRgb: "rgba(33, 35, 83, 1)",
        sidebarRgb: "rgba(217, 217, 217, 1)",
      },
    },
  },
  plugins: [],
};
