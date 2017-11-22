var Foo = (function () {
  var self // use this to acces internal state of Foo in private methods
  function Foo (v) {
    this.value = v
    self = this
  }

  function Qux () {
    console.log('From private' + ' ' + self.value)
  }

  Foo.prototype.Bar = function () {
    console.log('Bar, calling Qux')
    Qux()
  }

  return Foo
})()

var f = new Foo('something')

console.log(f)

f.Bar()

console.log(f.Qux) // undefined
