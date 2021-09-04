const focus = require('../base/focus')
const movement = require('../base/movement')

const switchComp = {
  components: function ({ theme }) {
    return {
      '.switch-track': {
        alignItems: 'center',
        backgroundColor: theme('colors.gray.100'),
        borderColor: theme('colors.gray.200'),
        borderRadius: theme('borderRadius.full'),
        borderWidth: theme('borderWidth.DEFAULT'),
        display: 'inline-flex',
        flexShrink: '0',
        height: theme('height.8'),
        outline: theme('outline.none'),
        padding: theme('spacing.1'),
        position: 'relative',
        width: theme('width.16'),
        ...movement.base({ theme }).movement,
        '&:focus': {
          ...focus.base({ theme })['.focus'],
        },
      },
      '.switch-track-active': {
        backgroundColor: theme('colors.primary.500'),
        borderColor: theme('colors.primary.300'),
      },
      '.dark .switch-track': {
        backgroundColor: theme('colors.gray.700'),
        borderColor: theme('colors.gray.500'),
        '&:focus': {
          ...focus.base({ theme })['.dark .focus'],
        },
      },
      '.dark .switch-track-active': {
        backgroundColor: theme('colors.primary.500'),
        borderColor: theme('colors.primary.300'),
      },
      //
      '.switch-thumb': {
        '--tw-translate-x': theme('translate.0'),
        backgroundColor: theme('colors.gray.300'),
        borderRadius: theme('borderRadius.full'),
        display: 'inline-block',
        height: theme('height.5'),
        pointerEvents: 'none',
        transform:
          'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
        width: theme('width.5'),
        ...movement.base({ theme }).movement,
      },
      '.switch-track-active .switch-thumb': {
        '--tw-translate-x': theme('translate.8'),
        backgroundColor: theme('colors.gray.50'),
      },
    }
  }
}

module.exports = switchComp