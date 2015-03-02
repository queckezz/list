
/**
 * Module dependencies.
 */

import curry from 'curry'

/**
 * 
 */

export default curry(foldl)

/**
 * foldr executes the `combinator` function once for each
 * element present in the array.
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

function foldl (intial, combinator, list) {
  return list.reduce(combinator, initial)
}