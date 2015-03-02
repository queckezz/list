
/**
 * Module dependencies.
 */

import curry from 'curry'
import slice from 'sliced'

/**
 * Slice `n` items from `list`, returning a new array.
 *
 * @param {Int} n [`n`th item]
 * @param {Array} list
 * @returns {Array}
 */

export default curry((n, list) => {
  return (n < list.length) ? slice(list, n) : []
})