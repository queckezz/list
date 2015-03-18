var flatten = require('../lib/flatten')
var Assert = require('assert')

/*eslint-env mocha */

describe('#flatten()', function () {
  var arr = [1, [2, [3, [4, [5, [6]]]]]]
  var flat = [1, 2, 3, 4, 5, 6]
  var oneDeep = [1, 2, [3, [4, [5, [6]]]]]
  var twoDeep = [1, 2, 3, [4, [5, [6]]]]

  it('should flatten every array in an array', function () {
    Assert.deepEqual(flatten(arr), flat)
  })

  it('should flatten only to a given `depth`', function () {
    Assert.deepEqual(flatten(arr, 1), oneDeep)
    Assert.deepEqual(flatten(arr, 2), twoDeep)
  })
})
