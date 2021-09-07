const focus = require('../base/focus')
const movement = require('../base/movement')

const link = {
  components: function ({ theme }) {
    return {
      '.link': {
        ...movement.base({ theme }).movement,
        borderRadius: theme('borderRadius.DEFAULT'),
        color: theme('colors.primary.600'),
        cursor: theme('cursor.pointer'),
        textDecoration: 'underline',
        '&:focus': {
          ...focus.base({ theme })['.focus'],
        },
        '&:hover': {
          color: theme('colors.primary.700'),
        },
        '&:active': {
          color: theme('colors.primary.800'),
        },
      },
      '.dark .link': {
        color: theme('colors.primary.200'),
        '&:focus': {
          ...focus.base({ theme })['.dark .focus'],
        },
        '&:hover': {
          color: theme('colors.primary.300'),
        },
        '&:active': {
          color: theme('colors.primary.400'),
        },
      },
    }
  },
}

module.exports = link