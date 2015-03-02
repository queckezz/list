
require('babel/register')

var last = require('../lib/last')

var Assert = require('assert')
var Type = require('is')

describe('#last()', function () {
  var fst = [1, 2, 3]
  var sec = [19, 3, 7, 90]
  
  it('should get the last item in an array', function () {
    Assert.equal(last(fst), 3)
    Assert.equal(last(sec), 90)
  })
})