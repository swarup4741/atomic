const card = {
  components: function ({ theme }) {
    return {
      '.card': {
        backgroundColor: theme('colors.white'),
        borderColor: theme('colors.gray.200'),
        borderRadius: theme('borderRadius.md'),
        borderWidth: theme('borderWidth.DEFAULT'),
        display: 'flex',
        flexDirection: 'column',
        padding: theme('spacing.4'),
        boxShadow: theme('boxShadow.DEFAULT'),
      },
      '.dark .card': {
        backgroundColor: theme('colors.gray.800'),
        borderColor: theme('colors.gray.500'),
      },
    }
  },
}

module.exports = card