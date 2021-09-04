const { hexToRgb } = require('../lib/color')

const modal = {
  components: function ({ theme }) {
    const smBreakpoint = `@media (min-width: ${theme('screens.sm')})`

    return {
      '.modal': {
        bottom: theme('inset.0'),
        left: theme('inset.0'),
        padding: theme('spacing.4'),
        position: 'absolute',
        right: theme('inset.0'),
        top: theme('inset.0'),
      },
      //
      '.modal-overlay': {
        backgroundColor: `rgba(${hexToRgb(theme('colors.gray.800'))}, ${theme('opacity.80')})`,
        bottom: theme('inset.0'),
        left: theme('inset.0'),
        position: 'fixed',
        right: theme('inset.0'),
        top: theme('inset.0'),
        zIndex: theme('zIndex.10'),
      },
      '.dark .modal-overlay': {
        backgroundColor: `rgba(${hexToRgb(theme('colors.gray.900'))}, ${theme('opacity.80')})`,
      },
      //
      '.modal-layout': {
        margin: 'auto',
        maxWidth: theme('maxWidth.xl'),
        position: 'relative',
        width: theme('width.full'),
        zIndex: theme('zIndex.20'),
      },
      //
      [smBreakpoint]: {
        '.modal-layout': {
          margin: `${theme('spacing.10')} auto`,
        },
      },
    }
  }
}

module.exports = modal