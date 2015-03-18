var slice = require('./slice')

/**
 * Returns all but the last element of an array. Reversed
 * #tail()
 *
 * @function init
 * @param {Array} arr Array to operate on
 * @return {Array}
 */

module.exports = slice(0, -1)
