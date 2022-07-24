/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'leaf-background': "url('./image.jpg')",
        'wow': "url('./wow.jpg')"
      },
      colors: {
        'forest': '#596D48'
      },
    },
  },
  plugins: [],
}
