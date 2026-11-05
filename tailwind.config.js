/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins', 'Segoe UI', 'system-ui', 'Arial', 'sans-serif'] },
    },
  },
  plugins: [],
};
