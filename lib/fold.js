
var curry = require('spicy')

/**
 * foldl executes the `combinator` function once for each
 * element present in the array.
 *
 * `combinator` receives the following arguments:
 * - previousVal
 * - currentVal
 * - index
 * - array reference
 *
 * @param {Any} initial
 * @param {Function} combinator
 * @param {Array} array
 */

function fold (initial, combinator, array) {
  return array.reduce(combinator, initial)
}

module.exports = curry(fold)