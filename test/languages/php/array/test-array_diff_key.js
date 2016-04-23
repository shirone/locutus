XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_diff_key = require('/Users/kvz/code/phpjs/src/php/array/array_diff_key.js')

describe('php.array.array_diff_key.js', function () {
  it('should pass example 1', function (done) {
    array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5});
    var expected = {"green":2, "blue":3, "white":4}
    var result = array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5});
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5}, {red: 5});
    var expected = {"green":2, "blue":3, "white":4}
    var result = array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5}, {red: 5});
    expect(result).to.deep.equal(expected)
    done()
  })
})