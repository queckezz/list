
/**
 * Module dependencies.
 */

var slice = require('sliced')

/**
 * Takes a `list` and returns a new array with the items
 * reversed.
 *
 * @param {Array} list
 * @returns {Array}
 */

export default (list) => slice(list, 0).reverse()