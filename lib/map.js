
/**
 * Module dependencies.
 */

import curry from 'curry'

/**
 * Calling `fn` on each element in `list` returning a 
 * modified new array.
 *
 * @param {Function} fn
 * @param {Array} list
 * @returns {Array}
 */

export default curry((fn, list) => list.map(fn))