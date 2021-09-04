import { create } from '@storybook/theming'

export default create({
  base: 'dark',

  colorPrimary: '#E7F5FD',
  colorSecondary: '#1CA1ED',

  // UI
  appBg: '#14161F',
  appContentBg: '#1F212E',
  appBorderColor: '#43465B',
  appBorderRadius: 2,

  // Toolbar default and active colors
  barTextColor: '#F4F4F6',
  barSelectedColor: '#65bbf4',
  barBg: '#2C2E3F',

  // Form colors
  inputBg: '#2C2E3F',
  inputBorder: '#43465B',
  inputTextColor: '#F4F4F6',
  inputBorderRadius: 4,

  // Branding
  brandTitle: 'Atomic',
  brandUrl: 'https://github.com/locktech/atomic',
  brandImage: 'https://raw.githubusercontent.com/LockTech/branding/master/SVG-Banner-Transparent-On-Night.svg',
})