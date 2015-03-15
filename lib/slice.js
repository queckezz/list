
var curry = require('spicy')

/**
 * Return the elements `from` to `to` in a given `array`.
 *
 * @param {Int} from Starting index
 * @param {Int} to Ending index
 * @param {Array} array Array to take elements from
 * @return {Array} The elements `from` to `to`
 */

function slice (from, to, array) {
  return [].slice.call(array, from, to)
}

module.exports = curry(slice)