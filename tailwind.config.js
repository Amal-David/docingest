/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FE4A60",
        secondary: "#5CF1A4",
        background: "#FFFDF8",
        card: "#fff4da",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 