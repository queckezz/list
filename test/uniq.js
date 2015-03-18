var uniq = require('../lib/uniq')
var Assert = require('assert')

/*eslint-env mocha */

describe('#uniq()', function () {
  var arr = [1, 1, 2, 3]
  var obj = {a: 1}
  var uniqobj = [{a: 1}, {a: 1}]
  var idobj = [obj, obj]

  it('should return an array containing only unique values', function () {
    Assert.deepEqual(uniq(arr), [1, 2, 3])
  })

  it('should not remove elements pointing to the same memory location', function () {
    Assert.deepEqual(uniq(uniqobj), uniqobj)
  })

  it('should remove elements pointing to the same memory location', function () {
    Assert.deepEqual(uniq(idobj), [{a: 1}])
  })
})