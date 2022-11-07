/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
    gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
                'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
              },},
  },
  plugins: [
    require('tailwind-scrollbar')
],
}
