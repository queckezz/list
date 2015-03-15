var curry = require('spicy')

/**
 * Returns a new `array` containing only items that match a
 * given function.
 *
 * @param {Function} fn Filter function
 * @param {Array} array Array to operate on
 * @return {Array} Filtered array
 *
 * @example
 * filter(even, [1, 2, 3, 4, 5])
 * // -> [2, 4]
 */

function filter (fn, array) {
  return array.filter(fn)
}

module.exports = curry(filter)
