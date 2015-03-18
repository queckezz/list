var contains = require('./contains')
var append = require('./append')
var fold = require('./fold')

/**
 * Returns a new array containing only unique elements.
 *
 * Note that it is strict about equality:
 *   [{a: 1}, {a: 1}]
 *   Are not considered equal because they point to
 *   different memory locations.
 *
 *   var obj = {a: 1}
 *   [obj, obj]
 *   Are considered equal.
 *
 * @param {Array} array
 * @return {Array} Unique elements
 *
 * @example
 * uniq([1, 1, 2, 3]) -> [1, 2, 3]
 */

var uniq = fold([], _uniq)

function _uniq (acc, element) {
  if (contains(element, acc)) return acc
  return append(element, acc)
}

module.exports = uniq
