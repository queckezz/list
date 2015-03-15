
/**
 * Checks whether the given `array` has zero elements.
 *
 * @param {Array} array
 * @return {Boolean}
 */

module.exports = function isempty (array) {
  return Object(array).length === 0
}