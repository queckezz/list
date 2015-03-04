
var islist = require('../lib').islist

var Assert = require('assert')

describe('#islist() / #isarray()', function () {
  it('should return true if a given element is an array', function () {
    Assert.equal(islist([1, 2]), true)
    Assert.equal(islist([]), true)
  })

  it('should return false if a given element is not an array', function () {
    Assert.equal(islist('string'), false)
    Assert.equal(islist(true), false)
    Assert.equal(islist({ obj: 'x' }), false)
  })
})