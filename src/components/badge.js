const badge = {
  components: function ({ theme }) {
    return {
      '.badge': {
        backgroundColor: theme('colors.gray.200'),
        borderColor: theme('colors.gray.400'),
        borderRadius: theme('borderRadius.full'),
        borderWidth: theme('borderWidth.DEFAULT'),
        color: theme('colors.gray.900'),
        padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
      },
      '.dark .badge': {
        backgroundColor: theme('colors.gray.700'),
        borderColor: theme('colors.gray.500'),
        color: theme('colors.gray.100'),
      },
    }
  },
  utilities: function ({ theme }) {
    return {
      '.badge-sm': { padding: `${theme('spacing[0.5]')} ${theme('spacing.2')}` },
      '.badge-md': {},
      '.badge-lg': { padding: `${theme('spacing[1.5]')} ${theme('spacing.4')}` },
      '.badge-primary': {
        backgroundColor: theme('colors.primary.200'),
        borderColor: theme('colors.primary.400'),
        color: theme('colors.primary.900'),
      },
      '.dark .badge-primary': {
        backgroundColor: theme('colors.primary.800'),
        borderColor: theme('colors.primary.600'),
        color: theme('colors.primary.50'),
      },
    }
  },
}

module.exports = badge