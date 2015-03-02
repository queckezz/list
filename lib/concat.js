
/**
 * Module dependencies.
 */

var curry = require('curry')

/**
 * Exports curried `concat`.
 */

module.exports = curry(concat)

/**
 * Returns a new array containing `a` and `b`.
 *
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */

function concat (a, b) {
  return a.concat(b)
}
