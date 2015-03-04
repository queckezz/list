
var contains = require('../lib').contains
var filter = require('../lib').filter

var Assert = require('assert')
var Type = require('is')

describe('#filter()', function () {
  var fst = [1, 2, 3, 4, 5]
  
  it('should be curried', function () {
    var uneven = filter(function (x) { return x % 2})
    Assert.ok(Type.fn(uneven))
    Assert.deepEqual(uneven(fst), [1, 3, 5])
  })

  it('should filter out based on a function', function () {
    var res = filter(function (num) {
      return num % 3
    }, fst)

    Assert.ok(!contains(3, res))
  })
})