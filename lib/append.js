
/**
 * Module dependencies.
 */

var concat = require('./concat')
var curry = require('curry')

/**
 * Exports curried `append`.
 */

module.exports = curry(append)

/**
 * Append given `item` to `list` returning a new array.
 *
 * @param {Any} item
 * @param {Array} list
 * @returns {Array}
 */

function append (item, list) {
  return concat(list, [item])
}