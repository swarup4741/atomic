const focus = require('../base/focus')
const movement = require('../base/movement')
const typography = require('../base/typography')

const { hexToRgb } = require('../lib/color')

const input = {
  components: function ({ theme }) {
    return {
      '.input': {
        ...movement.base({ theme }).movement,
        outline: '1px solid transparent',
        backgroundColor: theme('colors.transparent'),
        borderColor: theme('colors.gray.300'),
        borderRadius: theme('borderRadius.DEFAULT'),
        borderWidth: theme('borderWidth.DEFAULT'),
        color: theme('colors.gray.900'),
        padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
        width: theme('width.full'),
        '&:disabled': {
          borderColor: theme('colors.gray.200'),
          color: theme('colors.gray.300'),
          cursor: theme('cursor.not-allowed'),
        },
        '&:focus': {
          ...focus.base({ theme })['.focus'],
        },
        '&::placeholder': {
          color: theme('colors.gray.500'),
        },
        '&:disabled::placeholder': {
          color: theme('colors.gray.300'),
        },
      },
      '.dark .input': {
        borderColor: theme('colors.gray.500'),
        color: theme('colors.gray.50'),
        '&:disabled': {
          borderColor: theme('colors.gray.600'),
          color: theme('colors.gray.500'),
          cursor: theme('cursor.not-allowed'),
        },
        '&:focus': {
          ...focus.base({ theme })['.dark .focus'],
        },
        '&::placeholder': {
          color: theme('colors.gray.300'),
        },
        '&:disabled::placeholder': {
          color: theme('colors.gray.400'),
        },
      },
      //
      '.input-group': {
        display: 'flex',
        flexDirection: 'column',
      },
      '.input-group > * + *': {
        '--tw-space-y-reverse': '0',
        marginTop: `calc(${theme('spacing.2')} * calc(1 - var(--tw-space-y-reverse)))`,
        marginBottom: `calc(${theme('spacing.2')} * var(--tw-space-y-reverse))`,
      },
      //
      '.input-label': {
        ...typography.base({ theme })['.text'],
      },
      '.dark .input-label': {
        ...typography.base({ theme })['.dark .text'],
      },
      //
      '.input-hint': {
        ...typography.base({ theme })['.muted'],
        ...typography.base({ theme })['.hint'],
      },
      '.dark .input-hint': {
        ...typography.base({ theme })['.dark .muted'],
      },
    }
  },
  utilities: function ({ theme }) {
    return {
      // <Floating>
      // Group
      '.input-group.floating': {
        position: 'relative',
      },
      // Input
      '.input-group.floating .input': {
        paddingTop: theme('spacing.7'),
        '&::placeholder': {
          color: theme('colors.transparent'),
          userSelect: 'none',
        },
        '&:placeholder-shown': {
        }
      },
      // Label
      '.input-group.floating .input-label': {
        ...movement.base({ theme })['movement'],
        borderColor: theme('colors.transparent'),
        borderWidth: theme('borderWidth.DEFAULT'),
        color: theme('colors.gray.500'),
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('lineHeight.5'),
        marginTop: theme('spacing.0'),
        padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
        pointerEvents: 'none',
        position: 'absolute',
        width: theme('width.full'),
      },
      '.input-group.floating .input:placeholder-shown + .input-label': {
        fontSize: theme('fontSize.base'),
        paddingTop: theme('spacing.5'),
      },
      '.input-group.floating .input:focus + .input-label': {
        fontSize: theme('fontSize.sm'),
        paddingTop: theme('spacing.2'),
      },
      '.input-group.floating .input:disabled + .input-label': {
        color: theme('colors.gray.300'),
      },
      '.dark .input-group.floating .input-label': {
        color: theme('colors.gray.300'),
      },
      '.dark .input-group.floating .input:disabled + .input-label': {
        color: theme('colors.gray.400'),
      },
      // </Floating>
      //
      '.input-error': {
        borderColor: theme('colors.red.600'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.red.500'))}, var(--tw-ring-opacity))`,
        },
      },
      '.dark .input-error': {
        borderColor: theme('colors.red.400'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.red.400'))}, var(--tw-ring-opacity))`,
        },
      },
      //
      '.input-success': {
        borderColor: theme('colors.green.600'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.green.500'))}, var(--tw-ring-opacity))`,
        },
      },
      '.dark .input-success': {
        borderColor: theme('colors.green.400'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.green.400'))}, var(--tw-ring-opacity))`,
        },
      },
    }
  },
}

module.exports = input