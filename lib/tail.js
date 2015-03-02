
/**
 * Module dependencies.
 */

var slice = require('sliced')

/**
 * Takes a `list` and returns a new array containing all
 * elements except the first.
 *
 * @param {Array} list
 * @returns {Array}
 */

export default (list) => slice(list, 1)