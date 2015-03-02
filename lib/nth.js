
/**
 * Module dependencies.
 */

import curry from 'curry'

/**
 * Takes a `list` and returns the `n`th item in the list.
 *
 * @param {Int} n [index]
 * @param {Array} list
 * @returns {Array} [`n`th item]
 */

export default curry((n, list) => {
  return n < 0 ? list[list.length + n] : list[n]
})