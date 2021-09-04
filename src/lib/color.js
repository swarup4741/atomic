/**
 * Convert a hex-code (given in `#rrggbb` format) into its RGB counterpart.
 * 
 * This function **will** take care of formatting the RGB value into a string: `r, g, b`.
 * 
 * > Credits to: https://stackoverflow.com/a/5624139
 * 
 * @param {string} hex - `'#rrggbb'`
 * @returns `'r, g, b'`
 */
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

module.exports = {
  hexToRgb,
}