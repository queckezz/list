
var prepend = require('../lib/prepend')
var Assert = require('assert')
var Type = require('is')

describe('#prepend()', function () {
  var fst = 1
  var sec = 2

  it('should be curried', function () {
    Assert.ok(Type.fn(prepend(1)))
    Assert.deepEqual(prepend(fst)([sec]), [1, 2])
  })

  it('should prepend an item to an array', function () {
    Assert.deepEqual(prepend(fst, [sec]), [1, 2])
  })
})