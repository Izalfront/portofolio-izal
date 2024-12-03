/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#6CCC93',
        primary2: '#28603D',
        dark: '#082f49',
        secondary: '#E6E6E6',
        darkmode: '#121212',
        darkmode2: '#242424',
        darkmode3: '#202123',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
