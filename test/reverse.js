
var reverse = require('../lib/reverse')
var Assert = require('assert')

describe('#reverse()', function () {
  var fst = [1, 2]
  
  it('should not mutate the original array', function () {
    reverse(fst)
    Assert.deepEqual(fst, [1, 2])
  })

  it('should reverse an array', function () {
    Assert.deepEqual(reverse(fst), [2, 1])
  })
})