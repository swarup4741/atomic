const focus = {
  base: function ({ theme }) {
    return {
      'body': {
        backgroundColor: theme('colors.gray.50'), 
      },
      'body.dark': {
        backgroundColor: theme('colors.gray.900'),
      },
    }
  },
}

module.exports = focus