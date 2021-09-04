//
const movement = {
  base: function ({ theme }) {
    return {
      movement: {
        transitionProperty: theme('transitionProperty.all'),
        transitionDuration: '200ms',
        transitionTimingFunction: theme('transitionTimingFunction.out'),
      },
    }
  },
}

module.exports = movement