
var concat = require('./concat')
var curry = require('spicy')

/**
 * Returns a new `array` with the given `element`
 * prepended.
 *
 * @param {Any} element Element to prepend
 * @param {Array} array Array to operate on
 * @return {Array} Array with the given `element` prepended
 */

function prepend (element, array) {
  return concat([element], array)
}

module.exports = curry(prepend)