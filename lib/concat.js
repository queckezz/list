
var curry = require('spicy')

/**
 * Returns a new array containing both `a` and `b`.
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Array}
 */

function concat (a, b) {
  return a.concat(b)
}

module.exports = curry(concat)