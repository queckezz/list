
var isarray = require('../lib').isarray

var Assert = require('assert')

describe('#isarray()', function () {
  it('should return true if a given element is an array', function () {
    Assert.equal(isarray([1, 2]), true)
    Assert.equal(isarray([]), true)
  })

  it('should return false if a given element is not an array', function () {
    Assert.equal(isarray('string'), false)
    Assert.equal(isarray(true), false)
    Assert.equal(isarray({ obj: 'x' }), false)
  })
})