
var curry = require('spicy')

/**
 * Returns the `n`th element in the given `array`.
 *
 * @param {Int} n Index
 * @param {Array} array Array to operate on
 * @return {Any} `n`th element
 */

function nth (n, array) {
  return n < 0 ? array[array.length + n] : array[n]
}

module.exports = curry(nth)