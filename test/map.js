
require('babel/register')

var map = require('../lib/map')

var Assert = require('assert')
var Type = require('is')

describe('#map()', function () {
  var noop = function () {}

  it('should be curried', function () {
    Assert.ok(Type.fn(map(noop)))
  })

  it('should map over each item calling each item with fn', function () {
    var doubles = map(function (n) {
      return n * 2
    }, [1, 2, 3])

    Assert.deepEqual(doubles, [2, 4, 6])
  })
})
