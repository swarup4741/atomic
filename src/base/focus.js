const { hexToRgb } = require('../lib/color')

const focus = {
  base: function ({ theme }) {
    return {
      '.focus': {
        '--tw-ring-inset': '0',
        '--tw-shadow': '0',
        //
        '--tw-ring-opacity': theme('ringOpacity.100'),
        '--tw-ring-color': `rgba(${hexToRgb(theme('colors.primary.500'))}, var(--tw-ring-opacity))`,
        '--tw-ring-width': theme('ringWidth.2'),
        //
        '--tw-ring-offset-color': theme('colors.white'),
        '--tw-ring-offset-width': theme('ringOffsetWidth.2'),
        //
        '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
        '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 calc(var(--tw-ring-width) + var(--tw-ring-offset-width)) var(--tw-ring-color)',
        boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow)',
        outline: theme('outline.none'),
      },
      '.dark .focus': {
        '--tw-ring-offset-color': `rgba(${hexToRgb(theme('colors.gray.900'))}, var(--tw-ring-opacity))`,
      }
    }
  },
}

module.exports = focus