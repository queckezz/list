
/**
 * Module dependencies.
 */

import reverse from './reverse'
import foldr from './foldr'
import curry from 'curry'

/**
 * Exports curried `foldr`
 */

export default curry(foldr)

/**
 * foldr executes the `combinator` function once for each
 * element present in the array starting from the last.
 *
 * `combinator` receives the following arguments:
 * - previousVal
 * - currentVal
 * - index
 * - list reference
 *
 * @param {Any} initial
 * @param {Function} combinator
 * @param {Array} list
 */

function foldr (intial, combinator, list) {
  return foldl(combinator, initial, reverse(list))
}