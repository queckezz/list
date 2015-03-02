
require('babel/register')

var contains = require('../lib/contains')

var Assert = require('assert')
var Type = require('is')

describe('#contains()', function () {
  var arr = [4, 1, 2]

  it('should be curried', function () {
    Assert.ok(Type.fn(contains(1)))
    Assert.ok(contains(1)(arr))
  })

  it('should find an item in an array', function () {
    Assert.ok(contains(1, arr), true)
  })

  it('should not return true if the item isn\'t in array', function () {
    Assert.ok(!contains(100, arr), true)
  })
})