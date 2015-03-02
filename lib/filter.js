
/**
 * Module dependencies.
 */

import curry from 'curry'

/**
 * Returns a new list containing only items that match a
 * given function.
 *
 * @param {Function} fn
 * @param {Array} list
 * @returns {Array}
 */

export default curry((fn, list) => list.filter(fn))