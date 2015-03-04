
var drop = require('../lib').drop

var Assert = require('assert')
var Type = require('is')

describe('#drop()', function () {
  var arr = [1, 2, 4, 8, 16]

  it('should be curried', function () {
    Assert.ok(Type.fn(drop(1)))
    Assert.deepEqual(drop(2)(arr), [4, 8, 16])
  })

  it('should drop `n` item from a list', function () {
    Assert.deepEqual(drop(3, arr), [8, 16])
  })

  it('should return an empty list when array is smaller', function () {
    Assert.deepEqual(drop(10, arr), [])
  })
})