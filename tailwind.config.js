/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
