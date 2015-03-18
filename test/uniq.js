var uniq = require('../lib/uniq')
var Assert = require('assert')

/*eslint-env mocha */

describe('#uniq()', function () {
  var unique = [{a: 1}, {a: 1}]
  var identity = [obj, obj]
  var arr = [1, 1, 2, 3]
  var obj = {a: 1}

  it('should return an array containing only unique values', function () {
    Assert.deepEqual(uniq(arr), [1, 2, 3])
  })

  it('should not remove elements pointing to the same memory location', function () {
    Assert.deepEqual(uniq(unique), unique)
  })

  it('should remove elements pointing to the same memory location', function () {
    Assert.deepEqual(uniq(identity), [{a: 1}])
  })
})