
var curry = require('spicy')
var slice = require('./slice')

/**
 * Slice `n` items from `array` returning the sliced
 * elements as a new array.
 *
 * @param {Int} n How many elements to drop
 * @param {Array} array Array to drop from
 * @return {Array} New Array with the dropped items
 */

function drop (n, array) {
  return (n < array.length)
    ? slice(n, array.length, array)
    : []
}

module.exports = curry(drop)