const plugin = require('tailwindcss/plugin')

const { bases, components, utilities } = require('./lib/tailwind')

const list = [
  require('./base/body'),
  require('./base/focus'),
  require('./base/scrollbar'),
  require('./base/selection'),
  require('./base/typography'),
  //
  require('./components/badge'),
  require('./components/button'),
  require('./components/card'),
  require('./components/input'),
  require('./components/menu'),
  require('./components/modal'),
  require('./components/select'),
  require('./components/switch'),
  //
]

const atomic = plugin(function ({ addBase, addComponents, addUtilities, theme }) {
  addBase(bases(theme, list))
  addComponents(components(theme, list))
  addUtilities(utilities(theme, list))
})

module.exports = atomic