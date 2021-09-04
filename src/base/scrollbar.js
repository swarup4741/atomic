const scrollbar = {
  base: function ({ theme }) {
    return {
      '::-webkit-scrollbar': {
        width: theme('width.2'),
      },
      //
      '::-webkit-scrollbar-track': {
        backgroundColor: theme('colors.gray.100'),
        borderRadius: theme('borderRadius.full'),
      },
      '.dark ::-webkit-scrollbar-track': {
        backgroundColor: theme('colors.gray.700'),
        borderRadius: theme('borderRadius.full'),
      },
      //
      '::-webkit-scrollbar-thumb': {
        backgroundColor: theme('colors.gray.200'),
        borderRadius: theme('borderRadius.full'),
        '&:active': {
          backgroundColor: theme('colors.gray.300'),
        },
      },
      '.dark ::-webkit-scrollbar-thumb': {
        backgroundColor: theme('colors.gray.500'),
        borderRadius: theme('borderRadius.full'),
        '&:active': {
          backgroundColor: theme('colors.gray.400'),
        },
      },
    }
  },
}

module.exports = scrollbar