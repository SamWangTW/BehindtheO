/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        scarlet: '#BB0000',
        'scarlet-dark': '#8B0000',
        'osu-gray': '#666666',
        'osu-light-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
};
