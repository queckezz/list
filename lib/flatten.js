var concat = require('./concat')
var fold = require('./fold')
var is = require('is')

/**
 * Flatten an given `array` until `max` depth is reached.
 *
 * @param {Array} array
 * @param {max} max Max depth
 * @return {Array} Flattened Array
 */

function flatten (array, max) {
  max = (is.number(max)) ? max : Infinity
  return _flatten(max, array, 1)
}

module.exports = flatten

function _flatten (max, array, depth) {
  if (depth > max) return array
  return fold([], each, array)
}

function each (acc, element) {
  if (!is.array(element)) return concat(acc, element)
  return concat(acc, _flatten(max, element, depth + 1))
}
