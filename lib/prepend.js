
/**
 * Module dependencies.
 */

import curry from 'curry'
import concat from './concat'

/**
 * Prepend given `item` to `list` returning a new array.
 *
 * @param {Any} item
 * @param {Array} list
 * @returns {Array}
 */

export default curry((item, list) => concat([item], list))