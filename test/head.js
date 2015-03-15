
var head = require('../lib/head')
var Assert = require('assert')

describe('#head()', function () {
  var arr = [1, 2]
  
  it('should get the first item of the array', function () {
    Assert.equal(head(arr), 1)
  })
})