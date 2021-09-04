const focus = require('../base/focus')
const movement = require('../base/movement')

const { hexToRgb } = require('../lib/color')

const input = {
  components: function ({ theme }) {
    return {
      '.input': {
        outline: '1px solid transparent',
        backgroundColor: theme('colors.transparent'),
        borderColor: theme('colors.gray.200'),
        borderRadius: theme('borderRadius.DEFAULT'),
        borderWidth: theme('borderWidth.DEFAULT'),
        color: theme('colors.gray.900'),
        padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
        ...movement.base({ theme }).movement,
        width: theme('width.full'),
        '&:disabled': {
          borderColor: theme('colors.gray.100'),
          color: theme('colors.gray.300'),
          cursor: theme('cursor.not-allowed'),
        },
        '&:focus': {
          ...focus.base({ theme })['.focus'],
        },
        '&::placeholder': {
          color: theme('colors.gray.400'),
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
          color: theme('colors.gray.400'),
        },
        '&:disabled::placeholder': {
          color: theme('colors.gray.500'),
        },
      },
    }
  },
  utilities: function ({ theme }) {
    return {
      '.input-group': {
        display: 'flex',
        flexDirection: 'column',
      },
      '.input-group > * + *, .input-floating-group > * + *': {
        '--tw-space-y-reverse': '0',
        marginTop: `calc(${theme('spacing.2')} * calc(1 - var(--tw-space-y-reverse)))`,
        marginBottom: `calc(${theme('spacing.2')} * var(--tw-space-y-reverse))`,
      },
      //
      '.input-error': {
        borderColor: theme('colors.red.500'),
        color: theme('colors.red.900'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.red.500'))}, var(--tw-ring-opacity))`,
        },
        '&::placeholder': {
          color: theme('colors.red.700'),
        },
      },
      '.dark .input-error': {
        borderColor: theme('colors.red.400'),
        color: theme('colors.red.300'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.red.400'))}, var(--tw-ring-opacity))`,
        },
        '&::placeholder': {
          color: theme('colors.red.200'),
        },
      },
      //
      '.input-label-error': {
        color: theme('colors.red.700'),
      },
      '.dark .input-label-error': {
        color: theme('colors.red.400'),
      },
      //
      '.input-success': {
        borderColor: theme('colors.green.500'),
        color: theme('colors.green.900'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.green.500'))}, var(--tw-ring-opacity))`,
        },
        '&::placeholder': {
          color: theme('colors.green.700'),
        },
      },
      '.dark .input-success': {
        borderColor: theme('colors.green.400'),
        color: theme('colors.green.300'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.green.400'))}, var(--tw-ring-opacity))`,
        },
        '&::placeholder': {
          color: theme('colors.green.200'),
        },
      },
      //
      '.input-label-success': {
        color: theme('colors.green.700'),
      },
      '.dark .input-label-success': {
        color: theme('colors.green.400'),
      },
      // <Floating>
      '.input-floating-group': {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      },
      // input
      '.input-floating': {
        ...this.components({ theme })['.input'],
        paddingTop: theme('spacing.9'),
        '&:placeholder-shown': {
          paddingTop: theme('spacing.2'),
        },
        '&:placeholder-shown:focus': {
          ...focus.base({ theme })['.focus'],
          paddingTop: theme('spacing.9'),
        },
        '&::placeholder': {
          color: theme('colors.transparent'),
        },
        '&:disabled::placeholder': {
          color: theme('colors.transparent'),
        },
      },
      '.input-floating.input-error': {
        borderColor: theme('colors.red.500'),
        color: theme('colors.red.900'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.red.500'))}, var(--tw-ring-opacity))`,
        },
      },
      '.input-floating.input-success': {
        borderColor: theme('colors.green.500'),
        color: theme('colors.green.900'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.green.400'))}, var(--tw-ring-opacity))`,
        },
      },
      '.dark .input-floating': {
        ...this.components({ theme })['.input'],
        ...this.components({ theme })['.dark .input'],
        paddingTop: theme('spacing.9'),
        '&:placeholder-shown': {
          paddingTop: theme('spacing.2'),
        },
        '&:placeholder-shown:focus': {
          ...focus.base({ theme })['.dark .focus'],
          paddingTop: theme('spacing.9'),
        },
        '&::placeholder': {
          color: theme('colors.transparent'),
        },
        '&:disabled::placeholder': {
          color: theme('colors.transparent'),
        },
      },
      '.dark .input-floating.input-error': {
        borderColor: theme('colors.red.400'),
        color: theme('colors.red.100'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.red.400'))}, var(--tw-ring-opacity))`,
        },
      },
      '.dark .input-floating.input-success': {
        borderColor: theme('colors.green.400'),
        color: theme('colors.green.100'),
        '&:focus': {
          '--tw-ring-color': `rgba(${hexToRgb(theme('colors.green.400'))}, var(--tw-ring-opacity))`,
        },
      },
      // label-core
      '.input-floating-label': {
        backgroundColor: theme('colors.gray.100'),
        borderColor: theme('colors.gray.200'),
        borderWidth: theme('borderWidth.DEFAULT'),
        borderRadius: `${theme('borderRadius.DEFAULT')} ${theme('borderRadius.DEFAULT')} 0 0`,
        color: theme('colors.gray.900'),
        fontSize: theme('fontSize.sm'),
        height: '1.9rem',
        left: theme('inset.0'),
        marginTop: theme('spacing.0'),
        paddingLeft: theme('spacing.3'),
        paddingTop: theme('spacing.1'),
        pointerEvents: 'none',
        position: 'absolute',
        transitionDuration: '200ms',
        transitionProperty: theme('transitionProperty.all'),
        transitionTimingFunction: theme('transitionTimingFunction.out'),
        width: theme('width.full'),
      },
      '.input-floating-label.input-label-error': {
        backgroundColor: theme('colors.red.300'),
        borderColor: theme('colors.red.500'),
        color: theme('colors.red.800'),
      },
      '.input-floating-label.input-label-success': {
        backgroundColor: theme('colors.green.300'),
        borderColor: theme('colors.green.500'),
        color: theme('colors.green.800'),
      },
      '.dark .input-floating-label': {
        backgroundColor: theme('colors.gray.700'),
        borderColor: theme('colors.gray.500'),
        color: theme('colors.gray.300'),
      },
      '.dark .input-floating-label.input-label-error': {
        backgroundColor: theme('colors.red.900'),
        borderColor: theme('colors.red.400'),
        color: theme('colors.red.200'),
      },
      '.dark .input-floating-label.input-label-success': {
        backgroundColor: theme('colors.green.900'),
        borderColor: theme('colors.green.400'),
        color: theme('colors.green.200'),
      },
      // label input:placeholder-shown
      '.input-floating:placeholder-shown + .input-floating-label': {
        backgroundColor: theme('colors.transparent'),
        borderColor: theme('colors.transparent'),
        fontSize: theme('fontSize.base'),
        paddingTop: theme('spacing.2'),
        paddingBottom: theme('spacing.2'),
      },
      '.input-floating:placeholder-shown + .input-floating-label.input-label-error': {
        backgroundColor: theme('colors.transparent'),
        borderColor: theme('colors.transparent'),
        color: theme('colors.red.700'),
      },
      '.input-floating:placeholder-shown + .input-floating-label.input-label-success': {
        backgroundColor: theme('colors.transparent'),
        borderColor: theme('colors.transparent'),
        color: theme('colors.green.700'),
      },
      '.dark .input-floating:placeholder-shown + .input-floating-label': {
        backgroundColor: theme('colors.transparent'),
        borderColor: theme('colors.transparent'),
        color: theme('colors.gray.400'),
      },
      '.dark .input-floating:placeholder-shown + .input-floating-label.input-label-error': {
        backgroundColor: theme('colors.transparent'),
        borderColor: theme('colors.transparent'),
        color: theme('colors.red.300'),
      },
      '.dark .input-floating:placeholder-shown + .input-floating-label.input-label-success': {
        backgroundColor: theme('colors.transparent'),
        borderColor: theme('colors.transparent'),
        color: theme('colors.green.300'),
      },
      // label input:focus
      '.input-floating:focus + .input-floating-label': {
        backgroundColor: theme('colors.gray.100'),
        borderColor: theme('colors.gray.200'),
        color: theme('colors.primary.700'),
        fontSize: theme('fontSize.sm'),
        paddingTop: theme('spacing.1'),
        paddingBottom: theme('spacing.1'),
      },
      '.input-floating:focus + .input-floating-label.input-label-error': {
        backgroundColor: theme('colors.red.300'),
        borderColor: theme('colors.red.500'),
        color: theme('colors.red.800'),
      },
      '.input-floating:focus + .input-floating-label.input-label-success': {
        backgroundColor: theme('colors.green.300'),
        borderColor: theme('colors.green.500'),
        color: theme('colors.green.800'),
      },
      '.dark .input-floating:focus + .input-floating-label': {
        backgroundColor: theme('colors.gray.700'),
        borderColor: theme('colors.gray.500'),
        color: theme('colors.primary.300'),
      },
      '.dark .input-floating:focus + .input-floating-label.input-label-error': {
        backgroundColor: theme('colors.red.900'),
        borderColor: theme('colors.red.400'),
        color: theme('colors.red.200'),
      },
      '.dark .input-floating:focus + .input-floating-label.input-label-success': {
        backgroundColor: theme('colors.green.900'),
        borderColor: theme('colors.green.400'),
        color: theme('colors.green.200'),
      },
      // label input:disabled
      '.input-floating:disabled + .input-floating-label': {
        borderColor: theme('colors.transparent'),
        color: theme('colors.gray.300'),
      },
      '.dark .input-floating:disabled + .input-floating-label': {
        borderColor: theme('colors.transparent'),
        color: theme('colors.gray.500'),
      },
      '.dark .input-floating:disabled + .input-floating-label.input-label-error': {
        backgroundColor: theme('colors.red.900'),
        borderColor: theme('colors.red.400'),
        color: theme('colors.red.200'),
      },
      '.dark .input-floating:disabled + .input-floating-label.input-label-success': {
        backgroundColor: theme('colors.green.900'),
        borderColor: theme('colors.green.400'),
        color: theme('colors.green.200'),
      },
      //
      // </Floating>
    }
  },
}

module.exports = input