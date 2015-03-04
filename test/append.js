
var append = require('../lib').append

var Assert = require('assert')
var Type = require('is')

describe('#append()', function () {
  var fst = 1
  var sec = 2

  it('should be curried', function () {
    Assert.ok(Type.fn(append(fst)))
    Assert.deepEqual(append(sec)([fst]), [1, 2])
  })

  it('should append an item to an array', function () {
    Assert.deepEqual(append(2, [1]), [1, 2])
  })
})
