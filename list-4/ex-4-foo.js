// var Bar = require('./ex-4-bar.js')

var Foo = function (foo) {
  this.foo = foo
}

Foo.prototype.createBar = function () { return new Bar('made in Foo') }

module.exports = Foo

// If moved on top of a file, loading of modules would load empty object
var Bar = require('./ex-4-bar.js')
