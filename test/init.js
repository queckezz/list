var init = require('../lib/init')
var Assert = require('assert')

/*eslint-env mocha */

describe('#init()', function () {
  it('should return the all but the last element', function () {
    Assert.deepEqual(init([1, 2, 3]), [1, 2])
  })
})
