/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      backgroundImage: {
        'p-header': "url('https://i.imgur.com/jpWSWG0.png')",
      },
      height: {
        35: '8.5rem',
      },
      fontSize: {
        '2xl-1': ['1.5rem', '1rem'],
        'xs-13': ['0.81rem', '1rem'],
      },
      fontFamily: {
        title: ['Tenor Sans'],
      },
      colors: {
        primary: '#20130B',
        secondary: {
          0: '#f1bfa2',
          50: '#dd9b76',
          100: '#BC8363',
          200: '#9d6c51',
        },
        'gray-55': '#8B8B8B',
      },
      boxShadow: {
        social: '0px 2px 6px 0px rgba(0, 0, 0, 0.09)',
      },
    },
  },
  plugins: [],
};


