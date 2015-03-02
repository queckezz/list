
/**
 * Module dependencies.
 */

var curry = require('curry')

/**
 * Append given `item` to `list` returning a new array.
 *
 * @param {Any} item
 * @param {Array} list
 * @returns {Array}
 */

exports.append = curry(append)

function append (item, list) {
  return concat(list, [item])
}

/**
 * Returns a new array containing `a` and `b`.
 *
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */

exports.concat = curry(concat)

function concat (a, b) {
  return a.concat(b)
}

/**
 * Check if `match` is in `list` returning a Boolean.
 *
 * @param {Any} match [item to search for in `list`]
 * @param {Array} list
 * @returns {Boolean}
 */

exports.contains = curry(contains)

function contains (match, list) {
  return list.indexOf(match) == -1
    ? false
    : true
}
