
var curry = require('curry')

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

exports.slice = curry(slice)

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

exports.drop = curry(drop)

/**
 * Shallow copy of a given `array`.
 *
 * @param {Array} array Array that you want to copy
 * @return {Array} Copied `array` array
 */

exports.copy = exports.drop(0)

/**
 * Returns the `n`th element in the given `array`.
 *
 * @param {Int} n Index
 * @param {Array} array Array to operate on
 * @return {Any} `n`th element
 */

function nth (n, array) {
  return n < 0 ? array[array.length + n] : array[n]
}

exports.nth = curry(nth)

/**
 * Returns the first element in the given `array`.
 *
 * @function head
 * @param {Array} array Array to operate on
 * @return {Any} First element from the array
 */

exports.head = exports.nth(0)

/**
 * Returns the last element in a given `array`.
 *
 * @function last
 * @param {Array} array Array to operate on
 * @return {Any} Last element from `array`
 */

exports.last = exports.nth(-1)

/**
 * Returns all elements in an `array` except the first.
 *
 * @function tail
 * @param {Array} array Array to operate on
 * @return {Array} All items except the first
 */

exports.tail = exports.drop(1)

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

exports.concat = curry(concat)

/**
 * Returns a new `array` with the given `element` appended.
 *
 * @param {Any} element Element to append
 * @param {Array} array Array to operate on
 * @return {Array} Array with the given `element` appended
 */

function append (element, array) {
  return concat(array, [element])
}

exports.append = curry(append)

/**
 * Returns a new `array` with the given `element`
 * prepended.
 *
 * @param {Any} element Element to prepend
 * @param {Array} array Array to operate on
 * @return {Array} Array with the given `element` prepended
 */

function prepend (element, array) {
  return concat([element], array)
}

exports.prepend = curry(prepend)

/**
 * Returns a new Array with the given `array`s elements
 * reversed.
 *
 * @param {Array} array Array to operate on
 * @return {Array}  Array with the given `array` reversed
 */

function reverse (array) {
  return exports.copy(array).reverse()
}

exports.reverse = curry(reverse)

/**
 * Returns a new `array` containing only items that match a
 * given function.
 *
 * @param {Function} fn Filter function
 * @param {Array} array Array to operate on
 * @return {Array} Filtered array
 *
 * @example
 * filter(even, [1, 2, 3, 4, 5])
 * // -> [2, 4]
 */

function filter (fn, array) {
  return array.filter(fn)
}

exports.filter = curry(filter)

/**
 * Calling `fn` on each element in `array` returning a
 * modified new array.
 *
 * @param {Function} fn
 * @param {Array} array
 * @return {Array}
 */

function map (fn, array) {
  return array.map(fn)
}

exports.map = curry(map)

/**
 * foldl executes the `combinator` function once for each
 * element present in the array.
 *
 * `combinator` receives the following arguments:
 * - previousVal
 * - currentVal
 * - index
 * - array reference
 *
 * @param {Any} initial
 * @param {Function} combinator
 * @param {Array} array
 */

function foldl (initial, combinator, array) {
  return array.reduce(combinator, initial)
}

exports.foldl = curry(foldl)

/**
 * Same as foldl expect starting from the last element in
 * the array
 */

function foldr (initial, combinator, array) {
  return foldl(initial, combinator, reverse(array))
}

exports.foldr = curry(foldr)

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

exports.contains = curry(contains)

/**
 * Checks whether the given `array` has zero elements.
 *
 * @param {Array} array
 * @return {Boolean}
 */

exports.isempty = function isempty (array) {
  return Object(array).length === 0
}

/**
 * Checks if `a` is an array.
 *
 * @param {Array} a Array to operate on
 * @return {Boolean} True if it is array, false otherwise
 * @alias isarray
 *
 * @example
 * islist([1, 2])
 * // -> true
 *
 * islist('string')
 * // -> false
 */

function isarray (a) {
    return Array.isArray(a)
}

exports.isarray = isarray
