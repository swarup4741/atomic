const typography = {
  base: function ({ theme }) {
    return {
      '.text': {
        color: theme('colors.gray.900'),
      },
      '.dark .text': {
        color: theme('colors.gray.50'),
      },
      '.muted': {
        color: theme('colors.gray.500'),
      },
      '.dark .muted': {
        color: theme('colors.gray.300'),
      },
      '.bold': {
        fontWeight: theme('fontWeight.bold'),
      },
      'italic': {
        fontStyle: theme('fontStyle.italic'),
      },
      //
      '.heading': {
        fontWeight: theme('fontWeight.bold'),
        fontSize: theme('fontSize.6xl'),
      },
      '.subheading': {
        fontWeight: theme('fontWeight.semibold'),
        fontSize: theme('fontSize.4xl'),
      },
      '.title': {
        fontWeight: theme('fontWeight.medium'),
        fontSize: theme('fontSize.3xl'),
      },
      '.subtitle': {
        fontSize: theme('fontSize.base'),
      },
      '.hint': {
        fontSize: theme('fontSize.sm'),
      },
      '.caption': {
        fontSize: theme('fontSize.sm'),
        letterSpacing: theme('letterSpacing.wider'),
        textTransform: 'uppercase',
      },
    }
  },
}

module.exports = typography