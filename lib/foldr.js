var reverse = require('./reverse')
var foldl = require('./fold')
var curry = require('spicy')

/**
 * Same as foldl expect starting from the last element in
 * the array
 */

function foldr (initial, combinator, array) {
  return foldl(initial, combinator, reverse(array))
}

module.exports = curry(foldr)
