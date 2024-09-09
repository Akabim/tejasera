/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#603F26',

      },
      backgroundImage: {
        'hero': "url('./dist/img/gambar6.png')"
      }
    },
  },
  plugins: [],
}

