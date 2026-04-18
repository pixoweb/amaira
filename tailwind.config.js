/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./about/**/*.html",
    "./products/**/*.html",
    "./contact/**/*.html",
    "./components/**/*.js",
    "./components/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0B0B0B",
        darker: "#111111",
        surface: "#1A1A1A",
        gold: "#C5A059",
        silver: "#E0E0E0",
        beige: "#D6CFC7"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
