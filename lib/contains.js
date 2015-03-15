
var curry = require('spicy')

/**
 * Check if `match` is in `array` returning a Boolean.
 *
 * @param {Any} match [item to search for in `array`]
 * @param {Array} array
 * @return {Boolean}
 */

function contains (match, array) {
  return array.indexOf(match) === -1
    ? false
    : true
}

module.exports = curry(contains)