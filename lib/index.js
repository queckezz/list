
var curry = require('curry')

/**
 * Return the elements `from` to `to` in a given `list`.
 *
 * @param {Int} from Starting index
 * @param {Int} to Ending index
 * @param {Array} list List to take elements from
 * @return {Array} The elements `from` to `to`
 */

function slice (from, to, list) {
  return [].slice.call(list, from, to)
}

exports.slice = curry(slice)

/**
 * Slice `n` items from `list`, returning a new array.
 *
 * @param {Int} n How many elements to drop
 * @param {Array} list Array to drop from
 * @return {Array}
 */

function drop (n, list) {
  return (n < list.length)
    ? slice(n, list.length, list)
    : []
}

exports.drop = curry(drop)

/**
 * Shallow copy of an array.
 *
 * @param {Array} list Array that you want to copy
 * @return {Array} Copied `list` array
 */

exports.copy = exports.drop(0)

/**
 * Takes a `list` and return the `n`th item in the list.
 *
 * @param {Int} n Index
 * @param {Array} list Array to operate on
 * @return {Any} `n`th element
 */

function nth (n, list) {
  return n < 0 ? list[list.length + n] : list[n]
}

exports.nth = curry(nth)

/**
 * return the first element in a given array.
 *
 * @function head
 * @param {Array} list Array to operate on
 * @return {Any} First element from the array
 */

exports.head = exports.nth(0)

/**
 * return the last element in a given array.
 *
 * @function last
 * @param {Array}
 * @return {Any} [Last element]
 */

exports.last = exports.nth(-1)

/**
 * Takes a `list` and return a new array containing all
 * elements except the first.
 *
 * @function tail
 * @param {Array} list
 * @return {Array}
 */

exports.tail = exports.drop(1)

/**
 * return a new array containing `a` and `b`.
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
 * Append given `item` to `list` returning a new array.
 *
 * @param {Any} item
 * @param {Array} list
 * @return {Array}
 */

function append (item, list) {
  return concat(list, [item])
}

exports.append = curry(append)

/**
 * Prepend given `item` to `list` returning a new array.
 *
 * @param {Any} item
 * @param {Array} list
 * @return {Array}
 */

function prepend (item, list) {
  return concat([item], list)
}

exports.prepend = curry(prepend)

/**
 * Takes a `list` and return a new array with the items
 * reversed.
 *
 * @param {Array} list
 * @return {Array}
 */

function reverse (list) {
  return exports.copy(list).reverse()
}

exports.reverse = curry(reverse)

/**
 * return a new list containing only items that match a
 * given function.
 *
 * @param {Function} fn
 * @param {Array} list
 * @return {Array}
 *
 * @example
 * filter(even, [1, 2, 3, 4, 5])
 * // -> [2, 4]
 */

function filter (fn, list) {
  return list.filter(fn)
}

exports.filter = curry(filter)

/**
 * Calling `fn` on each element in `list` returning a
 * modified new array.
 *
 * @param {Function} fn
 * @param {Array} list
 * @return {Array}
 */

function map (fn, list) {
  return list.map(fn)
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
 * - list reference
 *
 * @param {Any} initial
 * @param {Function} combinator
 * @param {Array} list
 */

function foldl (initial, combinator, list) {
  return list.reduce(combinator, initial)
}

exports.foldl = curry(foldl)

/**
 * Same as foldl expect starting from the last element in
 * the array
 */

function foldr (initial, combinator, list) {
  return foldl(initial, combinator, reverse(list))
}

exports.foldr = curry(foldr)

/**
 * Check if `match` is in `list` returning a Boolean.
 *
 * @param {Any} match [item to search for in `list`]
 * @param {Array} list
 * @return {Boolean}
 */

function contains (match, list) {
  return list.indexOf(match) === -1
    ? false
    : true
}

exports.contains = curry(contains)

/**
 * Checks whether the list has zero elements.
 *
 * @param {Array} list
 * @return {Boolean}
 */

exports.isempty = function isempty (list) {
  return Object(list).length === 0
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

function islist (a) {
    return Array.isArray(a)
}

exports.islist = exports.isarray = islist
