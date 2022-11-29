/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "alta-space": "#152C59",
        "alta-orange": "#F47624",
        "alta-background": "#F4F7FC",
        "alta-border": "#E5E7E8",
        "alta-hover": "#646cff",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: ["class"],
};
