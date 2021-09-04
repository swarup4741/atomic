const input = require('./input')
const menu = require('./menu')

const select = {
  components: function ({ theme }) {
    const smBreakpoint = `@media (min-width: ${theme('screens.sm')})`

    return {
      '.select': {
        outline: theme('outline.none'),
        position: 'static',
      },
      //
      '.select-trigger': {
        ...input.components({ theme })['.input'],
        color: theme('colors.gray.900'),
        textAlign: 'left',
      },
      '.dark .select-trigger': {
        ...input.components({ theme })['.dark .input'],
        color: theme('colors.gray.50'),
      },
      //
      '.select-items': menu.components({ theme })['.menu-items'],
      '.dark .select-items': menu.components({ theme })['.dark .menu-items'],
      '.select-items > * + *': menu.components({ theme })['.menu-items > * + *'],
      //
      '.select-item': menu.components({ theme })['.menu-item'],
      '.select-item-active': menu.components({ theme })['.menu-item-active'],
      '.select-item-selected': {
        ...menu.components({ theme })['.menu-item-active'],
        color: theme('colors.primary.600'),
      },
      '.select-item-disabled': {
        color: theme('colors.gray.300'),
        cursor: theme('cursor.not-allowed'),
        '&:focus': {
          '--tw-ring-width': '0',
          '--tw-ring-offset-width': '0',
        },
      },
      '.dark .select-item': menu.components({ theme })['.dark .menu-item'],
      '.dark .select-item-active': menu.components({ theme })['.dark .menu-item-active'],
      '.dark .select-item-selected': {
        ...menu.components({ theme })['.dark .menu-item-active'],
        color: theme('colors.primary.300'),
      },
      '.dark .select-item-disabled': {
        color: theme('colors.gray.500'),
      },
      //
      [smBreakpoint]: {
        '.select': menu.components({ theme })[smBreakpoint]['.menu'],
        '.select-items': {
          ...menu.components({ theme })[smBreakpoint]['.menu-items'],
          width: theme('width.full'),
        },
      },
    }
  }
}

module.exports = select