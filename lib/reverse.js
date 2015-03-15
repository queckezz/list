var copy = require('./copy')

/**
 * Returns a new Array with the given `array`s elements
 * reversed.
 *
 * @param {Array} array Array to operate on
 * @return {Array}  Array with the given `array` reversed
 */

function reverse (array) {
  return copy(array).reverse()
}

module.exports = reverse
