var Foo = require('./ex-4-foo')
var Bar = require('./ex-4-bar')

var foo = new Bar().createFoo()
var bar = new Foo().createBar()

console.log(foo)
console.log(bar)
