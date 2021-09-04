module.exports = {
  darkMode: 'class',
  mode: 'jit',
  plugins: [
    require('./plugin'),
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F4F4F6',
          100: '#E5E5EB',
          200: '#C0C0CE',
          300: '#A3A3B8',
          400: '#787891',
          500: '#5D5F79',
          600: '#43465B',
          700: '#2C2E3F',
          800: '#1F212E',
          900: '#14161F',
        },
        primary: {
          50: '#E7F5FD',
          100: '#CDEAFB',
          200: '#9AD3F8',
          300: '#65BBF4',
          400: '#1CA1ED',
          500: '#1183D5',
          600: '#0B66BD',
          700: '#0648A5',
          800: '#032A83',
          900: '#01134B',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
}