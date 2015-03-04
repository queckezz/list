
var nth = require('../lib').nth

var Assert = require('assert')
var Type = require('is')

describe('#nth()', function () {
  var arr = [1, 2, 4, 8, 16]

  it('should be curried', function () {
    Assert.ok(Type.fn(nth(0)))
    Assert.equal(nth(0)(arr), 1)
  })

  it('should get `n`th item in a list', function () {
    Assert.equal(nth(1, arr), 2)
    Assert.equal(nth(3, arr), 8)
  })

  it('should get the last item given n = -1', function () {
    Assert.equal(nth(-1, arr), 16)
  })
})