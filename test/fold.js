var fold = require('../lib/fold')
var foldr = require('../lib/foldr')
var Assert = require('assert')
var Type = require('is')

/*eslint-env mocha */

describe('#fold()', function () {
  var arr = [4, 6, 3]

  it('should be curried', function () {
    var acc = fold(0, function (acc, val) { return acc + val })
    Assert.ok(Type.fn(acc))
    Assert.equal(acc(arr), 13)
  })

  it('should fold left', function () {
    var total = fold(0, function (acc, val) {
      return acc + val
    }, arr)

    Assert.equal(total, 13)
  })
})

describe('#foldr()', function () {
  var arr = [2, 5, 20]

  it('should be curried', function () {
    var acc = foldr(0, function (acc, val) { return acc + val })
    Assert.ok(Type.fn(acc))
    Assert.equal(acc(arr), 27)
  })

  it('should fold right', function () {
    var total = foldr(400, function (acc, val) {
      return acc / val
    }, arr)

    Assert.equal(total, 2)
  })
})
