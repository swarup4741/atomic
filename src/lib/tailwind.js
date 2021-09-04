
/**
 * **Note:** This function will *merge* all top-level classes which start with `@media` into a single object;
 * located at the root of `res`.
 * 
 * @param {Function} fn - The function to call.
 * @param {object} res - The `object` which the result of calling *fn* is added to.
 * @param {unknown} thisArg - A value to be used as *fn's* `this` value.
 * @param {object} arg - An object to be used as *fn's* argument.
 * @returns `res` with the result of calling `fn` *added* to it.
 */
function addFuncToRes (fn, res, thisArg, arg) {
  // <@media-juggling>
  let media = {}

  const fnVal = fn.call(thisArg, arg)
  const fnKeys = Object.keys(fnVal)

  fnKeys.forEach((fnKey) => {
    if (!fnKey.startsWith('@media')) return

    if (fnKey.startsWith('@media')) {
      const mediaVal = fnVal[fnKey]

      media[fnKey] = { ...res[fnKey], ...mediaVal }

      // When a new media query is added, we want it added to the end of `res`
      // so that it overwrites non-media query classes.
      delete fnVal[fnKey]
      delete res[fnKey]
    }
  })
  // </@media-juggling>

  return { ...res, ...fnVal, ...media }
}

function bases (theme, list) {
  let res = {}
  
  list.forEach((item) => {
    const { base } = item

    typeof base === 'function'
      ? res = addFuncToRes(base, res, item, { theme })
      : null
  })

  return res
}
function components (theme, list) {
  let res = {}
  
  list.forEach((item) => {
    const { components } = item

    typeof components === 'function'
    ? res = addFuncToRes(components, res, item, { theme })
    : null
  })

  return res
}
function utilities (theme, list) {
  let res = {}
  
  list.forEach((item) => {
    const { utilities } = item

    typeof utilities === 'function'
    ? res = addFuncToRes(utilities, res, item, { theme })
    : null
  })

  return res
}

module.exports = {
  bases,
  components,
  utilities,
}