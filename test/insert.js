var insert = require('../lib/insert')
var Assert = require('assert')
var Type = require('is')

/*eslint-env mocha */

describe('#insert()', function () {
  it('should be curried', function () {
    Assert.ok(Type.fn(insert(1, 'el')))
    Assert.deepEqual(insert(1, 'el')([1, 2]), [1, 'el', 2])
  })

  it('should insert an element at given index', function () {
    Assert.deepEqual(insert(1, 'el', [1, 2, 3]), [1, 'el', 2, 3])
  })
})