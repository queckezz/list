
/**
 * Module dependencies.
 */

var curry = require('curry')

/**
 * Exports curried `contains`.
 */

module.exports = curry(contains)

/**
 * Check if `match` is in `list` returning a Boolean.
 *
 * @param {Any} match [item to search for in `list`]
 * @param {Array} list
 * @returns {Boolean}
 */

function contains (match, list) {
  return list.indexOf(match) == -1
    ? false
    : true
}