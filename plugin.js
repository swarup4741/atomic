const plugin = require('tailwindcss/plugin')

const { bases, components, utilities } = require('./src/lib/tailwind')

const list = [
  require('./src/base/body'),
  require('./src/base/focus'),
  require('./src/base/scrollbar'),
  require('./src/base/selection'),
  require('./src/base/typography'),
  //
  require('./src/components/badge'),
  require('./src/components/button'),
  require('./src/components/card'),
  require('./src/components/input'),
  require('./src/components/menu'),
  require('./src/components/modal'),
  require('./src/components/select'),
  require('./src/components/switch'),
  //
]

const atomic = plugin(function ({ addBase, addComponents, addUtilities, theme }) {
  addBase(bases(theme, list))
  addComponents(components(theme, list))
  addUtilities(utilities(theme, list))
})

module.exports = atomic