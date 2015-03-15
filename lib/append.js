var concat = require('./concat')
var curry = require('spicy')

/**
 * Returns a new `array` with the given `element` appended.
 *
 * @param {Any} element Element to append
 * @param {Array} array Array to operate on
 * @return {Array} Array with the given `element` appended
 */

function append (element, array) {
  return concat(array, [element])
}

module.exports = curry(append)
