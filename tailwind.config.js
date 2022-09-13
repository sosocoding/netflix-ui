const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvatica', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
