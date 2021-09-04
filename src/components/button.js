const focus = require('../base/focus')
const movement = require('../base/movement')
const { hexToRgb } = require('../lib/color')

const button = {
  components: function ({ theme }) {
    return {
      '.btn': {
        backgroundColor: theme('colors.gray.400'),
        borderRadius: theme('borderRadius.DEFAULT'),
        color: theme('colors.gray.900'),
        fontWeight: theme('fontWeight.normal'),
        letterSpacing: theme('letterSpacing.widest'),
        padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
        textTransform: 'uppercase',
        userSelect: 'none',
        ...movement.base({ theme }).movement,
        '&:focus': {
          ...focus.base({ theme })['.focus'],
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.gray.400'))}, var(--tw-ring-opacity))`,
        },
        '&:hover': {
          backgroundColor: theme('colors.gray.500'),
          color: theme('colors.gray.50'),
          '&:disabled': {
            backgroundColor: theme('colors.gray.200'),
            color: theme('colors.gray.400'),
            cursor: theme('cursor.not-allowed'),
          },
        },
        '&:active': {
          backgroundColor: theme('colors.gray.600'),
          color: theme('colors.gray.50'),
          '&:disabled': {
            backgroundColor: theme('colors.gray.200'),
            color: theme('colors.gray.400'),
            cursor: theme('cursor.not-allowed'),
          },
        },
        '&:disabled': {
          backgroundColor: theme('colors.gray.200'),
          color: theme('colors.gray.400'),
          cursor: theme('cursor.not-allowed'),
        },
      },
      '.dark .btn': {
        '&:focus': {
          ...focus.base({ theme })['.dark .focus'],
        },
        '&:disabled': {
          backgroundColor: theme('colors.gray.600'),
        },
      },
    }
  },
  utilities: function ({ theme }) {
    return {
      '.btn-sm': { padding: `${theme('spacing.1')} ${theme('spacing.2')}` },
      '.btn-md': {},
      '.btn-lg': { padding: `${theme('spacing.3')} ${theme('spacing.4')}`, },
      '.btn-primary': {
        backgroundColor: theme('colors.primary.500'),
          color: theme('colors.gray.50'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.primary.500'))}, var(--tw-ring-opacity))`,
        },
        '&:hover': {
          backgroundColor: theme('colors.primary.600'),
        },
        '&:active': {
          backgroundColor: theme('colors.primary.700'),
        },
      },
    }
  },
}

module.exports = button