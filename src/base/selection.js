const selection = {
  base: function ({ theme }) {
    return {
      '::selection': {
        backgroundColor: theme('colors.primary.400'),
      },
      '.dark ::selection': {
        backgroundColor: theme('colors.primary.500'),
      },
    }
  },
}

module.exports = selection