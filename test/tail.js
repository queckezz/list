
require('babel/register')

var tail = require('../lib/tail')

var Assert = require('assert')

describe('#tail()', function () {
  var arr = [1, 2, 3, 4]
  
  it('should get all items except the first', function () {
    Assert.deepEqual(tail(arr), [2, 3, 4])
  })
})