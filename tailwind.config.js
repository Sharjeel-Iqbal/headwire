module.exports = {
  content: ['/blocks/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        phone: { raw: '(max-width: 767.98px)' },
        tablet: { raw: '(max-width: 1199.98px)' },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },

      backgroundPosition: {
        '50%': '50% 50%',
      },
      padding: {
        50: '50px',
        100: '100px',
      },
      width: {
        30: '30%;',
      },
      colors: {
        'ez-aem-blue': 'rgb(54, 90, 139)',
        'headwire-link': '#da7b40',
      },
    },
  },
  plugins: [],
};
