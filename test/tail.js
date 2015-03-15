var tail = require('../lib/tail')
var Assert = require('assert')

/*eslint-env mocha */

describe('#tail()', function () {
  var arr = [1, 2, 3, 4]

  it('should get all items except the first', function () {
    Assert.deepEqual(tail(arr), [2, 3, 4])
  })
})
