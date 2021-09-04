const card = require('./card')
const focus = require('../base/focus')

const menu = {
  components: function ({ theme }) {
    const smBreakpoint = `@media (min-width: ${theme('screens.sm')})`

    return {
      '.menu': {
        position: 'static',
        width: theme('width.max'),
      },
      //
      '.menu-items': {
        ...card.components({ theme })['.card'],
        borderRadius: `${theme('borderRadius.DEFAULT')} ${theme('borderRadius.DEFAULT')} ${theme('borderRadius.none')} ${theme('borderRadius.none')}`,
        bottom: theme('inset.0'),
        left: theme('inset.0'),
        minHeight: '50%',
        maxHeight: '70%',
        outline: '1px solid transparent',
        overflow: 'auto',
        padding: `${theme('spacing.2')} ${theme('spacing.0')}`,
        position: 'absolute',
        right: 'auto',
        width: theme('width.full'),
      },
      '.dark .menu-items': {
        ...card.components({ theme })['.dark .card'],
      },
      '.menu-items > * + *': {
        '--tw-space-x-reverse': '1',
        'marginTop': `calc(${theme('spacing.2')} * var(--tw-space-x-reverse))`,
        'marginBottom': `calc(${theme('spacing.2')} * calc(1 - var(--tw-space-x-reverse)))`,
      },
      '.menu-items-right': {
        left: 'auto',
        right: theme('inset.0'),
      },
      //
      '.menu-item': {
        alignItems: 'flex-start',
        color: theme('colors.gray.500'),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
        transitionProperty: theme('transitionProperty.DEFAULT'),
        transitionDuration: '200ms',
        transitionTimingFunction: theme('transitionTimingFunction.out'),
        '&:focus': {
          ...focus.base({ theme })['.focus'],
        },
      },
      '.menu-item-active': {
        backgroundColor: theme('colors.gray.50'),
        color: theme('colors.gray.700'),
      },
      '.dark .menu-item': {
        color: theme('colors.gray.300'),
        '&:focus': {
          ...focus.base({ theme })['.dark .focus'],
        },
      },
      '.dark .menu-item-active': {
        backgroundColor: theme('colors.gray.700'),
        color: theme('colors.gray.100'),
      },
      [smBreakpoint]: {
        '.menu': {
          position: 'relative',
        },
        //
        '.menu-items': {
          borderRadius: theme('borderRadius.DEFAULT'),
          bottom: 'auto',
          marginTop: theme('spacing.1'),
          maxHeight: theme('height.96'),
          top: theme('inset.full'),
          width: theme('width.60')
        },
      },
    }
  },
}

module.exports = menu