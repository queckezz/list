var isempty = require('../lib/isempty')
var Assert = require('assert')

/*eslint-env mocha */

describe('#isempty()', function () {
  it('should check whether an array is empty', function () {
    Assert.equal(isempty(''), true)
    Assert.equal(isempty([]), true)
    Assert.equal(isempty([1, 2]), false)
    Assert.equal(isempty([function () {}]), false)
  })
})
