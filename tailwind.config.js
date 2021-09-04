module.exports = {
  presets: [
    require('./src/preset'),
  ],
  purge: [
    './src/**/*.{js,jsx,ts,tsx,html,css}',
    './stories/**/*.{js,jsx,ts,tsx,html,css,mdx}',
  ],
}
