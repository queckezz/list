var curry = require('spicy')
var copy = require('./copy')

/**
 * Returns a new array with the supplied element inserted
 * at index `i`.
 *
 * @param {Int} i
 * @param {Any} val
 * @param {Array} array
 * @return {Array}
 */

function insert (i, val, array) {
  array = copy(array)
  array.splice(i, 0, val)
  return array
}

module.exports = curry(insert)
