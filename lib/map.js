
var curry = require('spicy')

/**
 * Calling `fn` on each element in `array` returning a
 * modified new array.
 *
 * @param {Function} fn
 * @param {Array} array
 * @return {Array}
 */

function map (fn, array) {
  return array.map(fn)
}

module.exports = curry(map)