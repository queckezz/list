
var concat = require('../lib').concat

var Assert = require('assert')
var Type = require('is')

describe('#concat()', function () {
  var fst = [1, 2]
  var sec = [3, 4]
  
  it('should be curried', function () {
    var cfst = concat(fst)
    Assert.ok(Type.fn(cfst))
    Assert.deepEqual(cfst(sec), [1, 2, 3, 4])
  })

  it('should concat two arrays', function () {
    Assert.deepEqual(concat(fst, sec), [1, 2, 3, 4])
  })
})