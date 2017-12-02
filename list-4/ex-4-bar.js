var Foo = require('./ex-4-foo.js')

console.log(Foo)

var Bar = function (bar) { this.bar = bar }

Bar.prototype.createFoo = function () {
  console.log(Foo)
  return new Foo('made in Bar')
}

module.exports = Bar

// var Foo = require('./ex-4-foo.js')
